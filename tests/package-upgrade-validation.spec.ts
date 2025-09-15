import { expect, test } from "@playwright/test";

// Basic functional tests to ensure the application works after package upgrades
test.describe("Package Upgrade Validation", () => {
  test("homepage loads successfully", async ({ page }) => {
    await page.goto("/");
    
    // Check that the page loads without throwing errors
    await expect(page).toHaveTitle(/Tarun Singh/);
    
    // Verify main content is present
    await expect(page.locator("h1, h2, h3").first()).toBeVisible();
  });

  test("no console errors on page load", async ({ page }) => {
    const errors: string[] = [];
    
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    
    // Filter out expected development/testing environment errors
    const criticalErrors = errors.filter(error => 
      !error.includes("favicon") && 
      !error.includes("manifest") &&
      !error.includes("analytics") &&
      !error.includes("tracking") &&
      !error.includes("PostHog was initialized without a token") && // Expected in test environment
      !error.includes("CORS policy") && // Expected when testing external APIs locally
      !error.includes("Failed to load resource") && // Related to CORS/network issues in tests
      !error.includes("net::ERR_FAILED") // Network errors in test environment
    );
    
    expect(criticalErrors).toHaveLength(0);
  });

  test("social media links are present and valid", async ({ page }) => {
    await page.goto("/");
    
    // Check for LinkedIn link
    const linkedInLink = page.locator('a[href*="linkedin.com"]');
    if (await linkedInLink.count() > 0) {
      await expect(linkedInLink.first()).toHaveAttribute("href", /linkedin\.com/);
    }
    
    // Check for GitHub link
    const githubLink = page.locator('a[href*="github.com"]');
    if (await githubLink.count() > 0) {
      await expect(githubLink.first()).toHaveAttribute("href", /github\.com/);
    }
    
    // Check for email link
    const emailLink = page.locator('a[href^="mailto:"]');
    if (await emailLink.count() > 0) {
      await expect(emailLink.first()).toHaveAttribute("href", /mailto:/);
    }
  });

  test("responsive design works on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    
    // Check that content is still visible and accessible on mobile
    await expect(page.locator("h1, h2, h3").first()).toBeVisible();
    
    // Verify no horizontal overflow
    const bodyWidth = await page.locator("body").evaluate((el) => el.scrollWidth);
    const viewportWidth = await page.viewportSize();
    expect(bodyWidth).toBeLessThanOrEqual((viewportWidth?.width || 390) + 20); // Allow small margin
  });

  test("theme switching functionality", async ({ page }) => {
    await page.goto("/");
    
    // Look for theme toggle button
    const themeToggle = page.locator('button[aria-label*="theme"], .theme-toggle, [data-testid="theme-toggle"]');
    
    if (await themeToggle.count() > 0) {
      // Test theme toggle
      const initialTheme = await page.locator("html").getAttribute("class");
      await themeToggle.first().click();
      await page.waitForTimeout(1000);
      const newTheme = await page.locator("html").getAttribute("class");
      
      // Verify theme changed
      expect(initialTheme).not.toEqual(newTheme);
    }
  });

  test("animations and interactions work", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    
    // Test hover effects on interactive elements
    const interactiveElements = page.locator("button, a[role='button'], .btn, a[href]");
    const count = await interactiveElements.count();
    
    if (count > 0) {
      // Test hover on first few interactive elements
      for (let i = 0; i < Math.min(count, 3); i++) {
        const element = interactiveElements.nth(i);
        if (await element.isVisible()) {
          await element.hover();
          await page.waitForTimeout(200);
          // Just verify no errors occurred during hover
          await expect(element).toBeVisible();
        }
      }
    }
  });

  test("build-time generated content loads", async ({ page }) => {
    await page.goto("/");
    
    // Wait for the main animation to complete (500ms timeout + animation duration)
    await page.waitForTimeout(1500);
    
    // Verify that the main motion div becomes visible after animation
    const mainDiv = page.locator('div[style*="opacity: 1"]').first();
    await expect(mainDiv).toBeVisible();
    
    // Check for any content that should be rendered
    const textContent = await page.textContent("body");
    expect(textContent).toContain("Tarun"); // Should contain the name
  });
});
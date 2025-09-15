import { expect, test } from "@playwright/test";

test.describe("UI Visual Regression Tests", () => {
  test.describe("Desktop View", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("/");
      // Wait for the page to fully load and animations to complete
      await page.waitForSelector('[data-testid="hero-section"], .hero, h1', { timeout: 10000 });
      await page.waitForTimeout(2000); // Wait for animations
    });

    test("homepage full page screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot("homepage-desktop-full.png", {
        fullPage: true,
        animations: "disabled",
      });
    });

    test("header section", async ({ page }) => {
      const header = page.locator("header, nav, .header").first();
      await expect(header).toHaveScreenshot("header-desktop.png");
    });

    test("hero section", async ({ page }) => {
      const hero = page.locator('[data-testid="hero-section"], .hero, main > div:first-child').first();
      await expect(hero).toHaveScreenshot("hero-desktop.png");
    });

    test("skills section", async ({ page }) => {
      const skills = page.locator('[data-testid="skills-section"], #skills, section:has-text("Skills")').first();
      await expect(skills).toHaveScreenshot("skills-desktop.png");
    });

    test("open source section", async ({ page }) => {
      const openSource = page.locator('[data-testid="opensource-section"], #opensource, section:has-text("Open Source")').first();
      await expect(openSource).toHaveScreenshot("opensource-desktop.png");
    });

    test("experience section", async ({ page }) => {
      const experience = page.locator('[data-testid="experience-section"], #experience, section:has-text("Experience")').first();
      await expect(experience).toHaveScreenshot("experience-desktop.png");
    });

    test("projects section", async ({ page }) => {
      const projects = page.locator('[data-testid="projects-section"], #projects, section:has-text("Projects")').first();
      await expect(projects).toHaveScreenshot("projects-desktop.png");
    });

    test("contact section", async ({ page }) => {
      const contact = page.locator('[data-testid="contact-section"], #contact, section:has-text("Contact")').first();
      await expect(contact).toHaveScreenshot("contact-desktop.png");
    });

    test("footer section", async ({ page }) => {
      const footer = page.locator("footer, .footer").first();
      await expect(footer).toHaveScreenshot("footer-desktop.png");
    });
  });

  test.describe("Tablet View", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto("/");
      await page.waitForSelector('[data-testid="hero-section"], .hero, h1', { timeout: 10000 });
      await page.waitForTimeout(2000);
    });

    test("homepage full page screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot("homepage-tablet-full.png", {
        fullPage: true,
        animations: "disabled",
      });
    });

    test("hero section tablet", async ({ page }) => {
      const hero = page.locator('[data-testid="hero-section"], .hero, main > div:first-child').first();
      await expect(hero).toHaveScreenshot("hero-tablet.png");
    });
  });

  test.describe("Mobile View", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto("/");
      await page.waitForSelector('[data-testid="hero-section"], .hero, h1', { timeout: 10000 });
      await page.waitForTimeout(2000);
    });

    test("homepage full page screenshot", async ({ page }) => {
      await expect(page).toHaveScreenshot("homepage-mobile-full.png", {
        fullPage: true,
        animations: "disabled",
      });
    });

    test("hero section mobile", async ({ page }) => {
      const hero = page.locator('[data-testid="hero-section"], .hero, main > div:first-child').first();
      await expect(hero).toHaveScreenshot("hero-mobile.png");
    });

    test("navigation menu mobile", async ({ page }) => {
      // Test mobile navigation if it exists
      const mobileNav = page.locator('[data-testid="mobile-nav"], .mobile-nav, button[aria-label*="menu"]');
      if (await mobileNav.count() > 0) {
        await mobileNav.first().click();
        await page.waitForTimeout(500);
        await expect(page.locator('[data-testid="mobile-menu"], .mobile-menu')).toHaveScreenshot("mobile-menu.png");
      }
    });
  });

  test.describe("Theme Testing", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("/");
      await page.waitForSelector('[data-testid="hero-section"], .hero, h1', { timeout: 10000 });
      await page.waitForTimeout(2000);
    });

    test("dark theme", async ({ page }) => {
      // Ensure dark theme is active
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      });
      await page.waitForTimeout(1000);
      
      await expect(page).toHaveScreenshot("homepage-dark-theme.png", {
        fullPage: true,
        animations: "disabled",
      });
    });

    test("light theme", async ({ page }) => {
      // Switch to light theme
      await page.evaluate(() => {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      });
      await page.waitForTimeout(1000);
      
      await expect(page).toHaveScreenshot("homepage-light-theme.png", {
        fullPage: true,
        animations: "disabled",
      });
    });

    test("theme toggle button", async ({ page }) => {
      const themeToggle = page.locator('[data-testid="theme-toggle"], button[aria-label*="theme"], .theme-toggle');
      if (await themeToggle.count() > 0) {
        await expect(themeToggle.first()).toHaveScreenshot("theme-toggle-button.png");
        
        // Test theme toggle functionality
        await themeToggle.first().click();
        await page.waitForTimeout(1000);
        await expect(page.locator('body, html')).toHaveScreenshot("after-theme-toggle.png");
      }
    });
  });

  test.describe("Interactive Elements", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("/");
      await page.waitForSelector('[data-testid="hero-section"], .hero, h1', { timeout: 10000 });
      await page.waitForTimeout(2000);
    });

    test("hover states on buttons", async ({ page }) => {
      const buttons = page.locator('button, a[role="button"], .btn');
      const buttonCount = await buttons.count();
      
      for (let i = 0; i < Math.min(buttonCount, 5); i++) {
        const button = buttons.nth(i);
        await button.hover();
        await page.waitForTimeout(300);
        await expect(button).toHaveScreenshot(`button-hover-${i}.png`);
      }
    });

    test("social media links", async ({ page }) => {
      const socialLinks = page.locator('a[href*="linkedin"], a[href*="github"], a[href*="twitter"]');
      if (await socialLinks.count() > 0) {
        await expect(socialLinks.first()).toHaveScreenshot("social-links.png");
      }
    });

    test("project cards or items", async ({ page }) => {
      const projectItems = page.locator('[data-testid="project-card"], .project-card, .project-item');
      if (await projectItems.count() > 0) {
        // Take screenshot of first project item
        await expect(projectItems.first()).toHaveScreenshot("project-card.png");
        
        // Test hover state
        await projectItems.first().hover();
        await page.waitForTimeout(300);
        await expect(projectItems.first()).toHaveScreenshot("project-card-hover.png");
      }
    });
  });

  test.describe("Accessibility and Focus States", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("/");
      await page.waitForSelector('[data-testid="hero-section"], .hero, h1', { timeout: 10000 });
      await page.waitForTimeout(2000);
    });

    test("keyboard navigation focus states", async ({ page }) => {
      // Test tab navigation
      await page.keyboard.press("Tab");
      await page.waitForTimeout(200);
      const focused = page.locator(":focus");
      if (await focused.count() > 0) {
        await expect(focused).toHaveScreenshot("first-focus-state.png");
      }

      // Continue tabbing through a few elements
      for (let i = 0; i < 3; i++) {
        await page.keyboard.press("Tab");
        await page.waitForTimeout(200);
        const currentFocus = page.locator(":focus");
        if (await currentFocus.count() > 0) {
          await expect(currentFocus).toHaveScreenshot(`focus-state-${i + 2}.png`);
        }
      }
    });
  });
});
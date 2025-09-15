import { expect, test } from "@playwright/test";

test.describe("Portfolio UI Snapshots - Before Package Upgrades", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for the page to load
    await page.waitForLoadState("networkidle");
    // Wait a bit more for any animations or dynamic content
    await page.waitForTimeout(3000);
  });

  test("Desktop - Full Homepage", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page).toHaveScreenshot("desktop-homepage-full.png", {
      fullPage: true,
      animations: "disabled",
    });
  });

  test("Desktop - Above the fold", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page).toHaveScreenshot("desktop-homepage-above-fold.png", {
      animations: "disabled",
    });
  });

  test("Tablet - Full Homepage", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page).toHaveScreenshot("tablet-homepage-full.png", {
      fullPage: true,
      animations: "disabled",
    });
  });

  test("Mobile - Full Homepage", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page).toHaveScreenshot("mobile-homepage-full.png", {
      fullPage: true,
      animations: "disabled",
    });
  });

  test("Mobile - Above the fold", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page).toHaveScreenshot("mobile-homepage-above-fold.png", {
      animations: "disabled",
    });
  });
});
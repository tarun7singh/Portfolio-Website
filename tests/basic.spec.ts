import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /Tarun Singh | Senior Software Engineer | AI and Full Stack/
  );
});

test("validate all links", async ({ page }) => {
  const validLinks = {
    linkedIn: "https://www.linkedin.com/in/tarun7singh/",
    github: "https://github.com/tarun7singh",
    twitter: "https://twitter.com/tarun7singh",
    resume: "/Resume.pdf",
    email: "mailto:hello@tarunsingh.dev",
  };
  await page.goto("/");
  expect(
    await page
      .getByRole("link", { name: "LinkedIn Profile" })
      .getAttribute("href")
  ).toEqual(validLinks.linkedIn);
  expect(
    await page
      .getByRole("link", { name: "Github profile" })
      .getAttribute("href")
  ).toEqual(validLinks.github);
  expect(
    await page
      .getByRole("link", { name: "Twitter profile" })
      .getAttribute("href")
  ).toEqual(validLinks.twitter);
  expect(
    await page.getByRole("link", { name: "Resume-PDF" }).getAttribute("href")
  ).toEqual(validLinks.resume);
  expect(
    await page
      .getByRole("link", { name: "hello@tarunsingh.dev" })
      .getAttribute("href")
  ).toEqual(validLinks.email);
});

test("has one canonical homepage heading and no duplicate SEO tags", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  await expect(page.locator('meta[name="description"]')).toHaveCount(1);
  await expect(page.locator('meta[name="robots"]')).toHaveCount(1);
});

test("privacy page has page-specific SEO metadata", async ({ page }) => {
  await page.goto("/flag-guard/privacy/");

  await expect(page).toHaveTitle("Privacy Policy | Tarun Singh");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://tarunsingh.dev/flag-guard/privacy/"
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Privacy Policy | Tarun Singh"
  );
});

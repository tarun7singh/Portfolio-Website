import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://tarunsingh.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /Tarun Singh | Full Stack Developer | Typescript, NodeJS, ReactJS/
  );
});

test("test", async ({ page }) => {
  const validLinks = {
    linkedIn: "https://www.linkedin.com/in/tarun7singh/",
    github: "https://github.com/tarun7singh",
    twitter: "https://twitter.com/tarun7singh",
    resume: "https://tarunsingh.dev/resume/Resume.pdf",
    email: "mailto:hello@tarunsingh.dev",
  };
  await page.goto("https://tarunsingh.dev/");
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
    await page.getByRole("link", { name: "Resume" }).getAttribute("href")
  ).toEqual(validLinks.resume);
  expect(
    await page
      .getByRole("link", { name: "hello@tarunsingh.dev" })
      .getAttribute("href")
  ).toEqual(validLinks.email);
});

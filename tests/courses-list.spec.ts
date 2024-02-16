import { expect, test } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Название").click();
  await page.getByPlaceholder("Название").fill("Test course");
  await page.getByPlaceholder("Описание").click();
  await page.getByPlaceholder("Описание").fill("Test description");
  await page.getByRole("button", { name: "Добавить" }).click();

  await expect(
    page.getByText("Test courseTest descriptionУдалить"),
  ).toBeVisible();
  await page
    .locator("div")
    .filter({ hasText: /^Test courseTest descriptionУдалить$/ })
    .getByRole("button")
    .click();

  await expect(
    page.getByText("Test courseTest descriptionУдалить"),
  ).not.toBeVisible();
});

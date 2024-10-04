import { expect } from "@playwright/test"

const {test} = require('@playwright/test')



test('Fiest test',async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  
console.log(await page.title())
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
const per =await page.locator("//input[@id='password']")
console.log(await per.locator('preceding-sibling::label').innerText())

})
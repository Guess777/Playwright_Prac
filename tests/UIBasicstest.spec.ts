import { Locator } from "@playwright/test"
import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';



test('Fiest test',async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  
console.log(await page.title())
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

})



test('Table',async ({page})=>
    {
    await page.goto("https://letcode.in/table")
    //columns
    let store:string [] = []
    const column =await page.locator('[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"] th').allInnerTexts();
    console.log(column)
   
    console.log(store)
    //Rows
    ;
    let i=1

    for (let columnname of column)
    {
        
        console.log("value of i =" +i)
        let row =await page.locator(`//table[@class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"]//tr/td[${i}]`).allInnerTexts()
        console.log(row)
        await page.locator(`[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"] th:has-text("${columnname}")`).click()

        await page.waitForTimeout(2000);
        const sort= await page.locator(`[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"] th:has-text("${columnname}")`).getAttribute("aria-sort")
        console.log("Sorting ="+sort)
        row.sort();
        console.log("Sorting ="+row.sort())
        console.log("After click sort="+row)
        i++

    }
    

    })

    
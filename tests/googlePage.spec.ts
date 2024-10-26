
import { Page,test } from "@playwright/test";
import { BasePage } from "../BasePage";
import { googlePage } from "../Pages/googlePage";

let base_page : BasePage
let googlePpage: googlePage

test.beforeEach( async({page})=>{

    base_page = new BasePage(page)
    googlePpage = new googlePage(page)
    
})

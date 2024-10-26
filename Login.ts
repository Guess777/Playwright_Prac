import { expect, Locator, Page } from "@playwright/test";
import { getSecrets } from "./secrets";
import { getEnvironment } from "./environment";

//set your env here
const environment = getEnvironment('dev') // change to dev, sit , uat
const secrets = getSecrets ('dev')

export class Login {
    private readonly page : Page
    private readonly usernameinput : Locator
    private readonly passwordInput : Locator
    private readonly loginButton: Locator
    private readonly logo: Locator

    constructor (page : Page){
        this.page = page
        this.usernameinput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.logo = page.locator('.app_logo')

    }

    async navigateTo(){
        await this.page.goto(environment.baseUrl)
    }

    async login(){
        await this.usernameinput.fill(secrets.username)
        await this.passwordInput.fill(secrets.password)
        await this.loginButton.click()  
        await expect (await this.logo).toBeVisible()
    }
}
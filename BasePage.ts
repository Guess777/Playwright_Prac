import { Page } from 'playwright';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getTextContent(selector: string) {
        return await this.page.locator(selector).textContent();
    }
}
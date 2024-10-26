import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";


export class googlePage extends BasePage {
    readonly searchInput: Locator
    readonly searchResults = '#search';

    constructor(page: any) {
        super(page);
        this.searchInput = page.locator("#input")

    }

    async search(query: string) {
        await this.searchInput.fill("query");
        await this.getTextContent()
        await this.page.waitForSelector(this.searchResults);
    }

    async getResultsText() {
        return this.getTextContent(this.searchResults);
    }
}
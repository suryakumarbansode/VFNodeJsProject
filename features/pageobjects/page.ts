/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects - Pull example
*/
export default class Page {
    /**
    * Opens a sub page of the page - testing
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}

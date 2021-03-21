export default class Page {
    get dropdownAttend () { return $('button[data-e2e-name="button"][da-label="Attend"]'); }
    get itemUnlimitedWorkshops () { return $('a[da-action="nav_header_unlimited-workshops"]'); }

    goToUnlimitedWorkShops() {
        this.dropdownAttend.click();
        this.itemUnlimitedWorkshops.click();
    }

    open (path) {
        return browser.url(path)
    }
}

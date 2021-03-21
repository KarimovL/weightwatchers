import Page from '../pageobjects/page';

class FindLocationPage extends Page {
    get spanStudio () { return $('//span[.="Studio"]'); }
    get inputLocation () { return $('#location-search'); }
    get firstLocation () { return $('(//div[contains(@class, \'heading\')])[1]'); }
    get firstLocationName () { return this.firstLocation.$('./div/a'); }
    get firstLocationDistance () { return this.firstLocation.$('./span'); }

    getFirstLocationName () {
        return this.firstLocationName.getText();
    }

    getFirstLocationDistance () {
        return this.firstLocationDistance.getText();
    }

    open () {
        return super.open('/find-a-workshop/');
    }
}

export default new FindLocationPage();

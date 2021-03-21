import MainPage from '../pageobjects/main.page';
import FindLocationPage from '../pageobjects/findLocation.page';
import LocationPage from '../pageobjects/location.page';

describe('Weight Watchers smoke test', () => {
    it('main flow', () => {
        MainPage.open();
        expect(browser).toHaveTitle('WW (Weight Watchers): Weight Loss & Wellness Help | WW USA');
        MainPage.goToUnlimitedWorkShops();
        FindLocationPage.spanStudio.click();
        expect(browser).toHaveTitleContaining('Find WW Studios & Meetings Near You | WW USA');
        FindLocationPage.inputLocation.setValue('10011');
        FindLocationPage.inputLocation.keys(['Enter']);
        const locationName = FindLocationPage.getFirstLocationName();
        console.log(`Location: ${locationName}`);
        const locationDistance = FindLocationPage.getFirstLocationDistance();
        console.log(`Distance: ${locationDistance}`);
        FindLocationPage.firstLocationName.click();
        expect(LocationPage.titleLocation).toHaveText(locationName);
        $('div[class*="hours"] > div[class*="title"]').click();
        const workingHours = LocationPage.getWorkingHours();
        console.log(`Working hours: ${workingHours}`);
        LocationPage.numberOfMeetingsFor('TUE');
    });
});



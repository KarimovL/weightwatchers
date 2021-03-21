import Page from '../pageobjects/page';

class LocationPage extends Page {
    get titleLocation () { return $('h1[class*="locationName"]'); }

    getCurrentDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = new Date().getDay();
        console.log(`Current Day: ${days[currentDay]}`);
        return $(`//div[div[.="${days[currentDay]}"]]`);
    }

    getWorkingHours() {
        const day = this.getCurrentDay();
        const workingHours = day.$('./div[contains(@class, "times")]');
        return workingHours.getText();
    }

    numberOfMeetingsFor(dayOfWeek) {
        const day = $(`//div[contains(@class, "workshopSchedule")][.//div[.="Virtual Workshops schedule"]]//div[span[contains(@class, "dayName")][.="${dayOfWeek}"]]`);
        const elementsWithNames = day.$$('./div[contains(@class, "meeting")]/span[not(contains(@class, "meetingTime"))]');
        let names = {};
        for (let element of elementsWithNames) {
            const name = element.getText();
            if (names.hasOwnProperty(name)) {
                names[name] += 1;
            } else {
                names[name] = 1;
            }
        }
        console.log('Names:');
        console.log(names);
    }
}

export default new LocationPage();

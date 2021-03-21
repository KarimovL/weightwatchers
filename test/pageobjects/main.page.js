import Page from './page';

class MainPage extends Page {
    open () {
        return super.open('/');
    }
}

export default new MainPage();

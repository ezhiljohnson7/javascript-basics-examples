describe('Jasmine matchers test', () => {

    let pageTitle;
    beforeAll(() => {

        browser.get('http://protractortest.org');
        pageTitle = browser.getTitle();
        browser.sleep(3000);
    });

    it(' - match equals using to Be', () => {

        expect(pageTitle).toBe('Protractor - end-to-end testing for AngularJS');
    });

    it(' - match not equals using to Be', () => {

        expect(pageTitle).not.toBe('Protractor - end-to-end testing');
    });

    it(' - match contains text', () => {

        expect(pageTitle).toMatch('Protractor - end-to-end testing');
    });
});
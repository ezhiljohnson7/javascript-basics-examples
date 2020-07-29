describe('My first async-await suite', function () {

    it('My first async-await test', async function () {

        console.log("Test starts");
        browser.get('https://angularjs.org');
        let title = await browser.getTitle();
        console.log(title);
        if (title == 'AngularJS — Superheroic JavaScript MVW Framework') {
            console.log('Title matched successfully..!');
        } else {
            console.log('Title match failed..!');
        }
    });
});
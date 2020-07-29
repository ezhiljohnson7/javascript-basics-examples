describe('My first promise suite', function(){

    it('My first promise test', function(){

        console.log("Test starts");
        browser.get('https://angularjs.org');
        browser.getTitle().then(function(title){

            console.log('The Title captured from the webpage is : ' + title);
            if(title == 'AngularJS — Superheroic JavaScript MVW Framework'){
                console.log('Title matched successfully..!');
            } else {
                console.log('Title match failed..!');
            }
            browser.sleep(2000);
            console.log("Promise Ends");
        });
        console.log("Test Ends");
    });
});
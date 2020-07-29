describe('My First Protractor Suite', function(){
    it('My First Protractor Test', function(){
        browser.get('https://angularjs.org')
        element(by.model('yourName')).sendKeys('World');
        element(by.binding('yourName')).getText().then(function(text){
            console.log(text);
            //assert functions
        });
    });
});

//Promises in JavaScript
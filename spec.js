describe('My First Protractor Suite', function(){
    it('My First Protractor Test', function(){
        console.log("Test Started");
        browser.get('https://angularjs.org')
        element(by.model('yourName')).sendKeys('World');
        element(by.binding('yourName')).getText().then(function(text){
            console.log(text);
            //assert functions
        });
        console.log("Test Ended");
    });
});

//Promises in JavaScript
// 1. Dynamically types
// 2. Open
// 3. Asynchronous -> Callbacks
//  Eg: Client asking for a transaction -> the receiver gets the transaction request and process the request and once it's done -> performs a callback to the client to update the status.
// Client will continue without waiting for an output transaction -> 

// Step-1 : Logging to web-page
// Step-2 : Want to get some details from ui
// Step-3 : Continue with next set of instructions
// Step-4 : Response back from Step-2

// JavaScript is Async -> WebdriverJS -> Protractor.
// WebDriver maintains something called a PROMISE MANAGER.
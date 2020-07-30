describe('My First application testing', ()=>{

    beforeAll(() => {

        console.log('Navigating to the calculator web page');
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('to be equal to', () => {

        let firstOperand = element(by.model('first'));
        let secondOperand = element(by.model('second'));
        let goButton = element(by.id('gobutton'));
        let outputField = element(by.binding('latest'));

        firstOperand.sendKeys('7');
        secondOperand.sendKeys('10');
        goButton.click();

        // outputField.getText().then((elementText) => {

        //     console.log("Value found in the output field is : " + elementText);
        // });

        let expectedValue = '17';
        expect(outputField.getText()).toEqual(expectedValue);
        console.log('Value found in the output field is : ' + expectedValue);
        browser.sleep(2000);
    });
});
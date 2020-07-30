describe('My First application testing', ()=>{

    function selectFromDropdown(dropdownElements, valueToSelect){

        dropdownElements.then((allDropdownOptions) => {
            console.log("The size of the dropdown list is : " + allDropdownOptions.length);
            for(let i = 0; i < allDropdownOptions.length; i++){
                let currentDropdownOption = allDropdownOptions[i].getText().then((text) => {
                    console.log("Current dropdown option is : "+text);
                    if(text == valueToSelect){
                        allDropdownOptions[i].click();
                        browser.sleep(3000);
                    }
                });
            }
        });
    }

    beforeAll(() => {

        console.log('Navigating to the calculator web page');
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    });

    it('Login as a manager', () => {

        element(by.buttonText('Customer Login')).click();
        selectFromDropdown(element.all(by.xpath('//option')), 'Albus Dumbledore');
        element(by.buttonText('Login')).click();
        browser.sleep(3000);
    });
});
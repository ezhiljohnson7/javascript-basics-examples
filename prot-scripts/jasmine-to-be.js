describe('My first non-angular application suite', function () {

    let isCheckBoxSelected = function(someElement){

        // element.isSelected().then(function(isSelectedStatus){
        //     if(isSelectedStatus){
        //         console.log("Successfully selected the checkbox-" + index);
        //     } else {
        //         console.log("Unsuccessful in selecting the checkbox-" + index);
        //     }
        // });

        expect(someElement.isSelected()).toBe(true);
    }

    let isCheckBoxNotSelected = function(someElement){

        expect(someElement.isSelected()).not.toBe(true);
    }

    it('My first non-angular application test', function () {

        console.log("Test starts");
        browser.ignoreSynchronization=true;
        browser.get('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        for(let i = 1; i <= 4; i++){
            let currentElement = element(by.xpath('//label[text()="Option '+i+'"]/input'));
            if(i % 2 == 0){
                currentElement.click();
                isCheckBoxSelected(currentElement);
            } else {
                isCheckBoxNotSelected(currentElement);
            }
            browser.sleep(2000);
        }
        console.log('Test Ends');
    });
});
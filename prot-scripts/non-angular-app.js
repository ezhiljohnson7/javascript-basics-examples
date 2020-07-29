describe('My first non-angular application suite', function () {

    let isCheckBoxSelected = function(index){
        element(by.xpath('//label[text()="Option '+index+'"]/input')).isSelected().then(function(isSelectedStatus){
            if(isSelectedStatus){
                console.log("Successfully selected the checkbox-" + index);
            } else {
                console.log("Unsuccessful in selecting the checkbox-" + index);
            }
        });
    }

    it('My first non-angular application test', function () {

        console.log("Test starts");
        browser.ignoreSynchronization=true;
        browser.get('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
        for(let i = 1; i <= 4; i++){
            element(by.xpath('//label[text()="Option '+i+'"]/input')).click();
            isCheckBoxSelected(i);
            browser.sleep(2000);
        }

        // browser.sleep(4000);
        console.log('Test Ends');
    });
});
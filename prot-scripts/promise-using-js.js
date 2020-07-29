// let getText = new Promise(function(resolve, reject){

//     //selenium uses the active driver instance to poll the dom-tree and get the right node and get the text from that node.
//     let nodeFound = true;
//     if(nodeFound){
//         resolve('AngularJS — Superheroic JavaScript MVW Framework');
//     } else {
//         reject('Could not get the text from the UI.');
//     }
// });

// getText.then(function(titleFromResolve){
//     console.log(titleFromResolve);
// }).catch(function(errorMessageFromReject){
//     console.log(errorMessageFromReject);
// });

function getAttribute(attribute){
    return new Promise((resolve, reject) => {
        
        //selenium uses the active driver instance to poll the dom-tree and get the right node and get the text from that node.
        let nodeFound = true;
        if(attribute == 'class'){
            // selenium code to parse the value of this class attribute
            resolve('class-value');
        } else if(attribute == 'id'){
            resolve('id-value');
        } else if(attribute == 'name'){
            resolve('name-value');
        } else if(attribute == 'ng-model'){
            resolve('model-value');
        } else {
            reject('Failed to fetch the attribute from the UI.');
        }
    })
}

let attribute = 'xpath';
// getAttribute(attribute).then(function(attributeValue){
//     console.log(`Attribute value of ${attribute} is : ${attributeValue}`);
// }).catch(function(attributeFetchFailedMessage){
//     console.log(attributeFetchFailedMessage);
// });

let attributeValue = await getAttribute(attribute);
console.log(attributeValue);
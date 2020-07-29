//If-else
function notifyMeToHaveMyFood(timeOfDay){

    if(timeOfDay == 'morning'){
        console.log('Breakfast time');
    } else if(timeOfDay == 'afternoon'){
        console.log('Lunch time');
    } else if(timeOfDay == 'evening'){
        console.log('Tea and snacks time');
    } else if(timeOfDay == 'night') {
        console.log('Supper time');
    } else{
        console.log('Invalid time');
    }
}

// notifyMeToHaveMyFood('night');
// notifyMeToHaveMyFood('morning');

//Switch
function notifyUsingSwitch(timeOfDay){

    switch(timeOfDay){
        case 'morning':
            console.log('It\'s Breakfast time');
            // console.log("It's \"Breakfast\" time");
            break;
        case 'afternoon':
            console.log('It\'s Lunch time');
            break;
        case 'evening':
            console.log('It\'s Tea and snacks time');
            break;
        case 'night':
            console.log('It\'s supper time');
            break;
        default:
            console.log('Not a valid time of day..! Please use one among morning, afternoon, evening or night');
            break;
    }
}

notifyUsingSwitch('morning');
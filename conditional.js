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

notifyMeToHaveMyFood('night');
notifyMeToHaveMyFood('morning');
//When I know how many times I should run, eg : List or array iterations, etc
// for(let i=0; i < 7; i++){
//     console.log("My loop " + i);
// }

//When I know that I need to wait for a condition to satisfied.
// let i = 7;
// while(i < 7){
//     console.log("My loop " + i++);
// }

//When I know that I need to wait for a condition to satisfied but I know that condition is not already satisfied.
// let j = 70;
// do {
//     console.log("My loop " + j++); 
// } while(j < 7);

// break, continue and labels
//Continue : ignores the subsequent lines after it called and goes back to the loop head.
// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0){
//         console.log(`Executing specific logic on ${i}`);
//         continue;
//     }
//     console.log(`Executing generic logic on ${i}`);
// }

//Break : Nothing in that loop gets executed after break is called.
// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         console.log(`Executing specific logic on ${i}`);
//         break;
//     }
//     console.log(`Executing generic logic on ${i}`);
// }

//Labels : 
outerLoop: for(let i = 0; i < 10; i++){ //table row
    console.log(`Executing logic on  i = ${i}`);
    innerLoop: for(let j = 0; j < 10; j++){ //table column
        if(j == 5){
            console.log(`Executing specific logic on j = ${j}`);
            break outerLoop;
        }
        console.log(`Executing generic logic on j = ${j}`);
    }
}

function writeCards(names, event){

    let greetings = [];
    for(let i=.0; i < names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
    }
        return greetings;
           
}

function countDown(){
    let countDown = 10;

    while (countDown >= 0   ){
        console.log(countDown--);
    }

}
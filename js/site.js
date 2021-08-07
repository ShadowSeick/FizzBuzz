//Launch Function
function startFizzBuzz() {
    let fizzNumber = document.getElementById("FizzNumber").value;
    let buzzNumber = document.getElementById("BuzzNumber").value;
    
    fizzNumber = Number.parseInt(fizzNumber);
    buzzNumber = Number.parseInt(buzzNumber);

    let fizzBuzzArray = typeof fizzNumber === "number" && typeof buzzNumber === "number" && 
    fizzNumber > 0 && fizzNumber <= 100 && 
    buzzNumber > 0 && buzzNumber <= 100 ? chooseFizzOrBuzzNumber(fizzNumber, buzzNumber) :
    alert("You have to put a value between 1 and 100");
    
    displayFizzBuzz(fizzBuzzArray);

}

//Logic Function
function chooseFizzOrBuzzNumber(fizzNumber, buzzNumber) {

    let numbersArray = [...Array(100).keys()].map(k => k + 1);

    let fizzBuzzArray = numbersArray.map(number => 
        number % fizzNumber === 0 && number % buzzNumber === 0 ? "FizzBuzz" :
        number % fizzNumber === 0 ? "Fizz" :
        number % buzzNumber === 0 ? "Buzz" :  number
    );

    return fizzBuzzArray;
}

//Display Function
function displayFizzBuzz(fizzBuzzArray) {

    if (!fizzBuzzArray) {
        return;
    }

    document.getElementById("table").classList.remove("d-none");

    let table = document.getElementById("results");
    table.innerHTML = "";
    let row;

    for (let i = 0; i < fizzBuzzArray.length; i++) {
        if (i === 0 || i % 5 === 0 ){
            row = table.insertRow();

        }
        let cell = row.insertCell();
        cell.innerHTML += `${fizzBuzzArray[i]}`;
    }
}
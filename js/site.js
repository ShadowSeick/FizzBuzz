//Launch Function
function startFizzBuzz() {
    fizzNumber = document.getElementById("FizzNumber").value;
    buzzNumber = document.getElementById("BuzzNumber").value;
    
    fizzNumber = Number.parseInt(fizzNumber);
    buzzNumber = Number.parseInt(buzzNumber);

    fizzBuzzArray = typeof fizzNumber === "number" && typeof buzzNumber === "number" && 
    fizzNumber > 0 && fizzNumber <= 100 && 
    buzzNumber > 0 && buzzNumber <= 100 ? chooseFizzOrBuzzNumber(fizzNumber, buzzNumber): 
    alert("You have to put a value between 1 and 100");

    displayFizzBuzz(fizzBuzzArray);

}

//Logic Function
function chooseFizzOrBuzzNumber(fizzNumber, buzzNumber) {

    numbersArray = [...Array(100).keys()].map(k => k + 1);

    fizzBuzzArray = numbersArray.map(number => {
        return number % fizzNumber === 0 && number % buzzNumber === 0 ? "FizzBuzz" :
               number % fizzNumber === 0 ? "Fizz" :
               number % buzzNumber === 0 ? "Buzz" :  number;
    });

    return fizzBuzzArray;
}

//Display Function
function displayFizzBuzz(fizzBuzzArray) {

    results = document.getElementById("results");
    for (let i = 0; i < fizzBuzzArray.length; i++) {
        if (i === 0 || i % 5 === 0 ){
            results.innerHTML += `<tr id="row${i/5}"><td>${fizzBuzzArray[i]}</td></tr>`;
        }
        else {
            document.getElementById(`row${i/5}`).innerHTML += `<td>${fizzBuzzArray[i]}</td>`;
        }
    }
}
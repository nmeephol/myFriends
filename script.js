var RandomNum = 0; 

document.addEventListener("DOMContentLoaded",function(){
    displayRandomNum();

    document.getElementById("submit-bt").addEventListener("click", submitForm);
    document.getElementById("reset-bt").addEventListener("click", resetForm);

});

function displayRandomNum(){
    RandomNum = Math.floor(Math.random() * 9) + 1; 
    document.getElementById("randomNum").innerHTML = RandomNum;

    document.getElementById("Input-bt").style.display = "inline";
}

function GenerateInput(){
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = '';

    for(var i = 0; i < RandomNum; i++){
        var nameLabel = document.createElement("label");
        nameLabel.textContent = "Name :";
        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.className = "nameInput";

        var ageLabel = document.createElement("label");
        ageLabel.textContent = "Age :";
        var ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.className = "ageInput";

        inputContainer.appendChild(nameLabel);
        inputContainer.appendChild(nameInput);
        inputContainer.appendChild(document.createElement("br"));
        inputContainer.appendChild(ageLabel);
        inputContainer.appendChild(ageInput);
        inputContainer.appendChild(document.createElement("br"));
        inputContainer.appendChild(document.createElement("br"));
    }
    document.getElementById("submit-bt").style.display = "inline";
    document.getElementById("reset-bt").style.display = "inline";
}

function submitForm(){
    var nameInputs = document.getElementsByClassName("nameInput");
    var ageInputs = document.getElementsByClassName("ageInput");
    for(var i=0; i< nameInputs.length; i++){
        if(nameInputs[i].value === "" || ageInputs[i].value === ""){
            alert("Please fill in all fields.");
            return;
        }
    }
    document.getElementById("FuncSelection").style.display = "inline";
}

function resetForm(){
    document.getElementById("inputContainer").innerHTML = '';
    document.getElementById("submit-bt").style.display = "none";
    displayRandomNum();
    document.getElementById("reset-bt").style.display = "none";
    document.getElementById("FuncSelection").style.display = "none";
}

function SumAge(){
    var sum = 0;
    var ageInputs = document.getElementsByClassName("ageInput");
    for(var i=0; i<ageInputs.length; i++){
        sum += parseInt(ageInputs[i].value);
    }
    document.getElementById("sumAge").innerHTML = "Total Age: " + sum;
}

function AverageAge(){
    var avg = 0;
    var sum = 0;
    var ageInputs = document.getElementsByClassName("ageInput");
    for(var i=0; i<ageInputs.length; i++){
        sum += parseInt(ageInputs[i].value);
    }
    avg = sum/ageInputs.length;
    document.getElementById("averageAge").innerHTML = "Average Age: " + avg;
}

function Min() {
    var minAge = Infinity; 
    var youngestPeople = []; 
    var nameInputs = document.getElementsByClassName("nameInput");
    var ageInputs = document.getElementsByClassName("ageInput");

    for (var i = 0; i < ageInputs.length; i++) {
        var age = parseInt(ageInputs[i].value);
        if (!isNaN(age)) { 
            if (age < minAge) {
                minAge = age; 
                youngestPeople = [{ name: nameInputs[i].value, age: age }];
            } else if (age === minAge) {
                youngestPeople.push({ name: nameInputs[i].value, age: age });
            }
        }
    }

    if (youngestPeople.length > 0) {
        var resultString = "Youngest People:<br>";
        youngestPeople.forEach(function(person) {
            resultString += "Name: " + person.name + ", Age: " + person.age + "<br>";
        });
        document.getElementById("youngestPeople").innerHTML = resultString;
    } else {
        document.getElementById("youngestPeople").innerHTML = "No data available.";
    }
}

function Max() {
    var maxAge = -Infinity; 
    var oldestPeople = [];
    var nameInputs = document.getElementsByClassName("nameInput");
    var ageInputs = document.getElementsByClassName("ageInput");

    for (var i = 0; i < ageInputs.length; i++) {
        var age = parseInt(ageInputs[i].value);
        if (!isNaN(age)) { 
            if (age > maxAge) {
                maxAge = age; 
                oldestPeople = [{ name: nameInputs[i].value, age: age }]; 
            } else if (age === maxAge) {
                oldestPeople.push({ name: nameInputs[i].value, age: age });
            }
        }
    }

    if (oldestPeople.length > 0) {
        var resultString = "Oldest People:<br>";
        oldestPeople.forEach(function(person) {
            resultString += "Name: " + person.name + ", Age: " + person.age + "<br>";
        });
        document.getElementById("oldestPeople").innerHTML = resultString;
    } else {
        document.getElementById("oldestPeople").innerHTML = "No data available.";
    }
}




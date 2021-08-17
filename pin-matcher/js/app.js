function randomPin() {
    const randomNumber = Math.round(Math.random() * 10000);
    const pinString = randomNumber + '';
    if (pinString.length == 4) {
        return pinString;
    }
    else{
        return randomPin();
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = randomPin();
    document.getElementById('random-pin-input').value = pin;
})

document.getElementById('keyboard').addEventListener('click', function (event) {
    const buttonNumber = event.target.innerText;
    const inputPin = document.getElementById('type-pin-input');
    if (isNaN(buttonNumber)) {
        if (buttonNumber == "C") {
          inputPin.value = "";
        }
        else if (buttonNumber == "<") {
            inputPin.value = inputPin.value.slice(0, -1);
        }
    }
    else {
        inputPin.value += buttonNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const randomPin = document.getElementById('random-pin-input').value;
    const typedPin = document.getElementById('type-pin-input').value;
    const success = document.getElementById('notify-success');
    const fail = document.getElementById("notify-fail");
    if (randomPin == typedPin) {
        success.style.display = 'block';
        fail.style.display = 'none';
        window.location.href = "https://www.google.com";
    }
    else {
        fail.style.display = "block";
        success.style.display = "none";
    }
})
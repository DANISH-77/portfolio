// Append the button value to the display with animation
function appendValue(value) {
    const display = document.getElementById("result");
    display.value += value;

    // Add a temporary class to animate the input display
    display.classList.add("input-bounce");
    setTimeout(() => display.classList.remove("input-bounce"), 200);
}

// Clear the display
function clearDisplay() {
    document.getElementById("result").value = "";
}

// Delete the last character from the display
function deleteChar() {
    let display = document.getElementById("result").value;
    document.getElementById("result").value = display.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

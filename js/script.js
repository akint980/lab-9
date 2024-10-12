function init() {
    var button = document.getElementById('entrybutton');

    function showMeText() {
        var textbox = document.getElementById('entryinput');
        var inputText = textbox.value;

        // Display the input text in an alert
        alert("Aderonke Akintunde: " + inputText);

        // Change the text of the <h2>
        document.getElementById('textoutput').innerHTML = inputText;
    }

    button.addEventListener('click', showMeText);
}

window.addEventListener('load', init);

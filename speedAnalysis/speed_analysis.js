let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById("inputText").value = testText;

    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    document.getElementById("userInput").readonly = true;

    let timeElapsed = (endTime - startTime) / 1000;
    let userTypedText = document.getElementById("userInput").value;

    let typedWords = userTypedText.split(/\s+/).filter((word) => word !== "").length;
    let totalLength = userTypedText.trim().length; 

    let wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = (`
        <h2>Typing Test Results:</h2>
        <p>Total Length: ${totalLength}</p>
        <p>Words Typed: ${typedWords}</p>
        <p>Time elapsed: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words Per Minute (WPM): ${wpm}</p>
    `);

    let button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}
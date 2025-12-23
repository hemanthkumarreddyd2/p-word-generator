<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Password Generator</h1>
        <div class="options">
            <label for="length">Password Length:</label>
            <input type="number" id="length" min="4" max="50" value="12">
        </div>
        <div class="options">
            <input type="checkbox" id="uppercase" checked>
            <label for="uppercase">Include Uppercase Letters</label>
        </div>
        <div class="options">
            <input type="checkbox" id="lowercase" checked>
            <label for="lowercase">Include Lowercase Letters</label>
        </div>
        <div class="options">
            <input type="checkbox" id="numbers" checked>
            <label for="numbers">Include Numbers</label>
        </div>
        <div class="options">
            <input type="checkbox" id="symbols" checked>
            <label for="symbols">Include Symbols</label>
        </div>
        <button id="generate">Generate Password</button>
        <div class="password-display">
            <input type="text" id="password" readonly>
            <button id="copy">Copy</button>
        </div>
        <button id="save">Save as Text File</button>
    </div>
    <script src="script.js"></script>
</body>
</html>

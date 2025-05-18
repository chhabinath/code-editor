function updateOutput() {
    var htmlCode = document.getElementById('html').value;
    var cssCode = document.getElementById('css').value;
    var jsCode = document.getElementById('javascript').value;

    var output = document.getElementById('output').contentWindow.document;

    output.open();
    output.writeln(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Output</title>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
        </html>
    `);
    output.close();
}

document.getElementById('html').addEventListener('input', updateOutput);
document.getElementById('css').addEventListener('input', updateOutput);
document.getElementById('javascript').addEventListener('input', updateOutput);

updateOutput();

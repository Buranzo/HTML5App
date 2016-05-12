window.onload = welcome;

function welcome() {
    var welcomeElement = document.getElementById('welcomeText');
    welcomeElement.value = 'welcome';
    alert('start script change method: ' + welcomeElement.value);
}

function test(cols, rows) {
//    rows = 3;
//    cols = 3;
    for (row = 0; row < rows; row++) {
        for (col = 0; col < cols; col++) {
            document.write("col: " + col + " |   row: " + row);
            document.write("<br>")
        }
        document.write("<br>")
        document.write("<br>")
    }
}
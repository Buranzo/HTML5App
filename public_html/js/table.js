function headerDocument() {
    document.write("<html>");
    document.write("<head>");
    document.write("<title>Table page</title>");
    document.write("<meta charset = 'UTF - 8'>");
    document.write("</head>");
    document.write("<body>");
}

function createTable() {
    document.write("<h2>Таблица, сгенерированная в JS.</h2>");
    document.write("<table width = '100%' border = '1'>");
    document.write("<tr>");
}

function fillTable(cols, rows) {
    if (cols < 1) {
        cols = 1;
    }
    if (rows < 1) {
        rows = 1;
    }
    headerDocument();
    createTable();
    for (row = 0; row < rows; row++) {
        for (col = 0; col < cols; col++) {
            document.write("<td align = 'center'>");
            document.write(" столбец:" + (col + 1) + " / строка:" + (row + 1));
            document.write("</td>");
        }
        document.write("</tr><tr>")
    }
    closeTable();
    footerDocument();
}

function closeTable() {
    document.write("</table>");
}

function footerDocument() {
    document.write("</body>");
    document.write("</html>");
}
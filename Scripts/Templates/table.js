function renderTable(columns, rows, tableName, className) {
    var sortedColumns = columns.sort(SortByDisplayOrder);
    return '<div class="panel panel-default ' + className + '">' +
                '<div class="panel-heading">' + tableName + '</div>' +
                '<table class="table">' +
                renderTableHeader(sortedColumns) +
                renderTableBody(sortedColumns, rows) +
                '</table>' +
            '</div>';
}

function renderTableHeader(columns) {
    return '<thead>' + renderTableHeaderRow(columns) + '</thead>';
}

function renderTableHeaderRow(columns) {
    var result = "";
    $.each(columns, function(index, column) {
        result += renderTableHeaderCell(column);
    });
    return '<tr>' + result + '</tr>';
}

function renderTableHeaderCell(column) {
    return '<th>' + column.Name + '</th>';
}

function renderTableBody(columns, rows) {
    return '<tbody>' + renderTableBodyRows(columns, rows) + '</tbody>';
}

function renderTableBodyRows(columns, rows) {
    var result = "";
    $.each(rows, function(index, row) {
        result += '<tr>' + renderTableBodyRowCells(columns, row) + '</tr>';
    });
    return result;
}

function renderTableBodyRowCells(columns, row) {
    cells = "";
    $.each(columns, function(index, column) {
        cells += '<td>' + row[column.Code] + '</td>';
    });
    return cells;
}

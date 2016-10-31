function createTables() {
    var personsTable = renderTable(peoplesTableColumns, peoples, "Peoples", "");
    $(".js-peoples-table").html(personsTable);

    var companiesTable = renderTable(companiesTableColumns, companies, "Companies", "");
    $(".js-companies-table").html(companiesTable);

}

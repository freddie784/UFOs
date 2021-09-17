// import data from data.js
const tableData = data;

var tbody = d3.select("tbody");

function buildTable (data) {
    tbody.html(""); //Clear out Data
    
    // loop through each object
    data.forEach((dataRow) => {
       //append a row to table body
        let row = tbody.append("tr");

        //Loop through each field in dataRow and add each value as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    } );
}


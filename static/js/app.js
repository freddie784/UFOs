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

function handleClick () {
    
    let date = d3.select("#datetime").property("value"); //Grab datetime value from filter
    let filteredData = tableData; 

    // Check to see if data entered and filter if so
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        buildTable(filteredData); //run function using filtered data if no date used original table will be used
    };
}

//attach an event of button being clicked
d3.selectAll("#filter-btn").on("click", handleClick);

//build unfiltered table
buildTable(tableData);
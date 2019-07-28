// from data.js
var tableData = data;
var t_body = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
// YOUR CODE HERE!
//loop through the array to pull out the key, value of table data and append it 
tableData.forEach(function (ufo){
    var tr_row = t_body.append("tr");
    
    // Object.defineProperties(ufo).forEach(function([key, value]){
    Object.entries(ufo).forEach(function([key, value]){
        var td_cell = t_body.append("td")
        td_cell.text(value);
    })
});
//select the button and get the elements and value property
filter_button.on("click", function () {
    var element =d3.select("#datetime");
    var input =element.property("value");
    t_body.html("");
    t_body.append("tr").append("td").text("Findme");

    //create an array with elements and input value
    var filtered = tableData.filter(elem=> elem.datetime ===input);
    d3.event.preventDefault();
    filtered.forEach(function (elem) {
        var tr_row =t_body.append("tr");

        // Object.defineProperties(elem).forEach(function([key, value]){
        Object.entries(elem).forEach(function([key, value]){
            var td_cell = t_body.append("td")
            td_cell.text(value);
        })
    })
});

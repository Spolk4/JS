// from data.js
var tableData = data;
var t_body = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
// YOUR CODE HERE!
tableData.forEach(function (ufo){
    var tr_row = t_body.append("tr");

    Object.defineProperties(ufo).forEach(finction([key, value]){
        var td_cell = t_body.append("td")
        td_cell.text(value);
    })
});
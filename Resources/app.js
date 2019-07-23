// from data.js
var tableData = data;
var t_body = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
// YOUR CODE HERE!
tableData.forEach(function (ufo){
    var tr_row = t_body.append("tr");

    Object.defineProperties(ufo).forEach(function([key, value]){
        var td_cell = t_body.append("td")
        td_cell.text(value);
    })
});

filter_button.on("click", function () {
    var element =d3.select("#datetime");
    var input =element.property("value");
    t_body.html("")

    var filtered = tableData.filter(elem=> elem.datetime ===input);
    d3.event.preventDefault();
    filtered.forEach(function (elem) {
        var tr_row =t_body.append("tr");

        Object.defineProperties(elem).forEach(function([key, value]){
            var td_cell = t_body.append("td")
            td_cell.text(value);
        })
    })
});

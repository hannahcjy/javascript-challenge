// from data.js
var tableData = data;

// YOUR CODE HERE!
function tbl(UFOSightings) {
    var tbody = d3.select("tbody");
    UFOSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // clear the table for new data
  function deletetb() {
    d3.select("table")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  
  // initial display of all UFO sightings
  console.log(tableData);
  tbl(tableData);
  
  // filter button
  var button = d3.select("#filter-btn");

  button.on("click", function(event) {
    d3.event.preventDefault();
    deletetb();
    var date = d3.select("#datetime").property("value");
    
    if (date.trim() === "" ) {
      var filtered = tableData;
    } else { 
      var filtered = tableData.filter(UFOSighting => 
        UFOSighting.datetime === date.trim());
    };
  
    // display message if no records found
    if (filtered.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filtered);
    tbl(filtered);
  });
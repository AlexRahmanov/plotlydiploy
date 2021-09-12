//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
// };
// Plotly.newPlot("plotArea", [trace]);

// var trace = {
//    x: ["burrito", "pizza", "chicken"],
//    y: [10, 18, 5],
//    type: "bar"
//};

//var layout = {
//    title: "Luncheon Survey"
//};

//Plotly.newPlot("plotArea", [trace], layout);

//var layout = {
//    title: "Luncheon Survey",
//    xaxis: {title: "Food Option"},
//    yaxis: {title: "Number of Respondents"}
//};
//Plotly.newPlot("plotArea", trace, layout);

//var trace = {
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//    title: "'Bar' Chart",
//    xaxis: { title: "Drinks"},
//    yaxis: { title: "% of Drinks Ordered"}
//   };
//   Plotly.newPlot("plotArea", data, layout);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

//   var cities = [
//    {
//      "Rank": 1,
//      "City": "San Antonio ",
//      "State": "Texas",
//      "Increase_from_2016": "24208",
//      "population": "1511946"
//    },
//    {
//      "Rank": 2,
//      "City": "Phoenix ",
//      "State": "Arizona",
//      "Increase_from_2016": "24036",
//      "population": "1626078"
//    },
//    {
//      "Rank": 3,
//      "City": "Dallas",
//      "State": "Texas",
//      "Increase_from_2016": "18935",
//      "population": "1341075"
//    }
//];

//var cityNames = cities.map(function(city){
//    return city.City;
//});
//console.log(cityNames);


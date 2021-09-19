function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  
    d3.json('samples.json').then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector.append('option').text(sample).property('value', sample);
      });
      var initialSample = sampleNames[0];
      buildMetadata(initialSample);
      buildCharts(initialSample);
    });
  }
  
 // Initialize the dashboard
  init();

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

 // Demographics Panel 
  function buildMetadata(sample) {
    d3.json('samples.json').then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter((sampleObj) => sampleObj.id == sample);
      var pairs = Object.entries(resultArray[0]);
  // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select('#sample-metadata');
  // Use `.html("") to clear any existing metadata
      PANEL.html('');
      var results = pairs.forEach(function (pair) {
        PANEL.append('h6').text(pair[0] + ': ' + pair[1]);
      });
    });
  }

 //  Create the buildCharts function
  function buildCharts(sample) {
    
    d3.json('samples.json').then(function ({ samples, metadata }) {
      var data = samples.filter((obj) => obj.id == sample)[0];
      console.log(data);

      // data for bar chart
      var otuIDS = data.otu_ids.map((row) => `OTU ID: ${row}`);
      var sampleValues = data.sample_values.slice(0, 10);
      var sampleLabels = data.otu_labels.map((label) =>
        label.replace(/\;/g, ', ')
      );

      // data for bubble chart
      var otuID = data.otu_ids;
      var sampleValue = data.sample_values;
      var sampleLabel = data.otu_labels.map((label) =>
        label.replace(/\;/g, ', ')
      );

      // data for gauge
      var metData = metadata.filter((obj) => obj.id == sample)[0];
      var washFreq = metData.wfreq;

      // data for bar chart
      var data1 = [
        {
          x: sampleValues,
          y: otuIDS,
          type: 'bar',
          orientation: 'h',
          text: sampleLabels,
          hoverinfo: 'text',
        },
      ];
  
      // data for bubble chart
      var data2 = [
        {
          x: otuID,
          y: sampleValue,
          mode: 'markers',
          text: sampleLabel,
          marker: {
            size: sampleValue,
            color: otuID,
          },
        },
      ];
      // data for gauge chart
      var data3 = [
        {
          
          value: washFreq,
          title: {
            text: 'Belly Button Washing Frequency<br>Scrubs per Week',
          },
          type: 'indicator',
          mode: 'gauge+number',
          gauge: {
            axis: { range: [null, 10] },
          },
        },
      ];

      // layout for bar chart
      var layout1 = {
        margin: {
          t: 40,
          l: 150,
        },
        title: {
          text: 'Top 10 Bacterial Species (OTUs)',
        },
      };

      // layout for bubble chart
      var layout2 = {
        xaxis: { title: 'OTU ID' },
      };

      // layout for gauge chart
      var layout3 = {
        width: 600,
        height: 500,
        margin: { t: 0, b: 0 },
      };
  
      Plotly.newPlot('bar', data1, layout1);
      Plotly.newPlot('bubble', data2, layout2);
      Plotly.newPlot('gauge', data3, layout3);
    });
  }
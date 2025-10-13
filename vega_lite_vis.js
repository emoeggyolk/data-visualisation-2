// vega_lite_vis.js
var vg_map = "map.vg.json";
var vg_bar = "bar_chart.vg.json";

vegaEmbed("#choropleth_map", vg_map, {actions: {export: true, source: true, editor: true}})
  .then(function(result) {
    // result.view for map if needed
  })
  .catch(console.error);

vegaEmbed("#bar_grouped", vg_bar, {actions: {export: true, source: true, editor: true}})
  .then(function(result) {
    // result.view for bar if needed
  })
  .catch(console.error);

  
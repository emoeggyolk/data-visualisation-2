// vega_lite_vis.js

// File names 
const vgMap         = "birth_map.vg.json";         
const vgBar         = "bar_chart.vg.json";
const vgDualAxis    = "dualaxischart.vg.json";
const vgBirthLine   = "birth_linechart.vg.json";
const vgMarriageLine= "marriage_line.vg.json";
const vgScatter =    "scatter.vg.json";
const vgDonutBirth  = "birth_donut.vg.json";     
const vgDonutMarriage="marriage_donut.vg.json";   
const vgPyramid     = "pyramid.vg.json";

// Common embed options
const opts = { actions: { export: true, source: true, editor: true } };

// 1) Map
vegaEmbed("#choropleth_map", vgMap, opts).catch(console.error);

// 2) Grouped bar
vegaEmbed("#bar_grouped", vgBar, opts).catch(console.error);

// 3) Pyramid chart
vegaEmbed("#population_pyramid", vgPyramid, opts).catch(console.error);

// 4) Donut chart 
vegaEmbed("#donut_birth",    vgDonutBirth, opts).catch(console.error);
vegaEmbed("#donut_marriage", vgDonutMarriage, opts).catch(console.error);

// 5) Line charts (side-by-side)
vegaEmbed("#birth_line",    vgBirthLine, opts).catch(console.error);
vegaEmbed("#marriage_line", vgMarriageLine, opts).catch(console.error);

// 6) Dual-axis (full width)
vegaEmbed("#dual_axis", vgDualAxis, opts).catch(console.error);

// 7) Scatterplot pair (full width)
vegaEmbed("#scatter_plot", vgScatter, opts).catch(console.error);

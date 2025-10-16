// vega_lite_vis.js

// File names (use exactly the names from your repo)
const vgMap         = "birth_map.vg.json";          // was map.vg.json in your original; using your screenshot name
const vgBar         = "bar_chart.vg.json";
const vgDualAxis    = "dualaxischart.vg.json";
const vgLollipopF   = "lolipop_female.vg.json";
const vgLollipopM   = "lolipop_male.vg.json";
const vgBirthLine   = "birth_linechart.vg.json";
const vgMarriageLine= "marriage_line.vg.json";

// Common embed options
const opts = { actions: { export: true, source: true, editor: true } };

// 1) Map
vegaEmbed("#choropleth_map", vgMap, opts).catch(console.error);

// 2) Grouped bar
vegaEmbed("#bar_grouped", vgBar, opts).catch(console.error);

// 3) Dual-axis (full width)
vegaEmbed("#dual_axis", vgDualAxis, opts).catch(console.error);

// 4) Lollipop pair (side-by-side)
vegaEmbed("#lollipop_female", vgLollipopF, opts).catch(console.error);
vegaEmbed("#lollipop_male",   vgLollipopM, opts).catch(console.error);

// 5) Line pair (side-by-side)
vegaEmbed("#birth_line",    vgBirthLine, opts).catch(console.error);
vegaEmbed("#marriage_line", vgMarriageLine, opts).catch(console.error);

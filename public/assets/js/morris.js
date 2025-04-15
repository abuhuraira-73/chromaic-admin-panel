 
!function($) {
  "use strict";

  var MorrisCharts = function() {};

  MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
    Morris.Donut({
      element: element,
      data: data,
      resize: true,
      colors: colors,
      formatter : function (y, data) { 
        return y
      }
    });
  },
  
  MorrisCharts.prototype.init = function() {

    var $donutData = [
        {label: "Social Media", value: 3.432},
        {label: "Website", value: 4.432},
        {label: "Store", value: 5.432},
    ];
    this.createDonutChart('morris-donut-1', $donutData, ['#FF7433', '#2377FC', '#8F77F3']);
  },

  $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

function($) {
  "use strict";
  $.MorrisCharts.init();
}(window.jQuery);
(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
      
        var options = {
          series: [{
            name: 'Price',
            data: [
              55, 60, 65, 70, 75, 80, 85, 80,75, 70, 65, 60, 55, 50, 45, 40,35,
              55, 60, 65, 70, 75, 80, 85, 80,75, 70, 65, 60, 55, 50, 45, 40,35,
              55, 60, 65, 70, 75, 80, 85, 80,75, 70, 65, 60, 55, 50, 45, 40,35,
              55, 60, 65, 70, 75, 80, 85, 80,75, 70, 65, 60, 55, 50, 45, 40,35,
              55, 60, 65, 70, 75, 80, 85, 80,75, 70, 65, 60, 55, 50, 45, 40,35,
            ]
          }],
          chart: {
            type: 'bar',
            height: 165,
            toolbar: {
              show: false,
            },
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 10,
              animateGradually: {
                  enabled: true,
                  delay: 10
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 10
              }
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '3px',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false,
          },
          colors: '#D4CDF5',
          stroke: {
            show: false,
          },
          xaxis: {
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            },
            tooltip: {
              enabled: false
            }
          },
          yaxis: {
            show: false,
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function () {
                  return "$" 
                }
              },
            },
            marker: { show: !1 },
          },
          };

        chart = new ApexCharts(
          document.querySelector("#line-chart-13"),
          options
        );
        if ($("#line-chart-13").length > 0) {
          chart.render();
        }
      };
  
      /* Function ============ */
      return {
  
        load: function () {
          chartBar();
        },
      };
    })();
  
    jQuery(window).on("load", function () {
      tfLineChart.load();
    });
  
})(jQuery);
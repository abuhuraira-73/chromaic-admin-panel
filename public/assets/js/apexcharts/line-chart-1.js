(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
      
        var options = {
            series: [
              {
                data: [20, 50, 7, 100, 30, 80, 100],
              },
            ],
            colors: ["#22C55E"],
            chart: {
              type: "area",
              height: 117,
              stacked: false,
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
                columnWidth: '10px',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false,
            },
            yaxis: {
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
            tooltip: {
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
        },

        chart = new ApexCharts(
          document.querySelector("#line-chart-1"),
          options
        );
        if ($("#line-chart-1").length > 0) {
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
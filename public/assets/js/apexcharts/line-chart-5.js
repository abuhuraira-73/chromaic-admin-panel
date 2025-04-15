(function ($) {
    
    var tfLineChart = (function () {
  
      var chartBar = function () {
      
        var options = {
            chart: {
              height: 291,
              type: "area",
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#2275fc"],
            series: [
              {
                name: "$",
                data: [45, 52, 38, 45, 49, 43, 40 ,45, 52, 38, 45, 19]
              }
            ],
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.9,
                stops: [0, 90, 100]
              }
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                style: {
                  colors: '#95989D',
                },
              },
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]
            }
          };

        chart = new ApexCharts(
          document.querySelector("#line-chart-5"),
          options
        );
        if ($("#line-chart-5").length > 0) {
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
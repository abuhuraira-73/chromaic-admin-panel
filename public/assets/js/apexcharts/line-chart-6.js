(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
      
        var options = {
            series: [{
            name: 'Profit',
            data: [81, 121, 40, 52, 164, 113, 26, 68]
          }, {
            name: 'Revenue',
            data: [135, 182, 76, 112, 199, 168, 49, 120]
          }],
            chart: {
            type: 'bar',
            height: 263,
            toolbar: {
              show: false,
            },
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
          colors: ['#2377FC33', '#2377FC'],
          stroke: {
            show: false,
          },
          xaxis: {
            categories: ['Jan' , 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            labels: {
              style: {
                colors: '#95989D',
              },
            },
          },
          yaxis: {
            show: false,
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
          };

        chart = new ApexCharts(
          document.querySelector("#line-chart-6"),
          options
        );
        if ($("#line-chart-6").length > 0) {
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
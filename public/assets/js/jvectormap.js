
$(function(){
    $('#usa-vectormap').vectorMap({
        map: "us_lcc",
        backgroundColor: "#F6F6F6",
        regionStyle: {
            initial: {
                fill: "#30303080"
            },
            hover: {
                fill: "#FF9E70",
                "fill-opacity": 1,
            }
        },
        series: {
            regions: [{
            values: Data,
            scale: ['#FF9E70','#FF7433'],
            normalizeFunction: 'polynomial'
            }]
        },
        onRegionLabelShow: function(e, el, code){
            el.html(el.html()+' '+Data[code]+'%');
        }
    });
});
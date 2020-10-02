jQuery(document).ready(function(g) {
    jQuery(window).resize(function() {
        sgt_responesive(false)
    });
});
function sgt_responesive(j) {
    var a = jQuery("#sgt_popup").val();
    if (a !== undefined) {
        var b = jQuery("#" + a).find(".sgt-builder");
        if (j === false) {
            var d = b.find(".sgt-bld-showme")
        } else {
            var d = b.find("#sgt-bld__step__inner-" + j)
        }
        var g = jQuery(window).height();
        var h = jQuery(window).width();
        var i = h / d.data("width");
        var f = g / d.data("height");
        var c = ((i > f) ? f : i) - 0.01;
        if (c > 1) {
            c = 1
        }
        var e = d.parent(".sgt-bld__step__content");
        if (c < 1) {
            e.css("transform", "translateX(-50%) translateY(-50%) scale(" + c + ")");
            e.css("-webkit-transform", "translateX(-50%) translateY(-50%) scale(" + c + ")");
            e.css("-moz-transform", "translateX(-50%) translateY(-50%) scale(" + c + ")");
            e.css("-ms-transform", "translateX(-50%) translateY(-50%) scale(" + c + ")")
        } else {
            e.css("transform", "");
            e.css("-webkit-transform", "");
            e.css("-moz-transform", "");
            e.css("-ms-transform", "")
        }
    }
}
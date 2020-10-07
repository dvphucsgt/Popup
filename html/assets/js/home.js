jQuery(document).ready(function (g) {
    startAnimation();
    selectAnimation();
    jQuery(window).resize(function () {
        sgt_responesive(false)
    });

    $('.animation-item').click(function () {
        selectAnimation();
    });

    $('.sgt-button__close').click(function () {
        $('.sgt-bld__step__content').hide();
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

function onReady(callback) {
    var intervalId = window.setInterval(function () {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1500);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function () {
    setVisible('.sgt-bld__step__content', true);
    setVisible('.sgt-overlay', true);
    setVisible('#loading', false);
});

const selectAnimation = (container = '.animation-list-select', target = '.sgt-bld__step-1') => {
    //Select box
    const containerSelect = document.querySelector(container);
    const targetEl = document.querySelector(target);
    containerSelect.addEventListener('change', (e) => {
        const animation = `animate__${containerSelect.value}`;
        targetEl.classList.add('animate__animated', animation);
        document.documentElement.classList.add('isPlaying');
        document.documentElement.classList.remove('animationList-active');
        function handleAnimationEnd() {
            targetEl.classList.remove('animate__animated', animation);
            document.documentElement.classList.remove('isPlaying');
        }

        targetEl.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

};

const startAnimation = () => {
    const popup = document.querySelector('.callout-popup');
    const sidebar = document.querySelector('.animation-list-select');


    const titleAnimation = 'zoomInDown';
    const sidebarAnimation = 'fadeInRight';

    popup.classList.add('animate__animated', `animate__${titleAnimation}`);
    sidebar.classList.add('animate__animated', `animate__${sidebarAnimation}`)
};

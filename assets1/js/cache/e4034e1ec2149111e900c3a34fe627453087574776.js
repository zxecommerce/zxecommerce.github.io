var GROCERYSHOP = GROCERYSHOP || {};
GROCERYSHOP.disableButton = function($button) {
    $button.attr('disabled', true).addClass('btn-striped btn-striped-animated').html(GROCERYSHOP.lang.loadingIndicatorShort);
}
GROCERYSHOP.resetButton = function($button, text) {
    $button.attr('disabled', false).removeClass('btn-striped btn-striped-animated').html(text);
}
GROCERYSHOP.isMobileScreen = function() {
    return (window.innerWidth <= 768);
};
(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i, el) {
            function visPx() {
                var height = $(this).height(),
                    rect = el.getBoundingClientRect(),
                    top = rect.top,
                    bottom = rect.bottom;
                return cb.call(el, Math.max(0, top > 0 ? height - top : (bottom < height ? bottom : height)));
            }
            visPx();
            $(win).on('resize scroll', visPx);
        });
    };
}(jQuery, window));
var GROCERYSHOP = GROCERYSHOP || {};
GROCERYSHOP.afterReveal = function(el) {}
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: GROCERYSHOP.afterReveal,
    scrollContainer: null
});
wow.init();
$(document).ready(function() {
    var navigationItemsHtml = $('#top-navigation').find('.navbar-nav').html();
    $('#top-navigation-overlay').find('.navigation-overlay-content .embedded').html(navigationItemsHtml);
    $('#navigation-overlay-opener').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('no-scroll');
        $('#top-navigation-overlay').width('100%').toggleClass('open');
    });
    $('#top-navigation-overlay').find('.navigation-overlay-content').find('a').attr('data-action', 'close-navigation-overlay');
    $('a[data-action=close-navigation-overlay]').on('click', function(event) {
        $('body').toggleClass('no-scroll');
        $('#top-navigation-overlay').width('0%').toggleClass('open');
    });
});
$(document).ready(function() {
    var $form = $('form[data-role=primary-form]');
    $(document).on('submit', $form, function(event) {
        $form.find('button[data-action=submit]').attr('disabled', true).addClass('btn-striped btn-striped-animated').html(GROCERYSHOP.lang.loadingIndicator);
        return true;
    });
});
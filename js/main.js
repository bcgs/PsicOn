////////////
// JQuery //
////////////

// Check scrollTop
//
// $(window).scroll(function() {
//     console.log($(this).scrollTop());
// })

/**
 * Fixing navbar toogle not hiding 
 * when clicking out
 */
$(document).on('click',function(){
    $('.collapse').collapse('hide')
})

/**
 * Page transition
 */
$("ul.navbar-nav > li > a, a.navbar-brand").on('click', function(event) {
    event.preventDefault();
    $("ul.navbar-nav li").removeClass('active');
    $(this).parent().addClass('active');
    $("html, body").animate({scrollTop:$(this.hash).offset().top-55}, 800);
})

/**
 * Change active state of links in
 * sticky navigation on scroll
 */
var sections = $('section')
var li = $('ul.navbar-nav li')

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop()

    if(cur_pos <= $(sections[0]).offset().top) {
        li.removeClass('active')
        li.find('a[href="#top"]').parent().addClass('active')
    }
    sections.each(function() {
        var top = $(this).offset().top - 60
        var bottom = top - $(this).outerHeight()

        if(cur_pos >= top && cur_pos >= bottom) {
            li.removeClass('active')
            li.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active')
        }
    })
})

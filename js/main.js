// Navbar toogle not hiding when clicking out
$(document).on('click',function(){
$('.collapse').collapse('hide');
})

// Page transition
$("ul.navbar-nav > li > a").on('click', function(event) {
    event.preventDefault();
    $("ul.navbar-nav li").removeClass('active');
    $(this).parent().addClass('active');
    $("html, body").animate({scrollTop:$(this.hash).offset().top-18}, 800);
});

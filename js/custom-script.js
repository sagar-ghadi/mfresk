/* Set the width of the side navigation to 250px */
$('.sidenav-icon-bar').click(function(){
    $('body').addClass('sidenav-on');
})
/* Set the width of the side navigation to 0 */
$('.closebtn').click(function(){
    $('body').removeClass('sidenav-on');
})    
// Top Arrow Scroll 
$(window).scroll(function(){ 
    if ($(this).scrollTop() > 1200) { 
        $('#scroll').fadeIn();
        $('.c-navabr-bgcolor').addClass('navbar-addshadow');
        $('.copyright-container').addClass('footer-shadow');
    } else { 
        $('#scroll').fadeOut(); 
        $('.c-navabr-bgcolor').removeClass('navbar-addshadow');
        $('.copyright-container').removeClass('footer-shadow');
    } 
}); 

$('.fadeOut').owlCarousel({
    items: 1,
    animateOut: 'fadeOut',
    loop: true,
    margin: 10,
    autoplay: true,
});

$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}); 

$('.career-panel-collapse.in').siblings('.career-panel-heading').addClass('active');

$('.career-panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.career-panel-heading').addClass('active');
});

$('.career-panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.career-panel-heading').removeClass('active');
});
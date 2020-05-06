
$(document).ready(function(){
    $(".ui-tab-ul").find("li").click(function() {
        $(this).siblings().removeAttr("class");
        $(this).attr("class", "ischeck");
    })

    $(".ui-nav-ul").find("li").click(function() {
        $(this).siblings().removeAttr("class");
        $(this).attr("class", "ischeck");
    })
})
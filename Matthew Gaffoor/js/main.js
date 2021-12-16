$(document).ready(function() {
    let currentPage = "home";
    let currentNavLink = $("#nav-ul").children().first().children()[0];

    $("#about").hide();
    $("#contact").hide();

    $(".nav-link").click(function(e) {
        $(`#${currentPage}`).fadeOut(100)
        $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

        currentPage = e.currentTarget.innerHTML

        $(currentNavLink).removeClass("selected");
        $(this).addClass("selected");

        currentNavLink = this;
    })

    let characterIndex = 0;

    let titleNames = ["M", "Ma", "Mat", "Matt", "Matth", "Matthe", "Matthew", "Matthew G", "Matthew Ga", "Matthew Gaf", "Matthew Gaff", "Matthew Gaf", "Matthew Ga", "Matthew G", "Matthew", "Matthe", "Matth", "Matt", "Mat", "Ma"];

    window.updateTitleName = function() {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
    }

    setInterval(() => {
        window.updateTitleName()
    }, 500);
})
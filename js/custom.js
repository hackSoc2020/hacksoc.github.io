var typed2 = new Typed('.type', {
    strings: ['&lt;HackSoc/&gt;'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 4000,
    startDelay: 250,
    smartBackspace: true,
    loop: true,
});


var header = document.getElementById('header');
var links = document.getElementsByClassName('nav-item');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    // smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    var $nav = $('#header');
    $('.nav a').each(function () {
        var currLink = $(this);
        try { var refElement = $(currLink.attr("href")); } catch (e) { }

        if (refElement && refElement.position().top / 1.2 <= scrollPos && refElement.position().top + (refElement.height()) > scrollPos) {
            $('.nav ul li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else {
            currLink.parent().removeClass("active");
        }
    });
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
}

$(function () {
    $(document).scroll(function () {
        var $nav = $("#header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

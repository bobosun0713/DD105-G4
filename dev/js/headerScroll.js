window.addEventListener('load', function () {
    var lastScrollTop = 0;
    header = document.getElementById('topHeader');

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = "-180px";
        } else {
            header.style.top = "0px";
        }

        lastScrollTop = scrollTop;
    });
});



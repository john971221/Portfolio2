window.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);
    var opning = document.querySelector('svg');
    setTimeout(function(){
        opning.fadeOut()
    },4000)
    //header
    $('main').on({
        mousemove: function (e) {
            mouse_loc = e.pageY;
            $('#nav').offset({
                top: mouse_loc
            });

        },
    })

    var Compass = document.querySelector('#nav img');
    var navImg = document.querySelectorAll('#nav ul li img');
    var about = document.querySelector('#about');
    var work = document.querySelector('#work');
    var loc = 0;
    var main = document.querySelector('#main')


    //메인에서 다운을 하면 내려가고
    var about_loc = 0;
    main.addEventListener('mousewheel', function (e) {
        about.scrollTo(about.offsetTop, 0)
        if (e.wheelDelta < 0) {
            window.scrollTo({
                top: about.offsetTop,
                left: 0,
                behavior: 'smooth'
            })
        }
    })
    about.addEventListener('mousewheel', function (e) {
        if (e.wheelDelta > 0 && about.scrollTop == 0) {
            window.scrollTo({
                top: main.offsetTop,
                left: 0,
                behavior: 'smooth'
            })
        } else if (e.wheelDelta < 0 && about.scrollTop > (about.scrollHeight - about.offsetTop)) {
            window.scrollTo({
                top: work.offsetTop,
                left: 0,
                behavior: 'smooth'
            })
        }
    })

    work.addEventListener('mousewheel', function (e) {
        if (e.wheelDelta > 0) {
            window.scrollTo({
                top: about.offsetTop,
                left: 0,
                behavior: 'smooth'
            })
        }
        var work_h2 = document.querySelectorAll('.font_face');

        work_h2.forEach(function (el, idx) {
            console.log(el);
            console.log(window.pageYOffset);
        })
    })


    navImg.forEach(function (el, idx) {
        el.addEventListener('click', function () {
            B = 0;
            if (idx == 0) {
                loc = 0;
                B = 360;
            } else if (idx == 1) {
                about.scrollTo(about.offsetTop, 0)
                loc = about.offsetTop;
                B = -360;
            } else if (idx == 2) {
                loc = work.offsetTop;
                B = 720;
            }
            window.scrollTo({
                left: 0,
                top: loc,
                behavior: 'smooth'
            })


            Compass.style.transform = "rotate(" + B + "deg) translateY(-50%)";
        })
    })


    var h2_num = document.querySelectorAll('#main .h2_box h2');

    function Tlqkf() {
        h2_num.forEach((e, i) => {
            setTimeout(function () {
                if (i < 4) {
                    $('#main h2').eq(i).fadeIn();
                    $('#main h2').eq(i).css({
                        "transform": "translateY(0px)"
                    })
                } else {
                    i = 12 - i;
                    $('#main h2').eq(i).fadeIn();
                    $('#main h2').eq(i).css({
                        "transform": "translateY(0px)"
                    })
                }
            }, 100 * i)
        })
    }
    Tlqkf()









    var plx = [50, 20, 70, -40];
    var scroll = {
        y: 0,
        y2: 0,
        state: ''
    };

    var p1 = new palex($('.h2_box:nth-of-type(1)'), 0, plx[0]);
    var p2 = new palex($('.h2_box:nth-of-type(2)'), 0, plx[1]);
    var p3 = new palex($('.color_chart1'), plx[2], 0, -150);
    var p4 = new palex($('.made_by'), plx[3], 0, -150);

    function palex(el, x, y, loc) {
        console.log(isNaN(loc) == false)
        this.x = x;
        this.y = y;
        this.move = function (state) {
            if (scroll.state == 'down') {
                if (this.y < 400) {
                    this.y += y;
                    this.x += x;
                }
            } else {
                this.y -= y;
                this.x -= x;
                if (this.y <= 0 || this.y < 100) {
                    this.y = 0;
                    this.x = 0;
                }
            }

            if (isNaN(loc) == false) this.y = loc;

            el.css({
                transform: 'translate(' + this.x + 'px,' + this.y + 'px)'
            });
        }
    }

    function scrollUD() {
        scroll.y = $(window).scrollTop();
        if (scroll.y > scroll.y2) {
            scroll.state = 'down';
        } else {
            scroll.state = 'up';
        }
        scroll.y2 = scroll.y;
    }

    $(window).on('scroll', function () {
        scrollUD();
        p1.move(scroll.state);
        p2.move(scroll.state);
        p3.move(scroll.state);
        p4.move(scroll.state);
    });

    //work
    var work_BoYs = document.querySelectorAll('#work div');
    work_BoYs.forEach(function (el, idx) {
        el.style.transform = "translateX(" + (idx * 100) + "vw)"
    })


    var work_h2 = document.querySelectorAll('.font_face');

    work.addEventListener('load', function () {
        L = 0;
        L = work_h2.length;
        if (window.pageYOffset == work.offsetTop) {
            console.log('asdsad')
            for (i = 0; i < L; i++) {

            }
        }


    })



})

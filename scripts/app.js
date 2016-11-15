/*jslint browser: true, devel: true, indent: 4, maxlen: 85, todo: true */

var buffers,
    close,
    modals,
    body,
    nav,
    menuLink,
    home,
    about,
    scrollDown,
    down,
    mq720,
    fullMenu;

// sticky menu
function scroll(){
    if(window.scrollY > home.offsetHeight){
        if(mq720.matches){
            fullMenu.style.position = 'fixed';
            fullMenu.style.top = '0';
            nav.style.position = 'fixed';
            nav.style.top = '40px';
        }
        else{
            nav.style.position = 'fixed';
            nav.style.top = '0';
        }
    }
    else{
        if(mq720.matches){
            fullMenu.style.position = 'relative';
            nav.style.position = 'static';
        }
        else{
            fullMenu.style.position = 'static';
            nav.style.position = 'static';
        }
    }
}

function highlight(){
    if(window.pageYOffset < home.clientHeight){
        menuLink[0].style.color = '#FF1443';
        menuLink[1].style.color = '#FFFFFF';
        menuLink[2].style.color = '#FFFFFF';
    }
    else if(window.pageYOffset > about.offsetHeight){
        menuLink[2].style.color = '#FF1443';
        menuLink[1].style.color = '#FFFFFF';
        menuLink[0].style.color = '#FFFFFF';
    }
    else{
        menuLink[1].style.color = '#FF1443';
        menuLink[0].style.color = '#FFFFFF';
        menuLink[2].style.color = '#FFFFFF';
    }
}

// modal open
function open(e){
    var clicked = e.target;
    for(var i = 0; i < buffers.length; i++){
        if(clicked === buffers[i]){
            body.style.overflow = 'hidden';
            modals[i].style.display = 'block';
            modals[i].style.overflow = 'auto';
        }
    }   
}

function closeMod(){
    for(var i = 0; i < buffers.length; i++){
        modals[i].style.display = 'none';
        body.style.overflow = 'auto';
    }   
}

// mobile view menu
function showMenu(){
    if(mq720.matches){
        if(!down){
            nav.style.display = 'block';
            nav.style.transition = 'all 0.5s ease-in-out';
            scrollDown.style.transition = 'transform .3s linear';
            scrollDown.style.transform = 'rotate(225deg)';    
        }
        else{
            nav.style.display = 'none';
            nav.style.transition = 'all 0.5s ease-in-out';
            scrollDown.style.transition = 'transform .3s linear';
            scrollDown.style.transform = 'rotate(45deg)';
        }
        down = !down;
    }   
}

window.onload = function () {
    'use strict';

    body = document.querySelector('body');

    mq720 = window.matchMedia('(max-width: 720px)');
    fullMenu = document.querySelector('#full-menu');
    home = document.querySelector('#home');
    about = document.querySelector('#work');
    nav = document.querySelector('nav');
    menuLink = document.querySelectorAll('nav > a');
    document.addEventListener('scroll', scroll, false);
    document.addEventListener('scroll', highlight, false);

    buffers = document.querySelectorAll('#work>.container>ul>li>.buffer');
    modals = document.querySelectorAll('.modal');
    for(var i = 0; i < buffers.length; i++){
        var buffer = buffers[i];
        buffer.addEventListener('click', open, false);
    }

    close = document.querySelectorAll('.close');
    for(var j = 0; j < close.length; j++){
        var closed = close[j];
        closed.addEventListener('click', closeMod, false);
    }

    window.onkeydown = function(e){
        if(e.keyCode == 27){
            closeMod();	       
        }
    };

    scrollDown = document.getElementById('scroll-down');
    scrollDown.addEventListener('click', showMenu, false);
    down = false;
};
/**
 * Created by a13153 on 05.06.17.
 */
var arrowLeft = document.getElementById('arrow-left');
var colWid=document.getElementsByClassName('col')[0].clientWidth+20;
//console.log(document.getElementsByClassName('col')[0].clientWidth);
var num=0;

var cols = document.getElementsByClassName('col').length-5;
var stopCols = colWid*cols;
console.log(stopCols);


arrowLeft.onclick=function(){
    if(num!=stopCols) {
        num += colWid;
        document.getElementById('row').style.transform = 'translate(-' + num + 'px,0)';
    }
};
var arrowRight = document.getElementById('arrow-right');
arrowRight.onclick=function(){
    if(num!=0) {
        num= num-colWid;
        document.getElementById('row').style.transform = 'translate(-' + num + 'px,0)';
    }
};

/*respons-menu*/

var headerLogo = document.querySelector('.header_logo');
var header = document.querySelector('.header');
var menu734 = document.querySelector('.top-menu734');
//var headerUserMenu = document.querySelector('.header_user-menu');
var numMenu=0;
headerLogo.onclick = function(){
    numMenu++;
    if(numMenu%2!=0) {
        //headerUserMenu.style.display = 'none';
        header.style.position = 'fixed';
        header.style.top ='0';
        menu734.style.top = '46px';
    } else {
        header.style.position = 'relative';
        menu734.style.top = '-1000px';
    }
};

var searchForm = document.querySelector('.search-form');
var searchBarTopMenu = document.querySelector('.search-bar-top-menu');
searchForm.onclick = function(){
        searchBarTopMenu.style.top = '0';
};
var headerUserMenuOut = document.querySelector('.header_user-menu_out');
headerUserMenuOut.onclick = function(){
    searchBarTopMenu.style.top = '-300px';
};
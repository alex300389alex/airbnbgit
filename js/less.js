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
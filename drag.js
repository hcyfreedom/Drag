/**
 * Created by hcy on 2017/5/4.
 */
window.onload = function () {
    var box = document.getElementById('box');
    addEventHandler(box,"mousedown",dragDown);//鼠标在盒子上摁下，触发，在dragDown这里面处理鼠标移上去和松开鼠标时候的情况
    addEventHandler(document,"mousedown",docDragDown)//鼠标在文档上摁下的时候，触发，在docDragDown里处理，初始的盒子的位置
}
var x = 0,y =0 ;

function getEvent(e) {
    return e || window.event;
}

function addEventHandler(obj,type,func) {
    if (window.attachEvent){
        obj.attachEvent("on" + type,func)
    }else if(window.addEventListener){
        obj.addEventListener(type,func)
    }else {
        console.log("add event error")
    }

}

function removeEventHandler(obj,type,func) {
    if (window.detachEvent){
        obj.detachEvent("on" + type,func)
    }else if(window.removeEventListener){
        obj.removeEventListener(type,func)
    }else {
        console.log("remove event error")
    }
}


function dragDown(e) {
    addEventHandler(document,"mousemove",dragMove);
    addEventHandler(document,"mouseup",dragUp);
}

function docDragDown(e) {
    e = getEvent(e);
    var box = document.getElementById('box');
    x = e.clientX - box.offsetLeft;//记录鼠标和被移动对象的初始偏移位置
    y = e.clientY - box.offsetTop;
}

function dragMove(e) {
    e = getEvent(e);
    var box = document.getElementById('box');
    box.style.left = e.clientX - x + 'px';
    box.style.top = e.clientY - y + 'px';
}

function dragUp(e) {
    e = getEvent(e);
    var box = document.getElementById("box");
    box.style.left = e.clientX - x + "px";
    box.style.top = e.clientY - y + "px";
    removeEventHandler(document, "mousemove", dragMove);
    removeEventHandler(document, "mouseup", dragUp);
}


















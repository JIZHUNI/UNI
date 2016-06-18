/*
*@date 2016-6-16
 */

window.onload = function () {
    var btn = document.getElementById('btn');
    var txt = document.getElementById('are');
    var oUl = document.getElementById('ul1');
    btn.onclick = function () {
        var cLi = document.createElement('li');
        cLi.innerHTML = txt.value;      
        txt.value = '';
        if (oUl.children.length > 0) {      
            oUl.insertBefore(cLi, oUl.children[0]);
        } else {
            oUl.appendChild(cLi);
        }
        var iHeight = cLi.offsetHeight;     
        cLi.style.height = '0';
        move(cLi, { height: iHeight }, function () {        
            move(cLi, { opacity: 100 });
        });
    }
}
function getStyle(ojb, name) {
    if (ojb.currentStyle) {
        return ojb.currentStyle[name];
    }
    else {
        return getComputedStyle(ojb, false)[name];
    }
}
function move(obj, json, fnName) {      
    clearInterval(obj.timer);          
    obj.timer = setInterval(function () {
        var timeStop = true;        
        for (var attr in json) {        
            var oGetStyle = 0;
            if (attr == 'opacity') {  
                oGetStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100); 
            }
            else {
                oGetStyle = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - oGetStyle) / 5;       
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);  
            if (oGetStyle != json[attr])
                timeStop = false;
            if (attr == 'opacity') {    
                obj.style.filter = 'alpha(opacity:' + (oGetStyle + speed) + ')';    
                obj.style.opacity = (oGetStyle + speed) / 100;
            }
            else {
                obj.style[attr] = oGetStyle + speed + 'px';     
            }
        }
        if (timeStop) {    
            clearInterval(obj.timer);
            if (fnName) {       
                fnName();
            }
        }
    }, 30)
}
        //------------------------------------------------------------------------------------
 


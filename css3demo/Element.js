/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-26 16:11:06
 * @version $Id$
 */

var Element = (function (){

    function $(sName,content){
    content = content || document;
    var v1 = sName.charAt(0);
    var arr = [];
    if(v1 === '.'){
        var Class = content.getElementsByTagName('*');
        for(var i=0;i<Class.length;i++){
            var arr1 = Class[i].className.split(' ');
            for(var j=0;j<arr1.length;j++){
                if(arr1[j] === sName.slice(1) ){
                    arr.push(Class[i])
                    break;
                }
            }
        }
        return arr
    }else if(v1 === 'f'){
            var first = content.firstElementChild || content.firstChild;
            return !first || first.nodeType !==1?null:first;
    }else if(v1 === 'l'){
            if(sName === 'li'){
                return content.getElementsByTagName(sName);
            }else{
                var last = content.lastElementChild || content.lastChild;
                return !first || first.nodeType !==1?null:first;
            }   
    }else if(v1 === 'n'){
            var next = content.nextElementSibling || content.nextSibling;
            return !next || next.nodeType !== 1?null:next;
    }else if(v1 === 'p'){
            if(sName.length==1){
                return content.getElementsByTagName(sName);
            }else{
                var prev = content.previousElementSibling || content.previousSibling;
                return !prev || prev.nodeType !==1?null:prev;
            }
            
    }else {
        return v1==='#'?content.getElementById(sName.slice(1)):content.getElementsByTagName(sName);
    }

    

}

function getstyle(obj,attr){
    return (obj.currentStyle?obj.currentStyle:getComputedStyle(obj))[attr];
}

function addClass( obj,classnames ){
            if( obj.className === "" ){  //如果元素中没有class，那么直接添加
                obj.className = classnames;
                return;
            };
            // "a b c"
            var classArray = obj.className.split(" ");

            for( var i = 0; i < classArray.length; i++ ){
                if( classArray[i] === classnames ) return;
            }

            obj.className += " " + classnames;      
        };
function removeClass(obj,classNames){
            if( obj.className === "" ) return;

            var classArray = obj.className.split(" ");
            for( var i = 0; i < classArray.length; i++ ){
                if( classArray[i] === classNames ){
                    classArray.splice(i,1);
                    i--;
                }
            };
            obj.className = classArray.join(" ");   
        };

function first(oul){
    first = oul.firstElementChild || oul.firstChild;
    return first;
};
function next(oul){
    next = oul.nextElementSibling || oul.nextSibling;
    return next;
};
function move(obj,Timer,attr,staget,speed,fn){
    if(obj[Timer]) return ;
    var v1 = parseFloat(getstyle(obj,attr)); // 初始值；
    if(attr == 'opacity') v1 = v1*100;
    speed  = staget<v1?-Math.abs(speed):Math.abs(speed);

    obj[Timer] = setInterval(function(){

        if(attr == 'opacity'){
            if(Math.abs(v1-staget)<Math.abs(speed)){
                v1 = staget;
                obj.style[attr] = v1/100;
                obj.style.filter='alpha(opacity:'+ v1 +')';
                clearInterval(obj[Timer]);
                obj[Timer] = null;
                fn && fn()
            }else{
                v1+=speed;
                obj.style[attr] = v1/100;
                obj.style.filter='alpha(opacity:'+ v1 +')';
            }
        }else{
            if(Math.abs(v1-staget)<Math.abs(speed)){
                v1 = staget;
                obj.style[attr] = v1+'px';
                clearInterval(obj[Timer]);
                obj[Timer] = null;
                fn && fn()
            }else{
                v1+=speed;
                obj.style[attr] = v1+'px';
            }
        }

    },30)
};
return {
        "$":$,
        "getstyle":getstyle,
        "first":first,
        "next":next,
        "addClass":addClass,
        "removeClass":removeClass,
        "move":move
    }
})();

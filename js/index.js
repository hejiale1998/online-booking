var oChange = document.getElementsByClassName('change')[0],
    oSpan = Array.prototype.slice.call(document.getElementsByTagName('span')),
    oCard = document.getElementsByClassName('card')[0],
    oCancle = document.getElementsByClassName('cancle')[0],
    oUl = document.getElementsByTagName('ul')[0],
    oActive;
var onOff = false,
    deg = 0;

/*
    点击中间按钮：
        出发地、目的地互换
        中间按钮旋转
*/
oChange.onclick = function () {
    onOff = !onOff;
    oSpan.forEach(function (ele, index) {
        // if(onOff) {
        //     ele.className = 'after';
        // }else {
        //     ele.className = 'before';
        // }
        ele.className = onOff ? 'after' : 'before';
    });

    deg += 180;
    oChange.style.transform = 'rotate(' + deg + 'deg)';
}

/* 
    点击出发地、目的地：
        划出card区域
        active标记当前点击的元素供下文赋值使用
*/
oSpan.forEach(function (ele, index) {
    ele.onclick = function () {
        oCard.style.left = '0';
        ele.classList.add('active');
        oActive = document.getElementsByClassName('active')[0];
    }
});
/*
    点击取消：
        card区域收回
        清除标记的active元素
*/
oCancle.onclick = function () {
    oCard.style.left = '100%';
    oActive.classList.remove('active');
};
/*
    点击li:
        事件委托
        card区域收回
        给active标记的元素复制
*/
oUl.addEventListener('click', function (e) {
    var target = e.target;
    if(target.nodeName == 'LI') {
        
        oCard.style.left = '100%';
        oActive.innerText = target.innerText;
        oActive.classList.remove('active');
    }
});


//1.数据初始化
var keys={
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    length:3
}
var hash={
    q:'qq.com',
    w:'weibo.com',
    e:'',
    r:'renren.com',
    t:'',
    y:'tianya.com',
    u:'',
    i:'iqiyi.com',
    o:'opera.com',
    p:undefined,
    a:'',
    s:'sohu.cn',
    z:'zhihu.com',
    m:'meituan.com',
   j:'jd.com',
   b:'bilibili.com',
   d:'douyu.com',
   y:'youku.com'
}
var hashInLocalstorage = getFromLocalStorage('zzz');
if (hashInLocalstorage) {
    hash=hashInLocalstorage;
}
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null');
}
function tag(tagName,attributes){
    var element=document.createElement(tagName);
    for(key in attributes){
        element[key]=attributes[key];
    }
    return element;
}

//2.获取kbd
for(var i=0;i<keys.length;i++){
    var row=keys[i];
    var div=tag('div',{className:"row"});
    var wrapper=document.getElementById('wrapper');
    wrapper.appendChild(div);

    for(var n=0;n<row.length;n++){
        var kbd=tag('kbd',{className:'key'});

        var button=tag('button',{textContent:"编辑",id:row[n]});
        button.onclick=function(argument){
            var button2=argument.target;
            var img2=button2.previousSibling
            var key=button2.id;
            x=prompt('请输入你想要你保存的快捷网址');
            hash[key]=x;
            img2.onerror=function(argument){
            argument.target.src='./images/img.png';
            }
            localStorage.setItem('zzz',JSON.stringify(hash));
        }

        var img=tag('img');
        img.src='http://'+hash[row[n]]+'/favicon.ico';
        if(hash[row[n]]){
            img.src='http://'+hash[row[n]]+'/favicon.ico';
        }else{
            img.src='./images/img.png';
        }
        img.onerror=function(argument){
            argument.target.src='./images/img.png';
        }

        var span=tag('span',{textContent:row[n],className:"text"});

        kbd.appendChild(span);
        kbd.appendChild(button);
        kbd.appendChild(img);
        div.appendChild(kbd);
   }

}

document.onkeypress=function (argument) {
    var key=argument.key;
    website=hash[key];
    // location.href='http://'+website;//在当前页面地址栏输入（在当前页面打开）
    var pattern=/^http/
    var aa=pattern.exec(website)
    console.log(aa)
   if(aa){
       window.open(website,'_blank')
   }else{
       window.open('http://'+website,'_blank');
   }
    //在新的页面打开

}
/**
 * @author [silence_yfang@126.com]
 * @date  2016-06-12
 */
var data = [
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'images/0515000057562ACC67BC3D7AD50ECD2F.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    }
];
window.onload = function () {

    var content = document.getElementById("dra");
    var li, img, dl, dt,a, dd;
    for(var i = 0, len = data.length;i < len; i++){
        li = createDom('li');
        a = createDom('a');
        img = createDom('img');
        dl = createDom('dl');
        dt = createDom('dt');
        dd = createDom('dd');
        
        img.src = data[i].src;
        dt.innerHTML = data[i].name;
        dd.innerHTML = data[i].desc;
        dl.appendChild(a);
        a.appendChild(dt);
        dl.appendChild(dd);
        li.appendChild(img);
        li.appendChild(dl);
        content.appendChild(li);
    }
};


function createDom(name) {
    return document.createElement(name);
}

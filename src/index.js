'use strict'
const tree = require('./tree');

// begin
const canvas = document.getElementById('tree');
const ctx = canvas.getContext('2d');
const goDom = document.getElementById('go');
const uriDom = document.getElementById('uri');
const confDom = document.getElementById('conf');
goDom.onclick = () => {
    process();
}
uriDom.onkeydown = function(e){
       // 判断是否按下enter键   enter键的ASCII码值是13
       console.log('enter press')
        if (e.keyCode == 13) {
            // 给文本框聚焦
            process();
            uriDom.focus();
        }
}
function process(){
    const uri = uriDom.value;
    const conf = confDom.value;
    if (!uri.length) {
        console.log(`please input uri you want to match like "/abcd"`);
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const node = tree.render(ctx, uri, conf);
    if (node == null) {
        return console.log(`do not match the uri ${uri}`);
    }

    console.log(`your uri ${uri} => ${tree.unserialize(node)}`);
}

const node = tree.render(ctx, '/abc', confDom.value);

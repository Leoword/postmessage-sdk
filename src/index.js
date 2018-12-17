let inter;
const baseInfo = {};

const targetOrigin = '*';

function operation(type, config, obj) {

    if (typeof config !== 'object' || !obj.id) {
        return;
    }

    top.postMessage(Object.assign({}, config, {
        id: obj.id,
        _operation_type: type
    }));
}

const postMessageSDK = {
    id: null,
    resize(config) {
        operation('resize', config, this)
    },
    set(config) {
        operation('set', config, this)
    },
    close(config) {
        operation('close', config, this)
    }
}


window.addEventListener('message', inter = (event) => {
    postMessageSDK.id = event.data.id; //传对象或对象序列化的字符串
    
    top.postMessage('init successed', targetOrigin);

    window.removeEventListener('message', inter);
});

window._portal_sdk_ = postMessageSDK;
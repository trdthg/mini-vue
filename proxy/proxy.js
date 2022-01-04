let target = {
    id: 1,
    name: '小明'
}

const handler = {
    get: function(target, property, reveiver) {
        console.log('target: ', target)
        console.log('property: ', property);
        console.log('reveiver: ', reveiver);
        return target[property]
    }
}

let proxyTarget = new Proxy(target, handler)

console.log(proxyTarget.id);

Object.defineProperty(proxyTarget, 'id', {
    get: undefined,
})

console.log('id', proxyTarget.id);
console.log('name:', proxyTarget.name);

console.log('target', target);
console.log('proxyTarget', proxyTarget);


let target2 = {};
let p = new Proxy(target2, {});

p.a = 37;   // 操作转发到目标

console.log(target2.a);    // 37. 操作已经被正确地转发
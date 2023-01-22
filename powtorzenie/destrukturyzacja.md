const x = {a: 1, b: 2, c: 3}

const {a:elo, b, c, d:xd=42} = x





function magic(obj){
console.log(obj.a, obj.b)
}
undefined
magic
ƒ magic(obj){
console.log(obj.a, obj.b)
}
magic({a: 1, b: 2});
VM2057:2 1 2
undefined
function magic(obj){
const {a, b} = obj
console.log(a, b)
}
undefined
magic({a: 1, b: 2});
VM2216:3 1 2
undefined
function magic({a, b}){
console.log(a, b)
}
undefined
magic({a: 1, b: 2});
VM2299:2 1 2
undefined
magic({b: 1, a: 2});
VM2299:2 2 1
undefined
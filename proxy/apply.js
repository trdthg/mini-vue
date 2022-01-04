function sum(a, b) {
    return a + b;
}

const handler2 = {
    apply: function(target, thisArg, argumentsList) {
        console.log(`argumentsList ${argumentsList}`);
        // expected output: "Calculate sum: 1,2"
        console.log('thisArg', thisArg)
        return target(argumentsList[0], argumentsList[1]) * 10;
    }
};

const proxy1 = new Proxy(sum, handler2);

console.log(sum(1, 2));
// expected output: 3
console.log(proxy1(1, 2));
// expected output: 30
// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
    blockLet = "Hello I am a block-scoped let"
    //blockConst = "Hello I am a block-scoped const"
    // không thể thay đổi Const 
    blockVar = 'Hello I am a block-scoped var'
    console.log(blockLet)
    console.log(blockLet)
    console.log(blockVar)
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockConst);

function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    {
        console.log("check var in block ", functionVar)
    }
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError


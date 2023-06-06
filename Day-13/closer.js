function func(){
    let num =545;
    return function boo(){
        return num
    }
}
let temp = func()
console.log(temp)
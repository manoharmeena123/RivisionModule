

function Count(str){
let vowel =0;
let conso =0;

for(let i=0; i<str.length; i++){
    if(str[i]=="a" || str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
       vowel++
    }else{
       conso++
    }
}
console.log(vowel, conso)

}

Count("hello world")
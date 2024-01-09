// const  array = ["a", "b", "c", "d", ];
// // ----------------es - 5-----------------
// console.log(array[1]);///b
// //---------ES - 6----------------------------
// const [first,b,ych,dd] = array
// console.log(first);///a
// console.log(b);///b
// console.log(ych);///c
// console.log(dd);///d
// length 1----------------------4-1
const array=[1,2,3,4];
// index---------------0-1-2-3
const lastNUmber = array[array.length-1];
//ES-58
const LastNumber2 = array.at(-1)
console.log(lastNUmber);
console.log(LastNumber2);
//operator----(+,-,*,/,&&,||,?,!,=,==,===)
//ES-6(...)
//... SPREAD OPERATOR
// const a = [1,2,3,];
// const b = [4,5,6];
// const c = a.concat(b)
// console.log(c);

const a = [1,2,3,];
const b = [4,5,6];
const c = [...a,...b,9,0,90]
console.log(c);


//ES-6 includes()
const cars = ["Ford", "BMW", "Fiat", "Volvo", "Volkswagen"];
// ABS->abs .toLowerCase()
// abs ->ABS .toUpperCase()
const bmw =cars.filter(el=>el.toLowerCase().includes("d"));
console.log(bmw);
// console.log(cars.includes("Ford"));


//ES-8 flat()
const deepArray = [[1,2,3,[11,55]],[4,5,6,[11,22]],[7,8,9]];

console.log(deepArray.flat(Infinity));


//...
const iphone = {
    name: "iphone 15 pro",
    brand: "apple",
    ozu:6,
    storage: 256,
    price: 1200,
    owner:{
        name: "ali",
    }
}
// console.log(iphone.name);
// console.log(iphone.brand);
// console.log(iphone.owner.name);


const {ozu, owner} = iphone
console.log(ozu);
console.log(owner.name);

function findElement(selector){
    const element = document.querySelector(selector)
    return [element, element.innerText, element.className]
}
const [body] = findElement("body")
const [btn,btnText] = findElement("button")
console.log(body);
console.log(btnText);
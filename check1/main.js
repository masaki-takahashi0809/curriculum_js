//問1
let numbers = [2,5,12,13,15,18,22];

function isEven(numbers){
    if(numbers % 2 === 0){
    console.log(numbers + 'は偶数です');
}
}
for(let i = 0; i < numbers.length; i++){
    isEven(numbers[i]);
}



//問2
class Car{
    constructor(gass,number){
        this.gass = gass;
        this.number = number;
    }

    getGassNum(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.number}です。`);
    }
}
let car = new Car('20','6789');

car.getGassNum();
import { runer } from "./spl_arr";

class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    bark(): void {
        console.log(`${this.name} is barking!`);
    }
}


///////////////////////////////////////////////////NO. 2


class BankAccount {
    constructor(public accountNumber :string, private balance :number){}
    public getBalance ():number{
        return this.balance;
    }
}

const myAccount = new BankAccount("12345", 10000000000);
console.log(myAccount.getBalance());



///////////////////////////////////////////////////NO. 3



class Vehicle {
    constructor(public brand:string, protected speed:number){};
    move():string{
        return 'The vehicle is moving';
    }
}

class Car extends Vehicle{

    doors:number;

    constructor(doors:number, brand:string, speed:number){
        super(brand,speed);
        this.doors = doors;
    }

    honk(){
        return "Beep Beep!";
    }
}



///////////////////////////////////////////////////NO. 4



interface Shape {
    getArea ():number;
}

class Rectangle implements Shape{
    constructor(public hight:number,public width: number){};

    getArea ():number{
        return this.hight * this.width;
    }
}



///////////////////////////////////////////////////NO. 5


class MathUtils {
    static pi:number = 3.14;
    static circleArea (radius:number):number{
        return radius*(this.pi*this.pi);
    }
}

console.log(MathUtils.circleArea(3));


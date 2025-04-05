export function runer() {
    greet("Haim");
    console.log(getNamesLength(["Haim", "Yael", "David"]));
    console.log(introduce("Haim", 30));
    console.log(introduce("Yael"));
    console.log(createUser("Haim", 30, true));
    console.log(getProductInfo({ id: 1, name: "Laptop", price: 2500, category: "Electronics" }));
    console.log(getCompletedTasks([
        { id: 1, title: "Buy groceries", completed: true },
        { id: 2, title: "Do laundry", completed: false },
        { id: 3, title: "Call mom", completed: true }]));
    new Dog('bob',3).bark();
    console.log(new BankAccount("12345", 10000000000).getBalance());
    console.log(new Car(3,'alph',370).honk());
    console.log(new Rectangle(3,5).getArea());
    console.log(MathUtils.circleArea(3));
    console.log(new Book('talmud', 25, 'rav ashy').print());
    new Library().addBook(new Book('talmud', 25, 'rav ashy')).printAllBooks();
    
    
    
    
}

/////////////////////////////

const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
}

/////////////////////////////

const getNamesLength = (names: string[]): number[] => {
    return names.map(name => name.length);
}

/////////////////////////////

const introduce = (name: string, age?: number): string => {
    return age !== undefined ? `Hello, my name is ${name} and I am ${age} years old.` : `Hello, my name is ${name}.`;
}

/////////////////////////////

const createUser = (name: string, age: number, isAdmin: boolean): { name: string, age: number, isAdmin: boolean } => {
    return { name, age, isAdmin };
}

/////////////////////////////

interface Product {
    id: number;
    name: string;
    price: number;
    category:string;
}

const getProductInfo = (product: Product):String =>{
    return JSON.stringify(product);
    
} 


/////////////////////////////


interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const getCompletedTasks = (tasks: Task[]): string[] => {
    return tasks.filter(task => task.completed).map(task => task.title);
}

/////////////////////////////  CLASS  /////////////////////////////

///////////////////////////////////////////////////Classes NO. 1



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


///////////////////////////////////////////////////Classes NO. 2


class BankAccount {
    constructor(public accountNumber :string, private balance :number){}
    public getBalance ():number{
        return this.balance;
    }
}



///////////////////////////////////////////////////Classes NO. 3



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



///////////////////////////////////////////////////Classes NO. 4



interface Shape {
    getArea ():number;
}

class Rectangle implements Shape{
    constructor(public hight:number,public width: number){};

    getArea ():number{
        return this.hight * this.width;
    }
}



///////////////////////////////////////////////////Classes NO. 5


class MathUtils {
    static pi:number = 3.14;
    static circleArea (radius:number):number{
        return radius*(this.pi*this.pi);
    }
}




///////////////////////////////////////////////////Classes NO. 6

interface Printable {
    print(): string;
}

class Product {
    constructor(public name: string, public price: number) {}
}

class Book extends Product implements Printable {
    constructor(name: string, price: number, public author: string) {
        super(name, price);
    }

    print(): string {
        return `Book: ${this.name}, Price: ${this.price}, Author: ${this.author}`;
    }
}


///////////////////////////////////////////////////Classes NO. 7

 
class Library {

    private books: Book[];

    constructor() {
        this.books = [];
    }


    addBook(book: Book): Library {
        this.books.push(book);
        return this;
    }

    printAllBooks(): void {
        this.books.forEach((book) => console.log(book.print()));
    }
}




interface Post { 

    userId: number; 
  
    id: number; 
  
    title: string; 
  
    body: string; 
  
  }

  class BlogPost  implements Post{
    constructor(public userId:number, public id:number, public title:string ,public body:string){
    }
}


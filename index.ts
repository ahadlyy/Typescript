
let arr:Array<Number>;

//----------------------------------------------------------------------------------------

let arr2:(number|string)[]= [];
arr2.push(5);
arr2.push(6);
arr2.forEach((e)=>console.log(e));

//----------------------------------------------------------------------------------------

let x:number|boolean;

//----------------------------------------------------------------------------------------

function sum(num1:number=1,num2:number=1):number{
    return num1 + num2;
}
console.log(sum(6,9));
console.log(sum(6));
console.log(sum());

//----------------------------------------------------------------------------------------

interface IEmployee{
    id:number,
    name:string,
    email:string,
    address:IAddress;
}
interface IAddress{
    street:string,
    city:string,
    suite:string,
    zipcode:string,
    geo:IGeo
}

interface IGeo{
    lat:number,
    lng:number
}

class Employee implements IEmployee{
    constructor(
        public id:number,
        public name:string,
        private username:string,
        public email:string,
        public address:IAddress
    ){

    }
}
const geo:IGeo ={
    lat:-37.3159,
    lng:81.1496
}
const address:IAddress ={
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo:geo
}
const obj = new Employee(1,"Leanne Graham","Bret","Sincere@april.biz",address);

//----------------------------------------------------------------------------------------

class Manager extends Employee{
    constructor(
         id:number,
         name:string,
         username:string,
         email:string,
         address:IAddress
    ){
        super(id,name,username,email,address);
    }
    displayAddress(){
        console.dir(` street: ${this.address.street} suite: ${this.address.suite} city: ${this.address.city} zipcode: ${this.address.zipcode} latitude: ${this.address.geo.lat} longitude: ${this.address.geo.lng}`); 
    }
}
const mng = new Manager(1,"Leanne Graham","Bret","Sincere@april.biz",address);
mng.displayAddress();

//----------------------------------------------------------------------------------------

interface IAccount{
    Date_of_opening:Date;
    addCustomer(name:string):void;
    removeCustomer(name:string):void;
}
class Account{
    constructor(
        public Acc_no:string,
        public Balance:number
    ){}
    debitAmount(){
        console.log("debit amount function");
    }
    creditAmount(){
        console.log("credit amount function");
    }
    getBalance(){
        console.log("get balance function");
    }
}
class Current_Account  extends Account implements IAccount{
    constructor(
        public Date_of_opening:Date,
        public interest_rate:number,
        Acc_no:string,
        Balance:number
    ){
        super(Acc_no,Balance)
    }

    addCustomer(name:string){
        console.log(`customer ${name} added`);
    }
    removeCustomer(name:string){
        console.log(`customer ${name} removed`);
    }
}
class Savings_Account extends Account implements IAccount{
    constructor(
        public Date_of_opening:Date,
        public Min_Balance:number,
        Acc_no:string,
        Balance:number
    ){
        super(Acc_no,Balance)
    }

    addCustomer(name:string){
        console.log(`customer ${name} added`);
    }
    removeCustomer(name:string){
        console.log(`customer ${name} removed`);
    }
}
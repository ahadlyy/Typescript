var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1-	Create array that accept  number only 
var arr;
// 2-	Create array that accept string and number only and print all items
var arr2 = [];
arr2.push(5);
arr2.push(6);
arr2.push(9);
arr2.push("dasd");
arr2.forEach(function (e) { return console.log(e); });
// 3-	Create a variable that accept number and Boolean only 
var x;
// 4-	Create function with two parameter try to call it without any parameter “handling”
function sum(num1, num2) {
    if (num1 === void 0) { num1 = 1; }
    if (num2 === void 0) { num2 = 1; }
    return num1 + num2;
}
console.log(sum(6, 9));
console.log(sum(6));
console.log(sum());
var Employee = /** @class */ (function () {
    function Employee(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }
    return Employee;
}());
var geo = {
    lat: -37.3159,
    lng: 81.1496
};
var address = {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: geo
};
var obj = new Employee(1, "Leanne Graham", "Bret", "Sincere@april.biz", address);
// console.log(address);
//6-	Create class manager inherit from employee class and  Create a function to view employee address
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, username, email, address) {
        return _super.call(this, id, name, username, email, address) || this;
    }
    Manager.prototype.displayAddress = function () {
        console.dir(" street: ".concat(this.address.street, " suite: ").concat(this.address.suite, " city: ").concat(this.address.city, " zipcode: ").concat(this.address.zipcode, " latitude: ").concat(this.address.geo.lat, " longitude: ").concat(this.address.geo.lng));
    };
    return Manager;
}(Employee));
var mng = new Manager(1, "Leanne Graham", "Bret", "Sincere@april.biz", address);
mng.displayAddress();
var Account = /** @class */ (function () {
    function Account(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    Account.prototype.debitAmount = function () {
        console.log("debit amount function");
    };
    Account.prototype.creditAmount = function () {
        console.log("credit amount function");
    };
    Account.prototype.getBalance = function () {
        console.log("get balance function");
    };
    return Account;
}());
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(Date_of_opening, interest_rate, Acc_no, Balance) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Date_of_opening = Date_of_opening;
        _this.interest_rate = interest_rate;
        return _this;
    }
    Current_Account.prototype.addCustomer = function (name) {
        console.log("customer ".concat(name, " added"));
    };
    Current_Account.prototype.removeCustomer = function (name) {
        console.log("customer ".concat(name, " removed"));
    };
    return Current_Account;
}(Account));
var Savings_Account = /** @class */ (function (_super) {
    __extends(Savings_Account, _super);
    function Savings_Account(Date_of_opening, Min_Balance, Acc_no, Balance) {
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Date_of_opening = Date_of_opening;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    Savings_Account.prototype.addCustomer = function (name) {
        console.log("customer ".concat(name, " added"));
    };
    Savings_Account.prototype.removeCustomer = function (name) {
        console.log("customer ".concat(name, " removed"));
    };
    return Savings_Account;
}(Account));
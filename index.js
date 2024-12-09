"use strict";
// import inquirer  from "inquirer";
// interface BankAccount{
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccountClass = /** @class */ (function () {
    function BankAccountClass(accountnumber, balance) {
        this.accountnumber = accountnumber;
        this.balance = balance;
    }
    BankAccountClass.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdrawal of $".concat(amount, " successful. Remaining balance: $").concat(this.balance));
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    BankAccountClass.prototype.deposit = function (amount) {
        if (amount > 100) {
            amount -= 1; // Deduct a small fee for large deposits
        }
        this.balance += amount;
        console.log("Deposit of $".concat(amount, " successful. Remaining balance: $").concat(this.balance));
    };
    BankAccountClass.prototype.checkBalance = function () {
        console.log("Account balance: $".concat(this.balance));
    };
    return BankAccountClass;
}());
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age, gender, mobileNumber, accountNumber, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    return Customer;
}());
var accounts = [
    new BankAccountClass(1001, 100),
    new BankAccountClass(1002, 200),
    new BankAccountClass(1003, 300)
];
var customers = [
    new Customer("Yousaf", "Saeed", 20, "Male", 3030034456, accounts[0].accountnumber, 100000)
];
// Example: Access the account and perform a withdrawal
accounts[0].withdraw(50); // Withdrawal of $50 from account 1001

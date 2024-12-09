// import inquirer  from "inquirer";
// interface BankAccount{

//  accountnumber:number;
//  balance:number;
//  withdraw(amount :number):void
//  deposit(amount :number):void
//  checkBalance():void
// }
// class BankAccount implements BankAccount{

//     accountnumber: number;
//     balance: number;

//     constructor(accountnumber :number ,balance:number)
//     {
//         this.accountnumber=accountnumber;
//         this.balance =balance;
//     }
   
// withdraw(amount: number): void {
//     if(this.balance>=amount)
//     {
//      this.balance-=amount;
//     console.log(`withdrawal of $${amount} successful.Remaning balance $${this.balance} `)
// }
// else{

//     console.log("insufficient balance,");
// }

// }
// deposit(amount: number): void {
    
// if(amount> 100)
// {
//     amount -= 1;

// }
// this.balance+-amount;
// console.log(`deposit of $${amount} successfully Remaning balance $${this.balance}` );
// }
// checkBalance(): void {
//     console.log(this.balance)
// }
// }

// class customer {

//     firstName:string;
//     lastname:string;
//     age:number;
//     gender:string;
//     mobileNumber:number;
//     accountNumber:number;
//     balance:number;

// constructor(firstName:string, lastname:string,age:number,gender:string,mobileNumber:number, accountNumber:number, balance:number,)

// {
//     this.firstName=firstName;
//     this.lastname=lastname;
//     this.accountNumber=accountNumber;
//     this.age=age;
//     this.gender=gender;
//      this.mobileNumber=mobileNumber;
//      this.balance=balance;

// }

// }

// const account:BankAccount[]=[

// new BankAccount (1001,100),
// new BankAccount (1001,100),
// new BankAccount (1001,100),

// ]
// const customer:customer[]=[

// new customer("yousaf","saeed",20,"male",03030034456,accountnumber[0],100000)


// ]
import inquirer from "inquirer";

interface BankAccount {
    accountnumber: number;
    balance: number;
    withdraw(amount: number): void;
    deposit(amount: number): void;
    checkBalance(): void;
}

class BankAccountClass implements BankAccount {
    accountnumber: number;
    balance: number;

    constructor(accountnumber: number, balance: number) {
        this.accountnumber = accountnumber;
        this.balance = balance;
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balance: $${this.balance}`);
        } else {
            console.log("Insufficient balance.");
        }
    }

    deposit(amount: number): void {
        if (amount > 100) {
            amount -= 1; // Deduct a small fee for large deposits
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. Remaining balance: $${this.balance}`);
    }

    checkBalance(): void {
        console.log(`Account balance: $${this.balance}`);
    }
}

class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobileNumber: number;
    accountNumber: number;
    balance: number;

    constructor(firstName: string, lastName: string, age: number, gender: string, mobileNumber: number, accountNumber: number, balance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

const accounts: BankAccount[] = [
    new BankAccountClass(1001, 100),
    new BankAccountClass(1002, 200),
    new BankAccountClass(1003, 300)
];

const customers: Customer[] = [
    new Customer("Yousaf", "Saeed", 20, "Male", 3030034456, accounts[0].accountnumber, 100000)
];


// Example: Access the account and perform a withdrawal
accounts[0].withdraw(50); // Withdrawal of $50 from account 1001

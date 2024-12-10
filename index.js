import inquirer from "inquirer";
class BankAccountClass {
    accountnumber;
    balance;
    constructor(accountnumber, balance) {
        this.accountnumber = accountnumber;
        this.balance = balance;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient balance.");
        }
    }
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // Deducting a small fee for large deposits
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. Remaining balance: $${this.balance}`);
    }
    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
    }
}
class Customer {
    firstName;
    lastName;
    age;
    gender;
    mobileNumber;
    accountNumber;
    account; // Reference to BankAccount object
    constructor(firstName, lastName, age, gender, mobileNumber, accountNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
        this.account = account;
    }
}
// Fixed `account` and `customer` initialization
const accounts = [
    new BankAccountClass(1001, 100),
    new BankAccountClass(1002, 200),
    new BankAccountClass(1003, 300),
];
const customers = [
    new Customer("Ali", "Usman", 21, "Male", 3030034456, 1001, accounts[0]),
    new Customer("Adeel", "Arshad", 22, "Male", 3030034457, 1002, accounts[1]),
    new Customer("Yousaf", "Saeed", 20, "Male", 3030034458, 1003, accounts[2]),
];
// Main function that runs the banking service
async function service() {
    let exit = false;
    do {
        const accountNumberInput = await inquirer.prompt({
            name: "accountnumber",
            type: "number",
            message: "Enter your account number:",
        });
        // Find the customer by account number
        const customer = customers.find((customer) => customer.accountNumber === accountNumberInput.accountnumber);
        if (customer) {
            console.log(`Welcome, ${customer.firstName} ${customer.lastName}!\n`);
            const ans = await inquirer.prompt([{
                    name: "select",
                    type: "list",
                    message: "Select an Option",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
                }]);
            switch (ans.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to deposit:",
                    });
                    customer.account.deposit(depositAmount.amount); // Deposit functionality
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to withdraw:",
                    });
                    customer.account.withdraw(withdrawAmount.amount); // Withdraw functionality
                    break;
                case "Check Balance":
                    customer.account.checkBalance(); // Check balance functionality
                    break;
                case "Exit":
                    exit = true; // Exit the service
                    console.log("Thank you for using the service!");
                    break;
            }
        }
        else {
            console.log("Account not found. Please check your account number.");
        }
    } while (!exit); // Loop until the user chooses to exit
}
service(); // Start the banking service

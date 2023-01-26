const readline = require('readline')
const { createNewAccount, deposit, withdraw, balance, transfer } = require('./Logic')
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

console.log('\n 🙏 Welcome To Banking App Please Checkout These Commands for interacting with bank application 🙏')
console.log('\n 1. CREATE CODE_NAME ACC_NAME')
console.log(' 2. DEPOSIT CODE_NAME AMOUNT')
console.log(' 3. WITHDRAW CODE_NAME AMOUNT')
console.log(' 4. BALANCE CODE_NAME')

const ip = (msg) => new Promise((resolve, reject) => {rl.question(`\n 👉 ${msg} : `, (ch) => {resolve(ch)})})

const start = async () => {
    while (true) {
        let choice = await ip('Write Your Command')
        choice=choice.split(" ")
       
        if (choice[0] == "CREATE") {
            console.log(`\n ✅ Create Account`)
            const code=choice[1]
            const account_name = choice[2]
            createNewAccount(account_name,code);
        }

        else if (choice[0] == "DEPOSIT") {
            console.log(`\n ✅ Deposit Money`)
            const code = choice[1]
            const amount = +choice[2]
            deposit(code,amount)
        }

        else if (choice[0] == "WITHDRAW") {
            const code = choice[1]
            const amount = +choice[2]
            withdraw( code,amount )
            console.log(`\n ✅ Withdraw`)
        }
        else if (choice[0] == "BALANCE") {
            const code = choice[1]
            balance(code)
        }
        else {
            console.log(`Invalid Input...`)
            process.exit()
        }
    }
}
start()



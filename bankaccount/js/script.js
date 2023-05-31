const $ = function (id) {
    return document.getElementById(id);
}
const BankAccount = function (a_name) {
    // PRIVATE VARIABLES AND METHODS

    let ownerName = a_name
    let balance = 0

    // PUBLIC METHODS THAT HAVE ACCESS TO PRIVATE VARIABLES AND FUNCTIONS

     return {
        deposit: function (amt) {
           if(amt > 0) 
                balance += amt           
        },
        withdrawal: function(amt) {
            if(amt > balance)
                alert(`You have only ${balance} balance. Enter appropriate amount to withdraw`)
            if (amt > 0 && amt <= balance)
                balance -= amt
        },
        getOwnerName: function(){
            return ownerName
        },
        getBalance: function() {
            return balance
        }
     }

}

//const account = new BankAccount('Shilpi')
let account
$('btnDeposit').style.display = 'none'
$('btnWithdraw').style.display = 'none'

window.addEventListener('load', () => { 
   // $('btnName').innerHTML = account.getOwnerName()
   $('btnDeposit').style.display = "none"
   $('btnName').addEventListener('click', () => {
        let ownerName = prompt('Enter your name')
        account = new BankAccount(ownerName)

        $('btnName').style.display = "none"
        $('btnDeposit').style.display = "block"
        $('btnWithdraw').style.display = "block"
        $('welcome').innerHTML = `Accountholder: ${ownerName} `
   })
    $('btnDeposit').addEventListener('click', () => {
        let depositAmount = parseInt(prompt('Enter amount you would like to deposit?'))
        if (isNaN(depositAmount) || depositAmount < 0) {
            alert('Amount entered is not proper. Please Enter amount!')
            return false
        }
        account.deposit(depositAmount)
        $('details').innerHTML = 'Balance: $' + account.getBalance()
    })
    $('btnWithdraw').addEventListener('click', () => {
        let withdrawal = parseInt(prompt('How much would you like to withdrawal?'))
        if (isNaN(withdrawal) || withdrawal < 0) {
            alert('Please enter a valid number.')
            return false
        }
        account.withdrawal(withdrawal);
        $('details').innerHTML = 'Balance: $' + account.getBalance()
    })

})
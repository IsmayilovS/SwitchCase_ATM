let newLine = "\n";
let balance = 1000;

function atm() {
    let a = +prompt(`1-View Balance${newLine}2-Withdraw Money${newLine}3-Deposit Money${newLine}4-Exit${newLine}Please select an option`)
    switch (a,b) {
        case 1:
            alert(balance);
            atm()
            break;
        case 2:
            let b = +prompt("Write amount")
            alert(balance += b);
            atm();
            break;
        case 3:
            let c = +prompt('Write amount')
            if (c > balance) {
                alert('you dont have such amount');
                atm();
            }
            else {
                alert('The balance is ' + (balance -= c))
            }git 
            atm()
            break;
        case 4:
            alert('System closed by user');

        default:
            break;
    }
}
atm()

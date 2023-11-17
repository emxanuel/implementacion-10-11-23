//Modifica la caja registradora para que no se pueda poner un valor que no sea un
//integer positivo y que cuando imprimamos el balance, si estamos por debajo de 0 nos avise.

// var register = {
//     balance: 0,
//     deposit: function (value) {
//         this.balance += value;
//     },
//     withdraw: function (value) {
//         this.balance -= value;
//     },
// };
// 
// register.balance = 100000;
// 
// register.deposit(1);
// register.deposit("0");
// register.deposit("00000");
// register.balance;

//solucion

var register = {
    balance: 0,
    deposit: function (value) {
        this.balance += parseInt(value);
    },
    withdraw: function (value) {
        this.balance -= parseInt(value);
        if (this.balance < 0){
            console.log('Tu balance es menor a cero')
        }
    },
};

register.balance = 100000;

register.balance(1);
register.deposit("0");
register.deposit("00000");
register.balance;

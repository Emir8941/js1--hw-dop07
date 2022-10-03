const btn = document.querySelector('.button')
const inp1 = document.querySelector('.input_name')
const inp2 = document.querySelector('.input_pass')

const names = 'Emir'
const pass = '12345';

class User {
    constructor(inp1,inp2) {
        this.inp1 = inp1;
        this.inp2 = inp2;
    }
}

class loging extends User{
    constructor(inp1, inp2) {
        super(inp1, inp2)
    }
    login() {
        btn.addEventListener('click',function() {
            if (inp1.value === names || inp2.value === pass) {
                alert('succes') 
            }else if (inp1.value === "" || inp2.value === "") {
                alert('заполните все поля')
            }else if (inp1.value != names && inp2.value != pass) {
                alert('fail')
            }
            else{
                alert('fail')
            }
        })
    }
}

const user = new loging("Emir",12345)
user.login()
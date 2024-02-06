'use strict'

class User{
    constructor(username, password,email){
        this.username = username,
        this.password= password,
        this.email=email
    }
    login(username,password){
     if  (this.username===username && this.password === password) {
        alert("User Welcome") ;
          } else {
                   alert("Oppss")  }
    }
    resetPassword(newPass){
        this.password = newPass;
    }
    updateInfo(newEmail){
        this.email= newEmail  
    }
   showInfo(){
    alert(`Usuario: ${this.username} Email : ${this.newEmail} Contraseña: ${this.newPass}`)
   }
}
// InstanciaR = CREAR OBJETOS A TRAVES DE CLASES
let user = new  User('John','123456',"john@gmail.com");
user.login('John','123456');
user.resetPassword('1786');
user.login('John','1786');
user.updateInfo('jhony@yahoo.com');

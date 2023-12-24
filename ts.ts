//defining types
//explicitly describe an obj shape using interface

interface User{
    name:string,
    id:number
}

const user1:User = {
    name:"John Mburu",
    id:0,
}

//trying oop with TS 

class UserAcc{
    name:string
    id:number;

    constructor(name:string,id:number){
        this.name = name
        this.id = id
    }
}

const user:User = new UserAcc('Roselyn',1)


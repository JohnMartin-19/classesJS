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

//using union in TS

function getLength(obj:string| string[] ){
    return obj.length
}

// generics
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<string>;
   
  // object is a string, because we declared it above as the variable part of Backpack.
  const object = backpack.get();
   
  // Since the backpack variable is a string, you can't pass a number to the add function.
  backpack.add('adidas');
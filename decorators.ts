//decorator factory
function sealed(target) {
    // do something with 'target' ...
  }

function color(value: string) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target) {
      // this is the decorator
      // do something with 'target' and 'value'...
    };
  }




function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
@reportableClassDecorator
class Bugreport{
    type = 'report';
    title : string

    constructor(t:string){
        this.title=t;
    }
}

const bug = new Bugreport('needs drak mode pls')
console.log(bug.title)
console.log(bug.type)
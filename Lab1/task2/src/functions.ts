f1("One parameter + ");
f1("Two parameter + ", 37);

function f1(String: string, Number: number = 2){
    console.log(String + Number);   
}
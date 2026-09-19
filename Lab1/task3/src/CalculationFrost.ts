import promptSync = require("prompt-sync");
const prompt = promptSync();

function SizeShop(){
    let sizeCost: number = 0;
    while(true){
        console.log("Введіть розмір:");
        console.log(" 1 - Маленький стаканчик (10 грн)\n ");
        console.log(" 2 - Великий стаканчик (25 грн)\n");
        console.log(" 0 - Вийти \n");
        
        let Size = Number(prompt("Вибір: "));
        
        switch(Size){
            case 1:{
                sizeCost += 10;
                return sizeCost;}
            case 2:{
                sizeCost +=25;
                return sizeCost;}
            case 0:{
                return;}
            default:{
                console.log("Такого немає варіанту.");
            }
        }
        if(Size == 0){
            break;
        }
    }
    return sizeCost;
}

function FillingsShop(){
    let FillingsCost: number = 0;

    while(true){
        console.log("Що ще додати до морозива?");
        console.log(" 1 - шоколад (+5 грн)\n ");
        console.log(" 2 - карамель (+6 грн)\n");
        console.log(" 3 - ягоди (+10 грн)\n");
        console.log(" 4 - маршмелоу (+5 грн)\n");
        console.log(" 0 - Вийти \n");
        
        let Fillings: number = Number(prompt("Вибір: "));
           
        if (Fillings === 1) {
            FillingsCost += 5;
        } else if (Fillings === 2) {
            FillingsCost += 6;
        } else if (Fillings === 3) {
            FillingsCost += 10;
        } else if (Fillings === 4) {
            FillingsCost += 5;
        } else if (Fillings === 0) {
            break;
        } else {
            console.log("Такого немає варіанту.");
        }
    }
    return FillingsCost;
}

function IceCreamShop(){
    let Cost: number = 0;
    
    Cost += Number(SizeShop());

    if(Cost){
        Cost += Number(FillingsShop());
    }
    else{
        console.log("Ви покинули магазин");
        return;
    }
    console.log("Вартість морозива: " + Cost + " грн. ");

}

IceCreamShop();
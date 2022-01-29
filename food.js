const allRadios1 = document.querySelectorAll(".radio_first_section");
const allRadios2 = document.querySelectorAll(".radio_second_section");
const allRadios3 = document.querySelectorAll(".radio_third_section");

const selected = document.querySelectorAll(".selected");

let dishName_selected = "";
let drinkName_selected = "";
let dessertName_selected = "";
let price_dish_selected = 0;
let price_drink_selected = 0;
let price_dessert_selected = 0;

let button = document.querySelector('.button');
const input_button = document.querySelector("#finish_order");

let open_button1 = 0;
let open_button2 = 0;
let open_button3 = 0;
let open_button4 = 0;

let order = "";

let confirm_order = document.querySelector(".confirm_order")
let dish_name = document.querySelector(".dish_name");
let drink_name = document.querySelector(".drink_name");
let dessert_name = document.querySelector(".dessert_name");
let price_dish = document.querySelector(".price_dish");
let price_drink = document.querySelector(".price_drink");
let price_dessert = document.querySelector(".price_dessert");
let total = document.querySelector(".total")

let zap = document.querySelector(".zap");



function check(type, foodName, price) { //function to get the informations

//selecting the dish, drink and dessert that the client want to eat 
    
for(let i=0; i < allRadios1.length; i++){
    if(allRadios1[i].checked){
        selected[i].classList.remove("selected_none");
        open_button1 = 1;
    }else{
        selected[i].classList.add("selected_none");
        
    }
}


for(let x=0; x < allRadios2.length; x++){
    if(allRadios2[x].checked){
        selected[x+3].classList.remove("selected_none");
        open_button2 = 1;
    }else{
        selected[x+3].classList.add("selected_none");
    }
}


for(let y=0; y < allRadios3.length; y++){
    if(allRadios3[y].checked){
        selected[y+6].classList.remove("selected_none");
        open_button3 = 1;
    }else{
        selected[y+6].classList.add("selected_none");
    }
}


//getting the food's names

    if(type === 'dish'){
        dishName_selected = foodName;
        price_dish_selected = price;
    }
    if(type === 'drink'){
        drinkName_selected = foodName;
        price_drink_selected = price;
    }
    if(type === 'dessert'){
        dessertName_selected = foodName;
        price_dessert_selected = price;
    }

    let Total = price_dish_selected + price_drink_selected + price_dessert_selected;

    let order = encodeURIComponent("Olá, gostaria de fazer o pedido: \n- Prato: " + dishName_selected+ " \n- Bebida: "+drinkName_selected + " \n- Sobremesa: "+ dessertName_selected+" \nTotal: R$ "+ Total);

   

// creatig the button do finish the order and ask name and address

    let y = open_button1 + open_button2 + open_button3;

        if(y < 3){
            button.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
            input_button.checked = false;
        }else if(y === 3){
            button.innerHTML = "Fechar pedido";
            button.classList.add("green_button");
        }

        
        if(y === 3 && input_button.checked){
           // your_name = prompt('Qual é o seu nome?');
           // your_address = prompt(your_name + ', qual é o seu endereço?')
            confirm_order.classList.remove("confirm_order_none");
            dish_name.innerHTML = dishName_selected;
            drink_name.innerHTML = drinkName_selected;
            dessert_name.innerHTML = dessertName_selected;
            price_dish.innerHTML = price_dish_selected.toFixed(2);
            price_drink.innerHTML = price_drink_selected.toFixed(2);
            price_dessert.innerHTML= price_dessert_selected.toFixed(2);
            total.innerHTML = "R$ "+ Total.toFixed(2);
            zap.href = "https://wa.me/+5521998199049?text=" + order;
        }
        input_button.checked = false;


}
check();



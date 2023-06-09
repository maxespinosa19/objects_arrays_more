function makeBurger(bun, patty) {
    const burger = {
        bun: bun ,
        patty: patty ,
    };

return burger;
}

const burger1 = makeBurger("sesame_seed", "chicken");
console.log(burger1);

const burger2 = makeBurger("no_sesame", "beef");
console.log(burger2);

const burgers = ["Chicken" , "Beef" , "Veggie" , "Vegan"];
burgers.push("Fish");

console.log(burgers)
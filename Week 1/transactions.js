var transcations = [
    {
        itemName: "Pepsi",
        category: "Drink",
        price: 20,
        timestap: "12-June-2022",
    },
    {
        itemName: "Mirinda",
        category: "Drink",
        price: 20,
        timestap: "12-June-2022",
    },
    {
        itemName: "Pizza",
        category: "Food",
        price: 100,
        timestap: "12-June-2022",
    },
    {
        itemName: "Samosa",
        category: "Food",
        price: 100,
        timestap: "12-June-2022",
    }
]
foodSum = 0;
drinkSum = 0;
function doSomething(transcations)
{

    for ( var i = 0; i < transcations.length ; i++)
    {
        if (transcations[i].category == "Food")
        {
            foodSum += transcations[i].price;
        }
        if (transcations[i].category == "Drink")
        {
            drinkSum += transcations[i].price;
        }
    }
}

doSomething(transcations);

let Analysis = [ 
    {
        category : "Food",
        spent: foodSum
    },
    {
        category : "Drink",
        spent: drinkSum
    }
]

console.log(Analysis);
interface Mountain{
    name:string;
    height:number;
}

let mountains: Mountain[] = [
    {
        name:"Kilimanjaro",
        height:19341
    },
    {
        name:"Everest",
        height:29029
    },
    {
        name:"Denali",
        height:20310
    }
]

function findNameOfTallestMountain(mountains: Mountain[]):string{
    let highMountain:Mountain = mountains[0];
    mountains.forEach((m:Mountain)=>{
        if(m.height > highMountain.height){
            highMountain=m;

        }
    });

    // let highMountain:Mountain = mountains.reduce((prev, current)=>(prev.height > current.height)? prev: current);
    return highMountain.name;
}

let mountainName:string = findNameOfTallestMountain(mountains);
console.log(mountainName);


//
interface Product{
    name:string;
    price:number;
}
let products: Product[] =[
    {
        name:"Steak",
        price:16
    },
    {
        name:"Bacon",
        price:14
    },
    {
        name:"chicken",
        price:12
    }
]

function calcAverageProductPrice(products: Product[]):number{

}
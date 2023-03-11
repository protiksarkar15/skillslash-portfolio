var data1 = [{
    id: 1,
    price: 200,
    title: 'Mango'
},{
    id: 20,
    price: 300,
    title: 'Banana'
}];

var data2 = {
    id: 1,
    price: 200.25,
    title: 'Mango'
}

function transformData(input) {
   
    var acc = {};
    input.forEach(element => {
        
        acc[element.id] = element;
        
        
    });
    console.log(acc);
}

function transformData2(input) {
    
    var acc = {};

    acc.id = input.id;
    acc.price = Math.round(input.price);
    acc.title = input.title;

    console.log(acc);
}

transformData(data1);
transformData2(data2);
/*Output:
1)
 {
    1: {
        id: 1,
        price: 200,
        title: 'Mango'
    },
    20: {
        id: 20,
        price: 300,
        title: 'Banana'
    }
} 

2)
{
    id: 1,
    price: 200,
    title: 'Mango'
}

*/
const pant = [
    {
        image: "./images/product/pant/pant1.jpg",
        name: "Slim Denim",
        price: "$40",
    },
    {
        image: "./images/product/pant/pant2.jpg",
        name: "Cool Blues",
        price: "$50",
    },
    {
        image: "./images/product/pant/pant3.jpg",
        name: "Levis 510",
        price: "$39",
    },
    {
        image: "./images/product/pant/pant4.jpg",
        name: "Levis ll",
        price: "$44",
    },
    {
        image: "./images/product/pant/pant5.jpg",
        name: "Urban Men Denim",
        price: "$29",
    },
    {
        image: "./images/product/pant/pant6.jpg",
        name: "Jeans",
        price: "$40",
    }
];

const shoe = [
    {
        image: "./images/product/shoe/shoe1.jpeg",
        name: "Nike air",
        price: "$64",
    },
    {
        image: "./images/product/shoe/shoe2.jpg",
        name: "Jordans",
        price: "$59",
    },
    {
        image: "./images/product/shoe/shoe3.jpg",
        name: "Adidas go",
        price: "$100",
    },
    {
        image: "./images/product/shoe/shoe4.jpeg",
        name: "Running Shoes",
        price: "$340",
    },
    {
        image: "./images/product/shoe/shoe5.jpeg",
        name: "Nike flite",
        price: "$69",
    },
    {
        image: "./images/product/shoe/shoe6.jpg",
        name: "Addidas fly",
        price: "$95",
    }
];

const jacket = [
    {
        image: "./images/product/jacket/jac1.jpeg",
        name: "Coll Jack",
        price: "$59",
    },
    {
        image: "./images/product/jacket/jac2.jpeg",
        name: "Sherpa Jacket",
        price: "$100",
    },
    {
        image: "./images/product/jacket/jac3.jpeg",
        name: "Warm Jacket",
        price: "$44",
    },
    {
        image: "./images/product/jacket/jac4.jpeg",
        name: "Blue Hot",
        price: "$68",
    },
    {
        image: "./images/product/jacket/jac5.jpeg",
        name: "Denim Special",
        price: "$100",
    },
    {
        image: "./images/product/jacket/jac6.jpg",
        name: "Always hot",
        price: "$99",
    }
];

document.querySelectorAll('.nav').forEach( item => {
    item.addEventListener('click', e => {
        const elemId = e.target.getAttribute('id');

        if(elemId === 'Shoes'){
            doSomeStuff(elemId, shoe);
        }else if(elemId === 'Pants') {
            doSomeStuff(elemId, pant);
        } else if(elemId === 'Jacket') {
            doSomeStuff(elemId, jacket);
        }
    });
}
);

function doSomeStuff(elemId, list){
    /*Add the Class clicked to the clicked list item*/
    /* Turn the selected element's color to white */
    document.querySelectorAll('.nav').forEach(
        x =>{ x.classList.remove('current'); }
      );
    document.getElementById(elemId).classList.add('current');
    /*-----------------------------------------------------*/

    for( i=0; i<6; i++){
        document.getElementById(`img${i+1}`).setAttribute('src', list[i].image);
        document.getElementById(`name${i+1}`).innerHTML = list[i].name;
        document.getElementById(`price${i+1}`).innerHTML = list[i].price;
    }

}


window.onload = doSomeStuff('Shoes', shoe);
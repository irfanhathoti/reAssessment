const allData = [
    {
        id: 1,
        title: "Buttermilk pancakes",
        price: '14.56',
        picUrl: "../Images/knight-duong-BjUq2rdl9_s-unsplash.jpg",
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur quaerat reprehenderit sint natus. Eius, quos quam impedit alias error ut vitae. Nulla qui ipsum illo expedita reprehenderit ducimus cumque!'
    },
    {
        id: 2,
        title: "Dinner Double",
        price: "20.16",
        picUrl: "../Images/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
       
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur quaerat reprehenderit sint natus. Eius, quos quam impedit alias error ut vitae. Nulla qui ipsum illo expedita reprehenderit ducimus cumque!'
    },
    {
        id: 3,
        title: "Godzilla milkshake",
        price: "7.99",
        picUrl: "../Images/lily-banse--YHSwy6uqvk-unsplash.jpg",
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur quaerat reprehenderit sint natus. Eius, quos quam impedit alias error ut vitae. Nulla qui ipsum illo expedita reprehenderit ducimus cumque!'
    },
    {
        id: 4,
        title: "Burgur",
        price: "18.78",
        picUrl: "../Images/haseeb-jamil-J9lD6FS6_cs-unsplash.jpg",
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur quaerat reprehenderit sint natus. Eius, quos quam impedit alias error ut vitae. Nulla qui ipsum illo expedita reprehenderit ducimus cumque!'
    },
    {
        id: 5,
        title: "Hydrabadi Beriyani",
        price: "17.24",
        picUrl: '../Images/mario-raj-n1z3gc9gJ8I-unsplash.jpg',
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur quaerat reprehenderit sint natus. Eius, quos quam impedit alias error ut vitae. Nulla qui ipsum illo expedita reprehenderit ducimus cumque!'
    },
    {
        id: 6,
        title: "Grill Chicken Combo",
        price: "30.16",
        picUrl: '../Images/claudio-schwarz-4qJlXK4mYzU-unsplash.jpg',
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur quaerat reprehenderit sint natus. Eius, quos quam impedit alias error ut vitae. Nulla qui ipsum illo expedita reprehenderit ducimus cumque!'
    }
]

const mainElement = document.querySelector('.container')

let cards = ''

allData.map((value) => {
    cards += `
    <div class='parent'>
        <div>
            <img src = "${value.picUrl}" height="200px" width="300px" alt="" >
        </div>
        <div class='child'>
             <div class='title'>${value.title} </div>
             <div>$ ${value.price} </div>
        </div>
        <hr>
        <div> ${value.discription} </div>
    </div>
    `
mainElement.innerHTML = cards

})

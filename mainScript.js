const imgSlide = document.getElementById("imgSlide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const car = document.getElementById('cars');
const clothes = document.getElementById('clothes');
const phones = document.getElementById('phones');
const makeup = document.getElementById('makeup');
const spanCart = document.getElementById('cartCounter');
let cartCounter = 0;
let flag = false;

spanCart.innerHTML = cartCounter;

const itemContent = document.querySelector('.itemContent');

let counter = 0;

let slider = ['https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s2-960x450h.png.webp',
    'https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s1-960x450h.png.webp',
    'https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp'
]

const showCards = (turnCounter, srcType, imageName) => {
    for (let index = 1; index <= turnCounter; index++) {

        const cardContainer = document.createElement('div');
        cardContainer.className = 'cardContainer';
        const cardImgDiv = document.createElement('div');
        cardImgDiv.className = 'cardImg';
        const cardImg = document.createElement('img');
        cardImg.src = `../images/${srcType}/${imageName}${index}.jpg`;
        cardImgDiv.appendChild(cardImg);
        cardContainer.appendChild(cardImgDiv);

        const cardContent = document.createElement('div');
        cardContent.className = 'cardContent';

        const mainClothColor = document.createElement('div');
        mainClothColor.className = 'mainClothColor';
        const span1 = document.createElement('span');
        span1.className = 'clothColor1';
        const span2 = document.createElement('span');
        span2.className = 'clothColor2';

        const span3 = document.createElement('span');
        span3.className = 'clothColor3';

        const span4 = document.createElement('span');
        span4.className = 'clothColor4';

        mainClothColor.append(span1, span2, span3, span4);

        const title = document.createElement('h2');
        const textTitle = document.createTextNode(`${srcType} Brand`);
        title.appendChild(textTitle);

        const price = document.createElement('p');
        price.className = 'price';
        const textprice = document.createTextNode('$ 132.00');
        price.appendChild(textprice);
        cardContent.appendChild(price);

        const mainClothSize = document.createElement('div');
        if (srcType === 'clothes') {
            mainClothSize.className = 'mainClothSize';
            const spanSize1 = document.createElement('span');
            spanSize1.className = 'clothSize';
            const text1 = document.createTextNode('S');
            spanSize1.appendChild(text1);
            const spanSize2 = document.createElement('span');
            spanSize2.className = 'clothSize2';
            const text2 = document.createTextNode('M');
            spanSize2.appendChild(text2);
            const spanSize3 = document.createElement('span');
            spanSize3.className = 'clothSize3';
            const text3 = document.createTextNode('L');
            spanSize3.appendChild(text3);
            mainClothSize.append(spanSize1, spanSize2, spanSize3);
        }
        const descripe = document.createElement('p');
        const textDesc = document.createTextNode('Lorem ipsum dolor sit top shirt');
        descripe.appendChild(textDesc);

        const addToCart = document.createElement('button');
        addToCart.id = 'addToCard';
        const text = document.createTextNode('Add to card');
        addToCart.appendChild(text);

        const removeCart = document.createElement('button');
        removeCart.id = 'removeCart';
        removeCart.style.display = 'none';
        const text1 = document.createTextNode('Remove from cart');
        removeCart.appendChild(text1);

        addToCart.addEventListener('click', () => {

            addToCart.style.display = "none";
            removeCart.style.display = 'inline';
            cartCounter++;

            spanCart.innerHTML = cartCounter;

        })



        removeCart.addEventListener('click', () => {
            removeCart.style.display = 'none';
            addToCart.style.display = 'inline';
            cartCounter--;
            spanCart.innerHTML = cartCounter;

        })
        if (srcType == 'clothes') {
            cardContent.append(mainClothColor, title, price, mainClothSize, descripe, addToCart, removeCart);
        } else {
            cardContent.append(mainClothColor, title, price, descripe, addToCart, removeCart);

        }

        cardContainer.appendChild(cardContent);
        itemContent.appendChild(cardContainer);


    }

}
car.onclick = () => {
    itemContent.innerHTML = "";
    console.log('here')
    showCards(6, 'cars', 'car')
}
clothes.onclick = () => {
    itemContent.innerHTML = "";
    showCards(3, 'clothes', 'clo')

}
makeup.onclick = () => {
    itemContent.innerHTML = "";
    showCards(3, 'phones', '')

}
phones.onclick = () => {
    itemContent.innerHTML = "";
    showCards(5, 'phones', '')

}


const timer = setInterval(() => {
    if (counter == 3) counter = 0;
    imgSlide.setAttribute('src', slider[counter]);
    counter++;
}, 3000);


next.addEventListener('click', () => {
    if (counter == 3) counter = 0;
    imgSlide.setAttribute('src', slider[counter]);
    counter++;
})

prev.addEventListener('click', () => {
    if (counter == 0) counter = 2;
    imgSlide.setAttribute('src', slider[counter]);
    counter--;

})
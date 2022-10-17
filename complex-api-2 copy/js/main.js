document.querySelector('button').addEventListener('click', getPrice)



function getPrice(){
let cryptoInput = document.querySelector('input').value
let upperCryptoInput = cryptoInput.toUpperCase()
fetch('https://api.coinlore.net/api/tickers/')
.then(res => res.json())
.then(data1 =>{
console.log(data1, data1.data.length, data1.data[0].price_usd, data1.data[0].symbol, data1.data[0].percent_change_7d)
console.log(cryptoInput)
for(i=0; i < data1.data.length; i++){
    
    if(data1.data[i].symbol == upperCryptoInput){
        console.log('swagger')
        document.querySelector('#price').innerText = 'Price = $' + data1.data[i].price_usd
        document.querySelector('#percentChange').innerText = 'Percent Change Over 7 Days: ' + data1.data[i].percent_change_7d + '%'
        percentChange = Number(data1.data[i].percent_change_7d)
    }
    else{
        console.log('notswagger')
    }
}
 if(percentChange<0){
fetch('https://api.giphy.com/v1/gifs/search?api_key=gZbXPE3EAx3G7dDXzBRbrwkUx81gDpQk&q=sad&limit=25&offset=0&rating=g&lang=en')
 .then(res => res.json())
 .then(data2 =>{
    let randomGIF = Math.floor(Math.random() * data2.data.length)
console.log(data2, data2.data[randomGIF].images.original.webp)
document.querySelector('img').src = data2.data[randomGIF].images.original.webp
document.querySelector('#upOrDown').innerText = 'POV: You'



 })
}
else{
    fetch('https://api.giphy.com/v1/gifs/search?api_key=gZbXPE3EAx3G7dDXzBRbrwkUx81gDpQk&q=happy&limit=25&offset=0&rating=g&lang=en')
 .then(res => res.json())
 .then(data2 =>{
    let randomGIF = Math.floor(Math.random() * data2.data.length)
    console.log(data2, data2.data[randomGIF].images.original.webp)
    document.querySelector('img').src = data2.data[randomGIF].images.original.webp
     document.querySelector('#upOrDown').innerText = 'POV: You'
    
 })
 }



})

}
const txt1 = document.getElementById('country');
let btn1 = document.getElementById('btn');

btn1.addEventListener( "click", () => {
    let countryName = txt1.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].name.common)
        console.log(data[0].capital[0])
        console.log(data[0].region)
        console.log(data[0].flags.svg)
        console.log(data[0].borders)
    })     /* U can access one of the properties data[0].capital*/
    .catch(error => console.error(error));
});

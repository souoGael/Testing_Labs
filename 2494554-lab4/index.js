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
        console.log(data[0].population)
        console.log(data[0].region)
        console.log(data[0].flags.svg)
        
        data[0].borders.forEach((cd) => {
            let codeURL =  `https://restcountries.com/v3.1/alpha/${cd}?fullText=true`;
   
            fetch(codeURL)
            .then(response => response.json())
            .then(code => {
                console.log(code[0].name.common)
            })     /* U can access one of the properties data[0].capital*/
            .catch(error => console.error(error));
        });
        
        
    })     /* U can access one of the properties data[0].capital*/
    .catch(error => console.error(error));
});

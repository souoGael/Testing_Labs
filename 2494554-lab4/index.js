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
                console.log(code[0].flags.svg)
            })     /* U can access one of the properties data[0].capital*/
            .catch(error => console.error(error));
        });

         /* output the data */

        result.innerHTML = `
            <h1>${data[0].name.common}</h1>
            <h4>Capital: ${data[0].capital[0]}</h4>
            <h4>Population: ${data[0].population}</h4>
            <h4>Region: ${data[0].region}</h4>
            <img src="${data[0].flags.svg}" class="flag-img">

        `;
        
        
    })     /* U can access one of the properties data[0].capital*/
    .catch(error => console.error(error));
});

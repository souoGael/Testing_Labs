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
        
         /* output the data */

        result.innerHTML = `
            <h1>${data[0].name.common}</h1>
            <h4>Capital: ${data[0].capital[0]}</h4>
            <h4>Population: ${data[0].population}</h4>
            <h4>Region: ${data[0].region}</h4>
            <img src="${data[0].flags.svg}" class="flag-img">
        `;

        data[0].borders.forEach((cd) => {
            let codeURL =  `https://restcountries.com/v3.1/alpha/${cd}?fullText=true`;
   
            fetch(codeURL)
            .then(response => response.json())
            .then(code => {
                console.log(code[0].name.common)
                console.log(code[0].flags.svg)
                let bc =document.createElement('p')
                bc.innerText = code[0].name.common;
                document.getElementById('result1').appendChild(bc);

                
                /* output the data 
                result1.innerText = `
                    <h4>${code[0].name.common}</h4>
                    <img src="${code[0].flags.svg}" class="flag-img1">
                `;*/

            })   

            .catch(error => console.error(error));
        });
        
    })  
    .catch(error => console.error(error));
});

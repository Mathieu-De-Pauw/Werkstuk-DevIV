"use strict"
$(document).ready(function(){
    //console.log("script linked");
    let optreden =[];

    $.ajax({
        type: 'GET',
        url:'/entries.json',
        dataType: 'json'
    }).done(function(data){
        //console.log(data);
        printData(data);
    }).fail(function(err1,err2){
        console.log(err1,err2);
    }).always(function(){
        //console.log("en");
    })

    // Verzamel alle data uit json file en steek deze in een array  
    function printData(data){
        $("#insert").empty();
        let g = 0;
        for(let i in data){
            let stuk = data[i];  
            console.log(stuk);
            for(let g in stuk){
                let naam = stuk[g];
                optreden.push(naam);
                $("#insert").append(`<div class="filterDiv"><div class="imgContainer"><img src="${naam.thumbnail.url}" alt="${naam.slug}"></div><h2>${naam.name}</h2><h3 class="genreTitle">${naam["genre-v2"]}</h3><p>${naam.excerpt}</p><p>${naam["recorded-at"]}</p><h4>${naam["video-length"]}</h4></div>`);
            }
        }
    }

    // Kies Doelgroep
    $(".btn-doelgroep").click(function(){
        $("#insert").empty();
        const text = $(this).text();
        const text2 = text.toLowerCase();
        console.log(text2,optreden);
        let text3 = zoekDoelgroep(text2);
        for(let i = 0; i < inputArray.length; i++){
            maakLayout(text3[i])
        }
    })    

       //Kies Genre
       $(".btn-genre").click(function(){
        $("#insert").empty();
        const text = $(this).text();
        const text2 = text.toLowerCase();
        let text3 = selecteerGenre(text2);
        for(let i = 0; i < inputArray2.length; i++){
            maakLayout(text3[i])
        }
    }) 

    let inputArray = [];
    // Selecteer data voor gekozen filter
    function zoekDoelgroep(data){
        for(let i = 0; i < optreden.length ; i++){
            //console.log(optreden[i]);
            if(data == optreden[i].category){
            if(inputArray.includes(optreden[i])){
                console.log("al zichtbaar");
            } else {
            inputArray.push(optreden[i]);
            //maakLayout(optreden[i]);
            }
            } else {
            //console.log("neen");
            }
        }
        return inputArray;
    }
    let inputArray2 = [];
    //Selecteer data voor genre 
    function selecteerGenre(data){
        for(let i = 0 ; i < optreden.length ; i++){
            //console.log(optreden[i]);
            if(data == optreden[i]['genre-v2']){
                if(inputArray2.includes(optreden[i])){
                    console.log("al zichtbaar");
                } else {
                inputArray2.push(optreden[i]);
                //maakLayout(optreden[i]);
                }
            } else {
            //console.log("neen");
            }
        }
        return inputArray2;
    }

      // Print geselecteerde filter
      function maakLayout(data){
        $("#insert").append(`<div class="filterDiv"><div class="imgContainer"><img src="${data.thumbnail.url}" alt="${data.slug}"></div><h2>${data.name}</h2><h3 class="genreTitle">${data["genre-v2"]}</h3><p>${data.excerpt}</p><p>${data["recorded-at"]}</p><h4>${data["video-length"]}</h4></div>`)
}

});



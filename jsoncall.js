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
                $("#insert").append('<div class="filterDiv '+naam.category+'"> <br>' + naam.name + "<br>" + naam.excerpt +"<br>" + naam.category + "<br>" + naam['genre-v2']+ "<br>"+ naam["video-length"] +" <br> </div>");
            }
        }
    }

    // Kies Doelgroep
    $(".btn-doelgroep").click(function(){
        $("#insert").empty();
        const text = $(this).text();
        const text2 = text.toLowerCase();
        console.log(text2,optreden);
        zoekDoelgroep(text2);
    })    

       //Kies Genre
       $(".btn-genre").click(function(){
        $("#insert").empty();
        const text = $(this).text();
        const text2 = text.toLowerCase();
        selecteerGenre(text2);
    }) 

    // Selecteer data voor gekozen filter
    function zoekDoelgroep(data){
        for(let i = 0 ; i < optreden.length ; i++){
            //console.log(optreden[i]);
            if(data == optreden[i].category){
            maakLayout(optreden[i]);
            } else {
            //console.log("neen");
            }
        }
    }

    //Selecteer data voor genre 
    function selecteerGenre(data){
        for(let i = 0 ; i < optreden.length ; i++){
            //console.log(optreden[i]);
            if(data == optreden[i]['genre-v2']){
            maakLayout(optreden[i]);
            } else {
            //console.log("neen");
            }
        }
    }

      // Print geselecteerde filter
      function maakLayout(data){
        $("#insert").append('<div class="filterDiv '+data.category+'"> <br>' + data.name + "<br>" + data.excerpt +"<br>" + data.category + "<br>" + data['genre-v2']+ "<br>"+ data["video-length"] +" <br> </div>");
    }
});



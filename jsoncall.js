$(document).ready(function(){
    //console.log("script linked");
    const optreden =[];

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
        var g = 0;
        for(var i in data){
            var stuk = data[i];  
            //console.log(stuk);
            for(var g in stuk){
                var naam = stuk[g];
                optreden.push(naam);
                $("#insert").append('<div class="filterDiv '+naam.category+'"> <br>' + naam.name + "<br>" + naam.excerpt +"<br>" + naam.category + "<br>" + naam['genre-v2']+ "<br>"+ naam["video-length"] +" <br> </div>");
            }
        }
    }

    // Kies filter
    $(".btn-doelgroep").click(function(){
        const text = $(this).text();
        console.log(text,optreden);
        zoekDoelgroep(text,optreden);
    })    

    // Selecteer data voor gekozen filter
    function zoekDoelgroep(data,optreden){
        //console.log(optreden.length);
        $("#insert").empty();
        for(let i = 0 ; i < optreden.length ; i++){
            //console.log(optreden[i]);
            if(data == optreden[i].category){
            console.log("ja");
            maakLayout(optreden[i]);
            } else {
            console.log("neen");
            }
        }
    }

    // Print geselecteerde filter
    function maakLayout(data){
        $("#insert").append('<div class="filterDiv '+data.category+'"> <br>' + data.name + "<br>" + data.excerpt +"<br>" + data.category + "<br>" + data['genre-v2']+ "<br>"+ data["video-length"] +" <br> </div>");
    }
});



console.log("start");
$(document).ready(function(){
    console.log("script linked");

    $.ajax({
        type: 'GET',
        url:'/entries.json',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        printData(data);
    }).fail(function(err1,err2){
        console.log(err1,err2);
    }).always(function(){
        console.log("end");
    })

      
    function printData(data){
        console.log("printing data");
        var g = 0;
        for(var i in data){
            var stuk = data[i];
            console.log(stuk);
            for(var g in stuk){
                var naam = stuk[g];
                $("#insert").append('<div class="filterDiv '+naam.category+'"> <br>' + naam.name + "<br>" + naam.excerpt +"<br>" + naam.category + "<br>" + naam['genre-v2']+ "<br>"+ naam["video-length"] +" <br> </div>");
            }
        }
    }

    function filterSelection(data){
        if(data == 'familie'){
            console.log('familie geselecteerd');
        } else if(data == 'volwassenen') {
            console.log('volwassen geselecteerd');
        } else {
            console.log('niks gebeurd');
        }
    }

});



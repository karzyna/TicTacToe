var turn = false;
var cross = '<i class="material-icons large">clear</i>';
var circle = '<i class="material-icons large"> radio_button_unchecked</i>';
var cancelled = false;
var ifstarted = false;

$(document).ready(function() {
    $("#player").hide();
    $("#playGround").hide();
    
    $("#start").click(function() {
        
        if (!ifstarted) {
            $("#start p").removeClass("pulse deep-orange");
            $("#player").show();
            $("#start p").html("<i class='material-icons large left'>loop</i>" + "RESTART");
            $("#start p").addClass("red");
            ifstarted = true;
        } else {
            $("#start p").html("<i class='material-icons large left'>add</i>" + "START THE GAME");
            $("#start p").removeClass("red");
            $("#start p").addClass("pulse deep-orange");
            $("#player").hide();
            $("#player").addClass("pulse");
            $('.collapsible').collapsible();
            $("#playGround").hide();  
            $("#fields td").html(''); 
            //$("#fields tr").css('background-color','white');
            $("#fields td").css('background-color','white');
            $('#results i').last().remove();
            $('#results').addClass("hide");
            cancelled = false;
            ifstarted = false;
            $('#player').html('<i class="material-icons left">person</i> CHOOSE A PLAYER');
        }
        
   })
   
    $("#player").click(function() {
        $("#player").removeClass("pulse");
   })
})


function selection(field) {
    
    var selected = $(field).attr('at');
    console.log(selected);
    
    if (selected === "second") {
            turn = true;
            $('#player').html('<i class="material-icons left">person</i> NOW PLAYING: ' + circle);
    } else {
        $('#player').html('<i class="material-icons left">person</i> NOW PLAYING: ' + cross);
    }
    
    
    $('.collapsible').collapsible('close', 0);
    $('.collapsible').collapsible('destroy', true);
    
    $("#playGround").show();
    
    
}

function action(field) {
    if ($(field).html() === '' && !cancelled) {
        if (turn) {
            $(field).append(circle);   
            $('#player').html('<i class="material-icons left">person</i> NOW PLAYING: ' + cross);
        } else {
            $(field).append(cross);
            $('#player').html('<i class="material-icons left">person</i>NOW PLAYING: ' + circle);
        }
        
        turn = !turn;
        result();
    }
}

function result() {
    if ( $("#field11").html() === $("#field21").html() && $("#field11").html() === $("#field31").html() && $("#field11").html() != '') {
      
        //$("table tr:first-child").css('background-color', '#69f0ae');
        $("#field11, #field21, #field31").css('background-color', '#69f0ae');
        $("#results").removeClass('hide');
        $("#results").append(($('#field11').html()));
        cancelled = true;
        
    } else if ( $("#field12").html() === $("#field22").html() && $("#field12").html() === $("#field32").html()  && $("#field12").html() != '' ) {
        
        //$("table tr:nth-child(2)").css('background-color', '#69f0ae');
        $("#field12, #field22, #field32").css('background-color', '#69f0ae');
        $("#results").removeClass('hide');
        $("#results").append(($('#field12').html()));
        cancelled = true;
        
    } else if ( $("#field13").html() === $("#field23").html() && $("#field13").html() === $("#field33").html() && $("#field13").html() != '' ) {
        
        //$("table tr:last-child").css('background-color', '#69f0ae');
        $("#field13, #field23, #field33").css('background-color', '#69f0ae');
        $("#results").removeClass('hide');
        $("#results").append(($('#field13').html()));
        cancelled = true;
        
    } else if ( $("#field11").html() === $("#field12").html() && $("#field11").html() === $("#field13").html() && $("#field11").html() != '') {
          
          $("table td:first-child").css('background-color', '#69f0ae');
          $("#results").removeClass('hide');
          $("#results").append(($('#field11').html()));
          cancelled = true;
          
    } else if ( $("#field21").html() === $("#field22").html() && $("#field21").html() === $("#field23").html()  && $("#field21").html() != '' ) {
        
        $("table td:nth-child(2)").css('background-color', '#69f0ae');
        $("#results").removeClass('hide');
        $("#results").append(($('#field21').html()));
        cancelled = true;
        
    } else if ( $("#field31").html() === $("#field32").html() && $("#field31").html() === $("#field33").html() && $("#field31").html() != '' ) {
        
        $("table td:last-child").css('background-color', '#69f0ae');
        $("#results").removeClass('hide');
        $("#results").append(($('#field31').html()));
        cancelled = true;
        
    } else if ( $("#field11").html() === $("#field22").html() && $("#field11").html() === $("#field33").html() && $("#field11").html() != '') {
           
       $("#field11, #field22, #field33").css('background-color', '#69f0ae');
       $("#results").removeClass('hide');
       $("#results").append(($('#field11').html()));
       cancelled = true;
           
    } else if ( $("#field31").html() === $("#field22").html() && $("#field31").html() === $("#field13").html()  && $("#field31").html() != '' ) {
        
        $("#field31, #field22, #field13").css('background-color', '#69f0ae');
        $("#results").removeClass('hide');
        $("#results").append(($('#field31').html()));
        cancelled = true;
        
    } else if (($("#field11").html() != '') && $("#field12").html() != '' && $("#field13").html() != '' && $("#field21").html() != '' && $("#field22").html() != '' && ($("#field23").html() != '') && $("#field31").html() != '' && $("#field32").html() != '' && $("#field33").html() != '' ) {
        $("#results").removeClass('hide');
        $("#results").html("<h2> <br> DRAW </h2>"); 
    }
    
}
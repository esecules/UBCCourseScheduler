/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {
    $("#add-button").click(function(){
        var tag = $("#coursecode").val();
        var deleteButton = $("<button>").button({
            icons: {primary: "ui-icon-close"},
            text:false})
            .click(function(){
                $(this).parent().remove();
            });

        //TODO: add in functionality to serve backend
        //TODO: check whther course code is valid
        //TODO: use sweet alert if not
        if(tag.length == 0){
            $("<p>").text("Seems like you haven't entered a course code~").dialog();
        } else if(tag.length >= 12){
            $("<p>").text("Seems like the course code you entered was too long!").dialog();
        } else{
            $("<li>").text(tag).draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
            }).append(deleteButton).appendTo(".course-tags").data("event", {
                title: $.trim(tag),
                stick: true,
                editable: true
            });
            $("#coursecode").val("");
        }
        return false;
    });



    var calendar = $("#calendar").fullCalendar({
        droppable: true,
        minTime:"08:00:00",
        defaultView:'month',
        theme:false,
        header:{
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        googleCalendarApiKey: 'AIzaSyDwfIYK0yFpamboP365yLvc1E4sT18HL7I',
        events:{
            googleCalendarId:'umhhqhqcoctmrlqlll8hgtktmk@group.calendar.google.com',

        }
    });

    var cpsc310 = {
        id     :'310',
        title  :'CPSC 310 Lecture',
        start  :'2015-08-24 09:00:00',
        end    :'2015-08-24 11:00:00',
        allDay : false,

        location: 'DMP 110',
        editable: true
    };

    calendar.fullCalendar('renderEvent', cpsc310, true)
}

$(document).ready(main);

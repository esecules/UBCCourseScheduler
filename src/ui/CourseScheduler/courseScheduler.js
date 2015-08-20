/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {

    //Add button click event handler
    $("#add-button").popover().click(function(){
        var tag = $("#coursecode").val();
        var deleteButton = $("<button>").button({
            icons: {primary: "ui-icon-close"},
            text:false})
            .click(function(){
                $(this).parent().remove();
            });

        //No course code entered
        if(tag.length == 0){
            $(this).data('bs.popover').options.content = 'You have to enter a course code!';
            $(this).popover("show");
            $('body').click(function() {
                $("#add-button").popover('hide');
            });
        }

        //Course code entered is too long
        else if(tag.length >= 12){
            $(this).data('bs.popover').options.content = 'Course code entered is too long!';
            $(this).popover("show");
            $('body').click(function() {
                $("#add-button").popover('hide');
            });
        }

        //0 < CourseCode.length <= 12
        else{
            //Invalid Course Code
            //TODO: if/else statement needed
            //TODO: make ajax call

            //Valid Course Code
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

        //Page doesn't go to top every time an element is added
        return false;
    });


    //Fullcalendar Initialisation
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

//Function execute when HTML doc is loaded
$(document).ready(main);

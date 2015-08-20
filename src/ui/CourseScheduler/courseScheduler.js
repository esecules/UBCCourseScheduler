/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {

    //Add button click event handler
    $("#add-button").popover().click(function(){

        var tag = $("#coursecode").val();
        tag = tag.trim().replace(/\s+/g,"");

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

        //Course code entered has special characters
        else if(/^[a-zA-Z0-9- ]*$/.test(tag) == false){
            $(this).data('bs.popover').options.content = 'Course code entered contains special characters!';
            $(this).popover("show");
            $('body').click(function() {
                $("#add-button").popover('hide');
            });
        }

        //Course code entered does not have a course number
        else if(/\d{3,}/.test(tag) == false){
            $(this).data('bs.popover').options.content = 'Course code entered does not have a course number!';
            $(this).popover("show");
            $('body').click(function() {
                $("#add-button").popover('hide');
            });
        }

        //Course code entered does not have a vald department code
        else if(/^[a-zA-Z]{4}/.test(tag) == false){
            $(this).data('bs.popover').options.content = 'Course code entered does not have a valid department code!';
            $(this).popover("show");
            $('body').click(function() {
                $("#add-button").popover('hide');
            });
        }

        //valid coursecode  format
        else{
            //Invalid Course Code
            //TODO: if/else statement needed
            //TODO: make ajax call

            var department = tag.substr(0,4).toUpperCase();
            var code = tag.substr(4).trim().toUpperCase();

            $.ajax({
                url: "http://192.168.99.100:8083/departments/"+department+"/courses/"+code+"/sections"
            }).then(function(data){
                obj = JSON.parse(data);
                //alert(obj.count);
            });

            //Valid Course Code
            $("<li>").text(tag).draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
            }).append(deleteButton).appendTo(".course-tags").data("event", {
                title: $.trim(department+" "+code),
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

    //TEST: manually added event object
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

/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {

    var course = [
        {
            "status": "Full",
            "start": "16:00",
            "term": 1,
            "end": "18:30",
            "activity": "Lecture",
            "section": "PSYC 350A 901",
            "interval": "",
            "days": [
                "Wed"
            ]
        },
        {
            "status": "",
            "start": "16:00",
            "term": 2,
            "end": "18:30",
            "activity": "Lecture",
            "section": "PSYC 350A 202",
            "interval": "",
            "days": [
                "Wed"
            ]
        },
        {
            "status": "",
            "start": "17:00",
            "term": 2,
            "end": "20:00",
            "activity": "Lecture",
            "section": "PSYC 350A 902",
            "interval": "",
            "days": [
                "Mon"
            ]
        }
    ];

    var lecture_events = new Array();
    var tutorial_events = new Array();
    var lab_events = new Array();


    //Fullcalendar Initialisation
    var calendar = $("#calendar").fullCalendar({
        droppable: true,
        minTime: "08:00:00",
        defaultView: 'month',
        theme: false,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        googleCalendarApiKey: 'AIzaSyDwfIYK0yFpamboP365yLvc1E4sT18HL7I',
        events: {
            googleCalendarId: 'umhhqhqcoctmrlqlll8hgtktmk@group.calendar.google.com',

        },
        dayClick: function (date, jsEvent, view) {

            alert('Clicked on: ' + date.format());

            alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

            alert('Current view: ' + view.name);

            // change the day's background color just for fun
            $(this).css('background-color', 'red');

        }
    });

    //Add button click event handler
    $("#add-button").popover().click(function () {
        var ddMenus = [];
        var ddItems = [[],[],[]];
        var deleteButtons = [];
        var ddButtons = [];

        var tag = $("#coursecode").val();
        tag = tag.trim().replace(/\s+/g, "");

        for(var i = 0; i < 3; i++){
            ddMenus[i] = $("<ul>").addClass("dropdown-menu");
            for (var j = 0; j < 2; j++){
                ddItems[i][j] = $("<li>").text("item"+j);
                ddMenus[i].append(ddItems[i][j]);
            }
        }

        for (var i = 0; i < 3; i++){
            deleteButtons[i] = $("<button>").button({
                icons: {primary: "ui-icon-close"},
                text: false
            }).click(function () {
                    $(this).parent().remove();
            });
        }

        function menuToggle(currentI){
            return function(){
                ddMenus[currentI].toggle();
            };
        }

        for(var i = 0; i < 3; i++){
            ddButtons[i] = $("<a>").button({
                icons: {primary: "ui-icon-triangle-1-s"},
                text: false
            }).addClass("dpb-butt").click(menuToggle(i));
        }

        //No course code entered
        if (tag.length == 0) {
            $(this).data('bs.popover').options.content = 'You have to enter a course code!';
            $(this).popover("show");
            $('body').click(function () {
                $("#add-button").popover('hide');
            });
        }

        //Course code entered has special characters
        else if (/^[a-zA-Z0-9- ]*$/.test(tag) == false) {
            $(this).data('bs.popover').options.content = 'Course code entered contains special characters!';
            $(this).popover("show");
            $('body').click(function () {
                $("#add-button").popover('hide');
            });
        }

        //Course code entered does not have a course number
        else if (/\d{3,}/.test(tag) == false) {
            $(this).data('bs.popover').options.content = 'Course code entered does not have a course number!';
            $(this).popover("show");
            $('body').click(function () {
                $("#add-button").popover('hide');
            });
        }

        //Course code entered does not have a vald department code
        else if (/^[a-zA-Z]{4}/.test(tag) == false) {
            $(this).data('bs.popover').options.content = 'Course code entered does not have a valid department code!';
            $(this).popover("show");
            $('body').click(function () {
                $("#add-button").popover('hide');
            });
        }

        //valid coursecode  format
        else {


            var department = tag.substr(0, 4).toUpperCase();
            var code = tag.substr(4).trim().toUpperCase();

            /*$.ajax({
             //type: "GET",
             url: "http://192.168.99.100:8083/departments/"+department+"/courses/"+code+"/sections",
             dataType: "json",
             crossDomain: true,
             success: function(data){
             validCode(data);
             }
             });*/

            //var validCode = function(courseinfo){
            //var obj = JSON.parse(course);
            //Valid Course Code


            for (var i = 0; i < course.length; i++) {
                if (course[i].activity == "Lecture") {
                    var lecture = new Object();
                    var start_time;
                    var end_time;
                    if (course[i].term == "2") {
                        start_time = "2015-09-17 " + course[i].start + ":00";
                        end_time = "2015-09-17 " + course[i].end + ":00";
                    } else {
                        start_time = "2015-09-14 " + course[i].start + ":00";
                        end_time = "2015-09-14 " + course[i].end + ":00";
                    }
                    lecture.title = course[i].section;
                    lecture.allDay = false;
                    lecture.start = start_time;
                    lecture.end = end_time;
                    lecture.editable = false;
                    //calendar.fullCalendar('renderEvent', lecture, true);
                    lecture_events.push(lecture);
                }
                else if (course[i].activity == "Tutorial") {

                }
                else if (course[i].activity == "Lab") {

                }
            }

            /*$("<li>").text(tag).draggable({
             zIndex: 999,
             revert: true,
             revertDuration: 0
             }).addClass(".active-tags").append(deleteButton).appendTo(".course-tags").data("event", {
             //REF  title: $.trim(obj.courses[0].course+" "+obj.courses[0].section),
             title: tag,
             stick: true,
             editable: true,
             start: '2015-08-25 09:00:00',
             end: '2015-08-25 12:00:00'
             });*/
            function tagName(index){
                switch(index){
                    case 0:
                        return tag+" Lec";
                    case 1:
                        return tag+" Tut";
                    case 2:
                        return tag+" Lab";
                }
            }

            for(var i = 0; i < 3; i++){
                $("<li>").text(tagName(i)).draggable({
                    zIndex: 999,
                    revert: true,
                    revertDuration: 0
                }).append(ddMenus[i]).append(ddButtons[i]).append(deleteButtons[i]).appendTo(".course-tags");
            }
            $("#coursecode").val("");
        }


        //Page doesn't go to top every time an element is added
        return false;
    });


    //TEST: manually added event object
    var cpsc310 = {
        id: '310',
        title: 'CPSC 310 Lecture',
        start: '2015-08-24 09:00:00',
        end: '2015-08-24 11:00:00',
        allDay: false,

        location: 'DMP 110',
        editable: true
    };

    var psyc350a = {
        id: '313',
        title: course[0].section,
        start: "2015-09-14 " + course[0].start + ":00",
        end: "2015-09-14 " + course[0].end + ":00",
        allDay: false,
        editable: true
    };


    calendar.fullCalendar('renderEvent', cpsc310, true);
    //calendar.fullCalendar('renderEvent', psyc350a, true);
    //calendar.fullCalendar('addEventSource', lecture_events);
    //calendar.fullCalendar( 'rerenderEvents' )

    /*function eventsRender(events){
     for (var i =0; i < events.length; i++){
     calendar.fullCalendar('renderEvent', events[i], true);
     }
     }
     eventsRender(lecture_events);*/
};

//Function execute when HTML doc is loaded
$(document).ready(main);

/**
 * Created by Tiffy on 15-08-01.
 */
var main;

//Look for ** //UNCOMMENT THIS FOR AJAX!! ** for all sections to uncomment for ajax to work

main = function () {
    var course = [
        {
            "hasSection": true,
            "hasTutorial": false,
            "hasLaboratory": true,

            "sections1": ["CPSC 213 101"],
            "sections2": ["CPSC 213 203", "CPSC 213 204"],
            "tutorials1": [],
            "tutorials2": [],
            "labs1": ["CPSC 213 L1A", "CPSC 213 L1B", "CPSC 213 L1C", "CPSC 213 L1D", "CPSC 213 L1E", "CPSC 213 L1F"],
            "labs2": ["CPSC 213 L2A", "CPSC 213 L2B", "CPSC 213 L2C", "CPSC 213 L2H", "CPSC 213 L2J", "CPSC 213 L2K", "CPSC 213 L2M", "CPSC 213 L2N", "CPSC 213 L2P"],

            "sections_term1": [
                {
                    "status": "Full",
                    "start": "15:00",
                    "term": 1,
                    "end": "16:00",
                    "activity": "Lecture",
                    "section": "CPSC 213 101",
                    "interval": "",
                    "days": [
                        "Mon",
                        "Wed",
                        "Fri"
                    ]
                }],
            "sections_term2": [
                {
                    "status": "Full",
                    "start": "15:00",
                    "term": 2,
                    "end": "16:00",
                    "activity": "Lecture",
                    "section": "CPSC 213 203",
                    "interval": "",
                    "days": [
                        "Mon",
                        "Wed",
                        "Fri"
                    ]
                },
                {
                    "status": "Full",
                    "start": "9:00",
                    "term": 2,
                    "end": "10:00",
                    "activity": "Lecture",
                    "section": "CPSC 213 204",
                    "interval": "",
                    "days": [
                        "Mon",
                        "Wed",
                        "Fri"
                    ]
                }],
            "tutorials_term1": [],
            "tutorials_term2": [],
            "labs_term1": [
                {
                    "status": "",
                    "start": "16:00",
                    "term": 1,
                    "end": "17:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L1A",
                    "interval": "",
                    "days": [
                        "Tue"
                    ]
                },
                {
                    "status": "",
                    "start": "11:00",
                    "term": 1,
                    "end": "12:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L1B",
                    "interval": "",
                    "days": [
                        "Wed"
                    ]
                },
                {
                    "status": "",
                    "start": "10:00",
                    "term": 1,
                    "end": "11:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L1C",
                    "interval": "",
                    "days": [
                        "Wed"
                    ]
                },
                {
                    "status": "Full",
                    "start": "15:00",
                    "term": 1,
                    "end": "16:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L1D",
                    "interval": "",
                    "days": [
                        "Tue"
                    ]
                },
                {
                    "status": "Full",
                    "start": "11:30",
                    "term": 1,
                    "end": "12:30",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L1E",
                    "interval": "",
                    "days": [
                        "Tue"
                    ]
                },
                {
                    "status": "Full",
                    "start": "14:00",
                    "term": 1,
                    "end": "15:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L1F",
                    "interval": "",
                    "days": [
                        "Wed"
                    ]
                }],
            "labs_term2": [
                {
                    "status": "Full",
                    "start": "12:00",
                    "term": 2,
                    "end": "13:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2A",
                    "interval": "",
                    "days": [
                        "Mon"
                    ]
                },
                {
                    "status": "Full",
                    "start": "11:00",
                    "term": 2,
                    "end": "12:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2B",
                    "interval": "",
                    "days": [
                        "Mon"
                    ]
                },
                {
                    "status": "Full",
                    "start": "11:00",
                    "term": 2,
                    "end": "12:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2C",
                    "interval": "",
                    "days": [
                        "Tue"
                    ]
                },
                {
                    "status": "Full",
                    "start": "14:00",
                    "term": 2,
                    "end": "15:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2H",
                    "interval": "",
                    "days": [
                        "Mon"
                    ]
                },
                {
                    "status": "Full",
                    "start": "10:00",
                    "term": 2,
                    "end": "11:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2J",
                    "interval": "",
                    "days": [
                        "Wed"
                    ]
                },
                {
                    "status": "Full",
                    "start": "10:00",
                    "term": 2,
                    "end": "11:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2K",
                    "interval": "",
                    "days": [
                        "Mon"
                    ]
                },
                {
                    "status": "Full",
                    "start": "13:00",
                    "term": 2,
                    "end": "14:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2M",
                    "interval": "",
                    "days": [
                        "Mon"
                    ]
                },
                {
                    "status": "Full",
                    "start": "15:00",
                    "term": 2,
                    "end": "16:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2N",
                    "interval": "",
                    "days": [
                        "Tue"
                    ]
                },
                {
                    "status": "Full",
                    "start": "16:00",
                    "term": 2,
                    "end": "17:00",
                    "activity": "Laboratory",
                    "section": "CPSC 213 L2P",
                    "interval": "",
                    "days": [
                        "Tue"
                    ]
                }]
        }
    ];

    //var course; //UNCOMMENT THIS FOR AJAX!!


    //Term 1 Fullcalendar Initialisation
    var calendar_term1 = $("#calendar").fullCalendar({
        eventStartEditable: false,
        eventDurationEditable: false,
        droppable: true,
        minTime: "08:00:00",
        defaultView: "agendaWeek",
        firstDay: 1,
        weekends: false,
        theme: false,
        defaultDate: "2015-08-24",
        header: {
            left: "none",
            center: "none",
            right: "none"
        },
        columnFormat: {
            month: 'ddd',
            week: 'ddd',
            day: 'dddd M/d'
        },
        /*googleCalendarApiKey: 'AIzaSyDwfIYK0yFpamboP365yLvc1E4sT18HL7I',
         events: {
         googleCalendarId: 'umhhqhqcoctmrlqlll8hgtktmk@group.calendar.google.com',

         },*/
    });

    var calendar_term2 = $("#calendar2").fullCalendar({
        eventStartEditable: false,
        eventDurationEditable: false,
        droppable: true,
        minTime: "08:00:00",
        defaultView: "agendaWeek",
        firstDay: 1,
        weekends: false,
        theme: false,
        defaultDate: "2015-08-24",
        header: {
            left: "none",
            center: "none",
            right: "none"
        },
        columnFormat: {
            month: 'ddd',
            week: 'ddd',
            day: 'dddd M/d'
        },
        /*googleCalendarApiKey: 'AIzaSyDwfIYK0yFpamboP365yLvc1E4sT18HL7I',
         events: {
         googleCalendarId: 'umhhqhqcoctmrlqlll8hgtktmk@group.calendar.google.com',

         },*/
    });

    $('.fc-toolbar').remove();

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('#calendar').fullCalendar('render');
        $('#calendar2').fullCalendar('render');
    });
    //$('#switchTabs a:first').tab('show');

    //Add button click event handler
    $("#add-button").popover().click(function () {

        var tag = $("#coursecode").val();
        tag = tag.trim().replace(/\s+/g, "");

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

            //UNCOMMENT THIS FOR AJAX!!
            /*$.ajax({
             dataType: "json",
             type: "GET",
             url: "http://localhost:8080/backend/departments/" + department + "/courses/" + code + "/sections",
             success: function (data) {
             console.log(data);
             validCode(data);
             },
             error: function(xhr, ajaxOptions, exception){
             alert(xhr.responseText);
             alert(thrownError);
             }
             });

             var validCode = function (courseinfo) {
             course = courseinfo
             //course = JSON.parse(courseinfo);*/


            var numSection1 = course[0].sections_term1.length;
            var numTutorial1 = course[0].tutorials_term1.length;
            var numLaboratory1 = course[0].labs_term1.length;


            function createDropdownMenu() {
                return $("<ul>").addClass("dropdown-menu");
            }

            function createCheckBox() {
                return $('<input />', {
                    type: 'checkbox'
                }).addClass("dd-check-boxes");
            }

            function determineDay(day) {
                switch (day) {
                    case "Mon":
                        return "2015-08-24 ";
                    case "Tue":
                        return "2015-08-25 ";
                    case "Wed":
                        return "2015-08-26 ";
                    case "Thu":
                        return "2015-08-27 ";
                    case "Fri":
                        return "2015-08-28 ";
                }
            }


            function eventCreate(listOfEvents, current, indJ) {
                listOfEvents[indJ] = {
                    id: current.section,
                    title: current.section,
                    start: determineDay(current.days[indJ]) + current.start + ":00",
                    end: determineDay(current.days[indJ]) + current.end + ":00",
                    allDay: false,
                    editable: true
                };
            }

            function iterateCourse(index, identifier) {
                var array = [];
                if (identifier == "lecture") {
                    for (var j = 0; j < course[0].sections_term1[index].days.length; j++) {
                        eventCreate(array, course[0].sections_term1[index], j);
                    }
                    return array;
                } else if (identifier == "tutorial") {
                    for (var j = 0; j < course[0].tutorials_term1[index].days.length; j++) {
                        eventCreate(array, course[0].tutorials_term1[index], j);
                    }
                    return array;
                } else if (identifier == "laboratory") {
                    for (var j = 0; j < course[0].labs_term1[index].days.length; j++) {
                        eventCreate(array, course[0].labs_term1[index], j);
                    }
                    return array;
                }
            }

            function createItem(checkBox, tag, index, identifier) {
                return $("<li>").text(tag).addClass("dd-options").append(checkBox)
                    .data("event", iterateCourse(index, identifier));
            }

            function populateDropdownMenu(num, ddMenu, ddCB, ddItems, tags, identifier) {
                for (var i = 0; i < num; i++) {
                    ddCB[i] = createCheckBox();
                    ddItems[i] = createItem(ddCB[i], tags[i], i, identifier);
                    ddMenu.append(ddItems[i]);
                }
            }

            function createDeleteButton() {
                return $("<button>").button({
                    icons: {primary: "ui-icon-close"},
                    text: false,
                    type: "button"
                }).addClass("dd-delete-buttons");
            }

            function createToggleButton(ddMenu) {
                return $("<a>").button({
                    icons: {primary: "ui-icon-triangle-1-s"},
                    text: false
                }).addClass("dpb-butt").click(function () {
                    ddMenu.toggle()
                });
            }

            function createTag(tagName, ddMenu, toggleButton, deleteButton) {
                $("<li>").text(tagName).draggable({
                    zIndex: 999,
                    revert: true,
                    revertDuration: 0
                }).append(ddMenu).append(toggleButton).append(deleteButton).appendTo(".course-tags").addClass("course-tag");
            }


            if (course[0].hasSection == true) {
                var sectionCB = [];
                var sectionItems = [];
                var sectionDD = createDropdownMenu();
                populateDropdownMenu(numSection1, sectionDD, sectionCB, sectionItems, course[0].sections1, "lecture");
                var sectionDB = createDeleteButton();
                var sectionTB = createToggleButton(sectionDD);
                createTag(department + code + " Lec", sectionDD, sectionTB, sectionDB);
            }

            if (course[0].hasTutorial == true) {
                var tutorialCB = [];
                var tutorialItems = [];
                var tutorialDD = createDropdownMenu();
                populateDropdownMenu(numTutorial1, tutorialDD, tutorialCB, tutorialItems, course[0].tutorials1, "tutorial");
                var tutorialDB = createDeleteButton();
                var tutorialTB = createToggleButton(tutorialDD);
                createTag(department + code + " Tut", tutorialDD, tutorialTB, tutorialDB);
            }

            if (course[0].hasLaboratory == true) {
                var laboratoryCB = [];
                var laboratoryItems = [];
                var laboratoryDD = createDropdownMenu();
                populateDropdownMenu(numLaboratory1, laboratoryDD, laboratoryCB, laboratoryItems, course[0].labs1, "laboratory");
                var laboratoryDB = createDeleteButton();
                var laboratoryTB = createToggleButton(laboratoryDD);
                createTag(department + code + " Lab", laboratoryDD, laboratoryTB, laboratoryDB);
            }

            $("#coursecode").val("");
        }
        //} //UNCOMMENT THIS FOR AJAX!!
        //Page doesn't go to top every time an element is added
        return false;
    });

    function eventsRender(events) {
        for (var i = 0; i < events.length; i++) {
            calendar_term1.fullCalendar('renderEvent', events[i], true);
        }
    }


    $(".course-tags")
        .on("click", ".dd-delete-buttons", function () {
            $(this).parent().find("li").each(function(index){
                //alert(index+": "+$(this).text())});
                //alert(index+": "+$(this).data("event")[0].id)});
                calendar_term1.fullCalendar("removeEvents",$(this).data("event")[0].id)});
            $(this).closest(".course-tag").remove();
            return false;
        })
        .on("click", ".dd-check-boxes", function () {
            if ($(".dd-check-boxes").is(":checked") && !($(this).hasClass("checked-box"))) {
                $(this).addClass("checked-box");
                eventsRender($(this).parent().data("event"));
            } else if ($(".dd-check-boxes").not(":checked") && $(this).hasClass("checked-box")) {
                $(this).removeClass("checked-box");
                calendar_term1.fullCalendar("removeEvents", $(this).parent().data("event")[0].id);
            }
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

    var cpsc313 = {
        id: '313',
        title: 'CPSC 313 Lecture',
        start: '2015-08-26 09:00:00',
        end: '2015-08-26 11:00:00',
        allDay: false,

        location: 'DMP 110',
        editable: true
    };

    calendar_term1.fullCalendar('renderEvent', cpsc310, true);
    calendar_term2.fullCalendar('renderEvent', cpsc313, true);
};

//Function execute when HTML doc is loaded
$(document).ready(main);

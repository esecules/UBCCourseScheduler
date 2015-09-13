/**
 * Created by Tiffy on 15-08-01.
 */
var main;

//Look for ** //UNCOMMENT THIS FOR AJAX!! ** for all sections to uncomment for ajax to work

main = function () {
    //Sample JSON data for functions testing
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
        //No header display
        header: {
            left: "none",
            center: "none",
            right: "none"
        },
        //Restrict column format to just showing day of the week
        columnFormat: {
            month: 'ddd',
            week: 'ddd',
            day: 'dddd M/d'
        }
    });

    //Term 2 Fullcalendar Initialisation
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
        //No header display
        header: {
            left: "none",
            center: "none",
            right: "none"
        },
        //Restrict column format to just showing day of the week
        columnFormat: {
            month: 'ddd',
            week: 'ddd',
            day: 'dddd M/d'
        }
    });

    $('.fc-toolbar').remove();

    var activeTab;

    //Initializes first tab to show
    $(function(){
        $("#switchTabs a:first").tab('show');
    });

    //Renders Fullcalendar onto the tab
    //stores active tab in activeTab
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('#calendar').fullCalendar('render');
        $('#calendar2').fullCalendar('render');
        activeTab = $(".tabbable li.active").attr("id");
        //$("#idDisplay").text(activeTab);
    });


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

        //valid coursecode format
        else {

            //takes user input and get departmental code
            var department = tag.substr(0, 4).toUpperCase();

            //takes user input and get course code
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

            var numSection2 = course[0].sections_term2.length;
            var numTutorial2 = course[0].tutorials_term2.length;
            var numLaboratory2 = course[0].labs_term2.length;

            //create dropdown menu and returns newly created dropdown menu
            function createDropdownMenu() {
                return $("<ul>").addClass("dropdown-menu");
            }

            //create a single checkbox and returns newly created checkbox
            function createCheckBox() {
                return $('<input />', {
                    type: 'checkbox'
                }).addClass("dd-check-boxes");
            }

            //A hack to put the respective weekly day
            //to the limited view Fullcalendar for scheduling purposes
            //function determines the respective date on calendar limited
            //to the week of 8-24-2015 to 8-28-2015
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

            //create an individual Event
            //puts newly created Event into a given position of a list of weekly Events
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

            //creates a list of weekly recurring Events for a specified lecture/tutorial/lab section
            //returns newly created weekly recurring Events
            function iterateCourse(index, identifier, term) {
                var array = [];
                if(term == 1){
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
                } else if(term == 2){
                    if (identifier == "lecture") {
                        for (var j = 0; j < course[0].sections_term2[index].days.length; j++) {
                            eventCreate(array, course[0].sections_term2[index], j);
                        }
                        return array;
                    } else if (identifier == "tutorial") {
                        for (var j = 0; j < course[0].tutorials_term2[index].days.length; j++) {
                            eventCreate(array, course[0].tutorials_term2[index], j);
                        }
                        return array;
                    } else if (identifier == "laboratory") {
                        for (var j = 0; j < course[0].labs_term2[index].days.length; j++) {
                            eventCreate(array, course[0].labs_term2[index], j);
                        }
                        return array;
                    }
                }
            }

            //creates an item of the dropdown menu
            //item is an Event object (lecture/lab/tutorial happens onece/week) or
            //a list of Event objects (lecture/lab/tutorial happens more than onece/week)
            function createItem(checkBox, tag, index, identifier, term) {
                return $("<li>").text(tag).addClass("dd-options").append(checkBox)
                    .data("event", iterateCourse(index, identifier, term));
            }

            //function fills up the dropdown menu with items
            function populateDropdownMenu(num, ddMenu, ddCB, ddItems, tags, identifier, term) {
                for (var i = 0; i < num ; i++) {
                    ddCB[i] = createCheckBox();
                    ddItems[i] = createItem(ddCB[i], tags[i], i, identifier, term);
                    ddMenu.append(ddItems[i]);
                }
            }

            //creates a delete button and returns newly created delete button
            function createDeleteButton() {
                return $("<button>").button({
                    icons: {primary: "ui-icon-close"},
                    text: false,
                    type: "button"
                }).addClass("dd-delete-buttons");
            }

            //creates a delete button, attaches toggle button with a click event to a give dropdown menu
            //toggle button toggles dropdown menu
            //returns newly created delete button
            function createToggleButton(ddMenu) {
                return $("<a>").button({
                    icons: {primary: "ui-icon-triangle-1-s"},
                    text: false
                }).addClass("dpb-butt").click(function () {
                    ddMenu.toggle()
                });
            }

            //creates a course tag with given tag name, dropdown menu, toggle button, delete button
            //and term
            function createTag(tagName, ddMenu, toggleButton, deleteButton, term) {
                if(term == 1){
                    $("<li>").text(tagName).draggable({
                        zIndex: 999,
                        revert: true,
                        revertDuration: 0
                    }).append(ddMenu).append(toggleButton).append(deleteButton).appendTo(".course-tags")
                        .addClass("course-tag").addClass("term-1");
                } else if(term == 2){
                    $("<li>").text(tagName).draggable({
                        zIndex: 999,
                        revert: true,
                        revertDuration: 0
                    }).append(ddMenu).append(toggleButton).append(deleteButton).appendTo(".course-tags")
                        .addClass("course-tag").addClass("term-2");
                }
            }

            //Legend:
            //sectionCB == a list of lecture section check boxes
            //sectionitems == a list of lecture events under the same lecture id
            //sectionDD == lecture section dropdown menu
            //sectionDB == delete button for lecture tag
            //sectionTB == toggle button for lecture tag's dropdown menu
            //...

            //if term1 calendar is the active tab shown
            if(activeTab == "term1"){
                alert("TERM 1!!!!!");
                if (course[0].hasSection == true) {
                    var sectionCB = [];
                    var sectionItems = [];
                    var sectionDD = createDropdownMenu();
                    populateDropdownMenu(numSection1,sectionDD, sectionCB, sectionItems, course[0].sections1, "lecture", 1);
                    var sectionDB = createDeleteButton();
                    var sectionTB = createToggleButton(sectionDD);
                    createTag(department + code + " Lec", sectionDD, sectionTB, sectionDB, 1);
                }

                if (course[0].hasTutorial == true) {
                    var tutorialCB = [];
                    var tutorialItems = [];
                    var tutorialDD = createDropdownMenu();
                    populateDropdownMenu(numTutorial1,tutorialDD, tutorialCB, tutorialItems, course[0].tutorials1, "tutorial", 1);
                    var tutorialDB = createDeleteButton();
                    var tutorialTB = createToggleButton(tutorialDD);
                    createTag(department + code + " Tut", tutorialDD, tutorialTB, tutorialDB, 1);
                }

                if (course[0].hasLaboratory == true) {
                    var laboratoryCB = [];
                    var laboratoryItems = [];
                    var laboratoryDD = createDropdownMenu();
                    populateDropdownMenu(numLaboratory1,laboratoryDD, laboratoryCB, laboratoryItems, course[0].labs1, "laboratory", 1);
                    var laboratoryDB = createDeleteButton();
                    var laboratoryTB = createToggleButton(laboratoryDD);
                    createTag(department + code + " Lab", laboratoryDD, laboratoryTB, laboratoryDB, 1);
                }
            }
            //if term2 calendar is the active tab shown
            else if(activeTab == "term2"){
                alert("TERM 2!!!!!");
                if (course[0].hasSection == true) {
                    var sectionCB2 = [];
                    var sectionItems2 = [];
                    var sectionDD2 = createDropdownMenu();
                    populateDropdownMenu(numSection2,sectionDD2, sectionCB2, sectionItems2, course[0].sections2, "lecture", 2);
                    var sectionDB2 = createDeleteButton();
                    var sectionTB2 = createToggleButton(sectionDD2);
                    createTag(department + code + " Lec", sectionDD2, sectionTB2, sectionDB2, 2);
                }

                if (course[0].hasTutorial == true) {
                    var tutorialCB2 = [];
                    var tutorialItems2 = [];
                    var tutorialDD2 = createDropdownMenu();
                    populateDropdownMenu(numTutorial2,tutorialDD2, tutorialCB2, tutorialItems2, course[0].tutorials2, "tutorial", 2);
                    var tutorialDB2 = createDeleteButton();
                    var tutorialTB2 = createToggleButton(tutorialDD2);
                    createTag(department + code + " Tut", tutorialDD2, tutorialTB2, tutorialDB2, 2);
                }

                if (course[0].hasLaboratory == true) {
                    var laboratoryCB2 = [];
                    var laboratoryItems2 = [];
                    var laboratoryDD2 = createDropdownMenu();
                    populateDropdownMenu(numLaboratory2,laboratoryDD2, laboratoryCB2, laboratoryItems2, course[0].labs2, "laboratory", 2);
                    var laboratoryDB2 = createDeleteButton();
                    var laboratoryTB2 = createToggleButton(laboratoryDD2);
                    createTag(department + code + " Lab", laboratoryDD2, laboratoryTB2, laboratoryDB2, 2);
                }
            }

            //Clears input box for next user input
            $("#coursecode").val("");
        }
        //} //UNCOMMENT THIS FOR AJAX!!
        //Page doesn't go to top every time an element is added
        return false;
    });

    //Iteratively renders a list of events onto either term1 or term2 calendar,
    //according to identifier
    function eventsRender(events, identifier) {
        if(activeTab == "term1"){
            for (var i = 0; i < events.length; i++) {
                calendar_term1.fullCalendar('renderEvent', events[i], true);
            }
        } else if(activeTab == "term2"){
            for (var i = 0; i < events.length; i++) {
                calendar_term2.fullCalendar('renderEvent', events[i], true);
            }
        }
    }


    $(".course-tags")
        //click event when delete button on course tag is clicked
        //finds parent - the li element itself
        //and iteratively delete all child elements
        //remove all events on calendar with the same id as parent
        .on("click", ".dd-delete-buttons", function () {
            $(this).parent().find("li").each(function(index){
                if(activeTab == "term1"){
                    calendar_term1.fullCalendar("removeEvents",$(this).data("event")[0].id);
                } else if(activeTab == "term2"){
                    calendar_term2.fullCalendar("removeEvents",$(this).data("event")[0].id);
                }
            });
            $(this).closest(".course-tag").remove();
            return false;
        })
        //Renders event on calendar when item is checked, add class checked-box
        //Remove item when item is unchecked, removes class checked-box
        .on("click", ".dd-check-boxes", function () {
            if ($(".dd-check-boxes").is(":checked") && !($(this).hasClass("checked-box"))) {
                $(this).addClass("checked-box");
                eventsRender($(this).parent().data("event"),activeTab);
            } else if ($(".dd-check-boxes").not(":checked") && $(this).hasClass("checked-box")) {
                $(this).removeClass("checked-box");
                if(activeTab == "term1") {
                    calendar_term1.fullCalendar("removeEvents", $(this).parent().data("event")[0].id);
                } else if(activeTab == "term2"){
                    calendar_term2.fullCalendar("removeEvents", $(this).parent().data("event")[0].id);
                }
            }
        });



    //TEST: manually added event object
    /*var cpsc310 = {
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
    calendar_term2.fullCalendar('renderEvent', cpsc313, true);*/
};

//Function executes when HTML doc is loaded
$(document).ready(main);

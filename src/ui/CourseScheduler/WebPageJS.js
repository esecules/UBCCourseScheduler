/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {
    $(".course-input .btn").click(function(){
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
            $("<li>").text(tag).draggable().append(deleteButton).appendTo(".course-tags");
            $("#coursecode").val("");
        }
    });
}

$(document).ready(main);

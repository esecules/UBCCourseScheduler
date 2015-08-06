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
            })
            .addClass("to-remove");
        $("<li>").text(tag).draggable().append(deleteButton).appendTo(".course-tags");
    });



}

$(document).ready(main);

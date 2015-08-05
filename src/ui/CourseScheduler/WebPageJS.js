/**
 * Created by Tiffy on 15-08-01.
 */
var main;

main = function () {


    $(function(){
        $("#draggable").draggable({snap: true});
    });
}

$(document).ready(main);

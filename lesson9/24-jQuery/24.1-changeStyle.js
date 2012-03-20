/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 17.11.11
 * Time: 16:03
 * To change this template use File | Settings | File Templates.
 */

function changeCss() {
    $(".myClass").css({
        "border":"3px solid red",
        "background": "green"
        });
    $('div').removeClass('new');
}

$(document).ready(function(){
    changeCss();
  });

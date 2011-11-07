/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 15:21
 * To change this template use File | Settings | File Templates.
 */

var button1up = new Image,
    button1down = new Image;
    button1up.src = "../images/1.jpg";
    button1down.src = "../images/2.jpg";
function MouseOverRoutine(ButtonName) {
    if (ButtonName == "button1") {
        document.button1.src = button1down.src;
    }
}

function MouseOutRoutine(ButtonName) {
    if (ButtonName == "button1") {
        document.button1.src = button1up.src;
    }
}

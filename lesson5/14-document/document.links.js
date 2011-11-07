/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 14:15
 * To change this template use File | Settings | File Templates.
 */

var target = document.getElementById("txtPlace"),
    txt;

try {
    txt = document.anchors.length + " - Текст первой ссылки:    " + document.anchors[0].innerHTML;
    target.innerHTML = txt;
} catch(err) {
//    alert(err.message);
}

alert('hello');
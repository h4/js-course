/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 14:39
 * To change this template use File | Settings | File Templates.
 */

function showHistory () {
    var hlen = history.length;
    document.write("До этой страницы вы посетили " + hlen + " страниц.")
}

function goBack() {
    document.write('Идём назад');
    window.setTimeout(function () {history.back();}, 3000);
}
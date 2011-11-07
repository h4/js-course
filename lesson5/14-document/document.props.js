/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 13:58
 * To change this template use File | Settings | File Templates.
 */

var str = {
        lastModified: "Дата последнего изменения",
        title: "Заголовок документа",
        domain: "Домен документа"
    },
    delimeter = " – ",
    eol = "<br>";

function printProp(prop) {
    document.write(str[prop].concat(delimeter).bold() + document[prop] + eol);
}


printProp("lastModified");
printProp("title");
printProp("domain");


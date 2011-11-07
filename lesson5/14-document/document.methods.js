/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 14:06
 * To change this template use File | Settings | File Templates.
 */

function createNewDoc()   {
    var newDoc=document.open("text/html","replace"),
        txt="<html><body>Открыли и написали!</body></html>";
    newDoc.write(txt);
    newDoc.close();
}

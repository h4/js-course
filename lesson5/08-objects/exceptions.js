/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 13:42
 * To change this template use File | Settings | File Templates.
 */

function message() {
    try {
        addalert("Добро пожаловать!");
    } catch(err) {
        var txt = "Ошибка на странице. \n\n",
            message = err.description ? err.description : err.message;
        txt += "Описание ошибки: " + message + "\n\n";
        txt += "Щелкните по кнопке ОК, чтобы продолжить.";

        alert(txt);
    }
}

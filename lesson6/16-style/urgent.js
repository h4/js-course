/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 07.11.11
 * Time: 16:59
 * To change this template use File | Settings | File Templates.
 */

var e = document.getElementById("urgent");
var colors = ["white", "yellow", "orange", "red"];
var nextColor = 0;
setInterval("e.style.backgroundColor=colors[nextColor++%colors.length];", 500);

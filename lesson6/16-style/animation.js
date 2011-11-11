/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 07.11.11
 * Time: 16:58
 * To change this template use File | Settings | File Templates.
 */

function moveTxt(){
  elem = document.getElementById("ani1");
  if (parseInt(elem.style.left) <200)
  {
    elem.style.left = parseInt(elem.style.left) + 2 + "px";
    setTimeout("moveTxt()", 50);
   }
}

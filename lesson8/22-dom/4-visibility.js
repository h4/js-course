/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 14.11.11
 * Time: 0:37
 * To change this template use File | Settings | File Templates.
 */

function f(){
  var imgs = document.getElementsByTagName("img");
  for (i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if(img.width == 50 )
        img.style.visibility = 'hidden';
   }
}

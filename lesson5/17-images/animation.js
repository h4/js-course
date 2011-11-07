/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 15:25
 * To change this template use File | Settings | File Templates.
 */


var aniframes = new Array(10),
    frame = 0,
    timeout_id = null;
for (var i = 0; i < 10; i++) {
    aniframes[i] = new Image();
    aniframes[i].src = "../images/trail" + i + ".gif";
}
function animate() {
    document.getElementById('animation').src = aniframes[frame].src;
    frame = (frame + 1) % 10;
    timeout_id = setTimeout("animate()", 250);
}

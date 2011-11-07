/**
 * Created by JetBrains WebStorm.
 * User: h4
 * Date: 03.11.11
 * Time: 14:28
 * To change this template use File | Settings | File Templates.
 */

var str = [];

str.push(location.href);
str.push(location.protocol);
str.push(location.hostname);
str.push(location.host);
str.push(location.pathname);
str.push(location.hash);

document.write('<ol>');
for (var i in str) {
    document.write('<li>' + str[i]);
}
document.write('</ol>');
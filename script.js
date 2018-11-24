if (window.XMLHttpRequest)
{ // для IE7+, Firefox, Chrome
  xmlhttp = new XMLHttpRequest();}
else
{ // для IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


xmlhttp.open("GET","storage.xml",false);
xmlhttp.send();

xmlDoc = xmlhttp.responseXML;

document.write("<table class=table>");
for( i=1;i<101;i++)
{
    document.write("<tr>");
    document.write("<td class=num>"+ i +"</td><td><span class=name onclick=newPage("+i+")></span></td><td class=author></td><td class=year></td>");
    document.write("</tr>");
}
document.write("</table>");

for( i=0;i<100;i++)
{
  document.getElementsByClassName("name")[i].innerHTML = xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
  document.getElementsByClassName("author")[i].innerHTML = xmlDoc.getElementsByTagName("author")[i].childNodes[0].nodeValue;
  document.getElementsByClassName("year")[i].innerHTML = xmlDoc.getElementsByTagName("year")[i].childNodes[0].nodeValue;
}
function newPage(num) {

    var newWin = window.open(book.html, winName);
  }

  xmlhttp = new XMLHttpRequest();
  // для IE6, IE5
  xmlhttp.open("GET","storage.xml",false);
  xmlhttp.overrideMimeType("text/xml");
  xmlhttp.send();

  xmlDoc = xmlhttp.responseXML;

  document.write("<table class=table>");
  for( i=1;i<101;i++)
  {
      document.write("<tr>");
      document.write("<td class=num>"+ i +"</td><td><span class=name onclick=newPage()></span></td><td class=author></td><td class=year></td>");
      document.write("</tr>");
  }
  document.write("</table>");

  for( i=0;i<100;i++)
  {
      document.getElementsByClassName("name")[i].innerHTML = xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
      document.getElementsByClassName("author")[i].innerHTML = xmlDoc.getElementsByTagName("author")[i].childNodes[0].nodeValue;
      document.getElementsByClassName("year")[i].innerHTML = xmlDoc.getElementsByTagName("year")[i].childNodes[0].nodeValue;
  }

  if (window.XMLHttpRequest)
  { // для IE7+, Firefox, Chrome
    xmlhttp = new XMLHttpRequest();}
  else
  { // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET","content.xml",false);
  xmlhttp.send();

  xmlDoc = xmlhttp.responseXML;

  function newPage() {
    page = window.open("test.html");
    body = page.document.body;
    var div = page.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
    body.insertBefore(div, body.firstChild);
    // вставить первым элементом в body нового окна

    }

for( i=0;i<5;i++)
{
    document.write("<div class=book>");
     document.write("<img class=img >");
        document.write("<div class=desc>");
          document.write("<h3><span class=sp></span></h3>");
          document.write("<span class=author></span>");
          document.write("<p class=des></p>");
        document.write("</div>");
    document.write("</div>");
}


  xmlhttp = new XMLHttpRequest();
  // для IE6, IE5
  xmlhttp.open("GET","content.xml",false);
  xmlhttp.overrideMimeType("text/xml");
  xmlhttp.send();


  xmlDoc = xmlhttp.responseXML;
  for( i=0;i<5;i++)
  {
      var im = xmlDoc.getElementsByTagName("picture")[i].childNodes[0].nodeValue;
      document.getElementsByClassName("img")[i].setAttribute("src", im);
      document.getElementsByClassName("sp")[i].innerHTML = xmlDoc.getElementsByTagName("header")[i].childNodes[0].nodeValue;
      document.getElementsByClassName("author")[i].innerHTML = xmlDoc.getElementsByTagName("author")[i].childNodes[0].nodeValue;
      document.getElementsByClassName("des")[i].innerHTML = xmlDoc.getElementsByTagName("desc")[i].childNodes[0].nodeValue;
  }

  function clearPage()
  {
    for( i=0;i<5;i++)
    {
        document.getElementsByClassName("img")[i].setAttribute("src", "");
        document.getElementsByClassName("sp")[i].innerHTML = "";
        document.getElementsByClassName("author")[i].innerHTML = "";
        document.getElementsByClassName("des")[i].innerHTML = "";
  
    }
    document.getElementsByClassName("content")[0].style.height="100%";

  }
function search(e) 
{
    if (e.keyCode == 13) {
        var tb = document.getElementById("search");
    
        //clearPage();
        // findMatch(tb.value);
        return false;
    }
}
function findMatch(searchSting) 
{
    document.write("<div class=books>");
    /*for( i=0;i<6;i++)
    {  
        console.log(i);
        //document.write(i);
        let author = searchSting==xmlDoc.getElementsByTagName("author")[i].childNodes[0].nodeValue;
        let title = searchSting==xmlDoc.getElementsByTagName("header")[i].childNodes[0].nodeValue;
        if(searchSting==title||searchSting==author)
        {
            document.write("<div class=book>");
            document.write("<img class=img >");
               document.write("<div class=desc>");
                 document.write("<h3><span class=sp></span></h3>");
                 document.write("<span class=author></span>");
                 document.write("<p class=des></p>");
               document.write("</div>");
           document.write("</div>");
           var im = xmlDoc.getElementsByTagName("picture")[i].childNodes[0].nodeValue;
           document.getElementsByClassName("img")[i].setAttribute("src", im);
           document.getElementsByClassName("sp")[i].innerHTML = xmlDoc.getElementsByTagName("header")[i].childNodes[0].nodeValue;
           document.getElementsByClassName("author")[i].innerHTML = xmlDoc.getElementsByTagName("author")[i].childNodes[0].nodeValue;
           document.getElementsByClassName("des")[i].innerHTML = xmlDoc.getElementsByTagName("desc")[i].childNodes[0].nodeValue;
     
        }
    }*/
    document.write("</div>");

}

bv_ShowProperties();
function bv_ShowProperties()
{var ObjName = (location.href.split("?").length>1)? location.href.split("?")[1]: "top", Length = 1000
 var Layers = false, IDs = false, Nums = false;
 var Html = location.href.split("?")[0];
 Html = Html.split("/");
 Html = Html[Html.length - 1];
 var AncorObjName = ObjName.replace(/(.+)(\.[^\.\[]+$)|(.+)(\[[^\[]\]+$)/, "<a href='" + Html + "?$1$3'>$1$3</a>$2$4");
 eval("var Obj=" + ObjName);
 var res = "";
 function SubShow(p)
 {var NoContains=false;
  var NewObj = (NoContains)? null: Obj[p];
  var self = (Obj === NewObj);
  var NewObjName;
  if (/^\d+$/.test(p)) NewObjName = ObjName + "[" + p + "]"
  else if (/^\D(\w+)$/.test(p)) NewObjName = ObjName + "." + p
  else NewObjName = ObjName + '["' + p + '"]';
  res += "<tr><td>"
      + ((((typeof(NewObj) == "object") || (typeof(NewObj) == "function")) && (NewObj != null))?"<a href='" + Html + "?" + NewObjName + "'>" + p + "&nbsp;</a>" : p) + "</td>"
      + "</td>"
      + "<td>" + typeof(NewObj) + "</td>"
      + "<td align='center'>" + ((self)?"X":"&nbsp;") + "</td>"
      + "<td>";
  var Value = "";
  if (typeof(NewObj) == "number" || typeof(NewObj) == "string" || typeof(NewObj) == "boolean")
   Value = "<input type=button value='    " + NewObj + "    ' onclick='" + NewObjName + "=window.prompt(" + '"' + NewObjName.replace(/"/g,'" + String.fromCharCode(' + '"'.charCodeAt(0) + ') + "') + ':", ' + NewObjName + ");this.value=" + NewObjName + "'>"
  else
   if (typeof(NewObj) == "function")
    Value = "<nobr>" + NewObj.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\"/g, '"').replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") + "</nobr>"
   else
    Value = NewObj;
  if (typeof(NewObj) != "object")
   res += Value;
  else
   if(NewObj == null)
    res += null;
/*  else
   res += (Value.toString);*/
  res += "&nbsp;";
  res += "</td></tr>"
 };
 res += "<style>a{color:darkblue;font-weight:bold}</style>"
     + "<table width='100%' border=2 bgcolor=mistyrose><tr align='center'><td>Объект</td><td>Тип</td><td>Значение</td></tr><tr align='center'><td>"
     + AncorObjName
     + "&nbsp;</td><td>"
     + typeof(Obj)
     + "&nbsp;</td><td>";
 if (typeof(Obj) != "object")
  res += Obj;
/* else
  res += Obj;*/
 res += "&nbsp;</td></tr></table><br><form><table width='100%' border=2 bgcolor=mistyrose><tr align='center' valign='center'><td>Поле</td><td>Тип</td><td>Ссылка на себя</td><td>Значение</td></tr>";
 for(var p in Obj)
 {if (p == "length" && typeof(Obj[p]) == "number") Length=Obj[p];
  if (/^\d/.test(p))
  {
   Nums = true
   if (eval(p) > Length) break;
  };
  if (p == "layers") Layers = true;
  if (p == "ids") IDs = true;
  SubShow(p);
 };
 if (Obj)
 {
  if (! Layers && typeof(Obj.layers) != "undefined") SubShow("layers");
  if (! IDs && typeof(Obj.ids) != "undefined") SubShow("ids");
  if (! Nums && typeof(Obj.length) == "number") for(var i = 0; i < Obj.lenght; i++) ShowSub(i)
 };
 res += "</table></form><br><div align='right'><font size=-1><a href='mailto:bv7@tut.by'>Web Master: bv7@tut.by</a></font></div>";
 document.write(res)
}
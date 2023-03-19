function bv7lnk(tim)
{	return "bv7"+tim.getFullYear()+tim.getMonth()+tim.getDate();
};
function bv7()
{	var m="",m1="",rs=new Array()
	for(var i=0;i<bv7.arguments.length;i++)
	{	var p=bv7.arguments[i].split(String.fromCharCode(9)).slice(1);
		rs[i]=new Object();
		if(p[3]=="-")rs[i].tim=new Date(p[0]?p[0]:rs[i-1].tim.getFullYear(),p[1]?p[1]-1:rs[i-1].tim.getMonth(),p[2]?p[2]:rs[i-1].tim.getDate());
		else rs[i].tim=new Date(p[0]?p[0]:rs[i-1].tim.getFullYear(),p[1]?p[1]-1:rs[i-1].tim.getMonth(),p[2]?p[2]:rs[i-1].tim.getDate(),p[3]?p[3]:rs[i-1].tim.getHours(),p[4]?p[4]:rs[i-1].tim.getMinutes());
		rs[i].nam=p[6]?p[6].replace(/^"|"$/g,"").replace(/""/g,'"'):rs[i-1].nam;
		if(p[5])rs[i].nam=rs[i].nam.link("page05.html#bv7"+p[5]);
		if(p[7]=="-")rs[i].ref="";
		else rs[i].ref=p[7]?p[7].replace(/^"|"$/g,"").replace(/""/g,'"'):rs[i-1].ref;
		rs[i].rem="";
		if(p[8]&&(p[8]!="-"))rs[i].rem+=p[8]+"<br>";
		if(p[9]&&(p[9]!="-"))rs[i].rem+="<font color='red'>"+p[9]+"</font><br>";
		if(p[10]||p[11]||p[12]||p[13])
		{	rs[i].rem+="<nobr><a href='page09.html'>";
			if(p[10])rs[i].rem+="<span class='prc1'>"+p[10]+"</span>";
			if(p[11])rs[i].rem+=" <span class='prc2'>"+p[11]+"</span>";
			if(p[12])rs[i].rem+=" <span class='prc3'>"+p[12]+"</span>";
			if(p[13])rs[i].rem+=" <span class='prc4'>"+p[13]+"</span>";
			rs[i].rem+="</a></nobr>";
		};
		if(!rs[i].rem&&p[8])rs[i].rem=rs[i-1].rem;
	};
	m+="<table width=100%><tr valign='top'>";
	for(i=0;i<rs.length;i++)with(rs[i])
	{
		var newM=i==0||rs[i-1].tim.getMonth()!=tim.getMonth()||rs[i-1].tim.getYear()!=tim.getYear();
		if(newM)
		{	m+="<td><table cellspacing=0><caption class='calh'>"+(new Array("Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"))[tim.getMonth()]+" "+tim.getFullYear()+" г.</caption><thead><tr>";
			for(var dow=0;dow<7;dow++)m+="<td class='calh'>&nbsp;"+(new Array("Пн","Вт","Ср","Чт","Пт","Сб","Вс"))[dow]+"&nbsp;</td>";
			m+="</tr></thead><tbody>";
			var dF=new Date(tim.getFullYear(),tim.getMonth(),1);
			var dom=1-(dF.getDay()+6)%7;
			var domL=new Date(dF.getFullYear(),dF.getMonth()+1,1);
			domL.setDate(0);
			domL=domL.getDate();
			var dom=(dF.getDay()+6)%7;
			var wc=Math.ceil((dom+domL)/7);
			dom=1-dom;
			for(var w=0;w<wc;w++)
			{	m+="<tr>";
				for(var dow=0;dow<7;dow++,dom++)
				{	m+="<td class='calb'>";
					if(dom>0&&dom<=domL)
					{	s=dom.toString();
						for(var j=i;j<rs.length&&rs[j].tim.getFullYear()==dF.getFullYear()&&rs[j].tim.getMonth()==dF.getMonth();j++)with(rs[j])if(tim.getDate()==dom)
						{
							if(j==0||nam!=rs[j-1].nam||ref!=rs[j-1].ref||rem!=rs[j-1].rem)var a="page02.html#"+bv7lnk(tim);
							s=s.link(a);
							break;
						};
						m+=s;
					};
					m+="</td>";
				};
				m+="<td></td></tr>";
			};
			m+="</tbody></table></td>";
		};
		if(i==0||nam!=rs[i-1].nam||ref!=rs[i-1].ref||rem!=rs[i-1].rem)
		{
			if(newM||rs[i-1].tim.getDate()!=tim.getDate())m1+="".anchor(bv7lnk(tim));
			m1+="<hr><table width=100%><tr valign=center><td class='tim'>";
			for(j=i;j<rs.length&&nam==rs[j].nam&&ref==rs[j].ref&&rem==rs[j].rem;j++)with(rs[j])
			{
				if(j==i||tim.getDate()!=rs[j-1].tim.getDate()||tim.getMonth()!=rs[j-1].tim.getMonth()||tim.getFullYear()!=rs[j-1].tim.getFullYear())m1+=tim.getDate()+"."+(tim.getMonth()<9?"0":"")+(tim.getMonth()+1)+",&nbsp;"+(new Array("вс","пн","вт","ср","чт","пт","сб"))[tim.getDay()]+"<br>";
				if((j==rs.length-1||tim.getHours()!=rs[j+1].tim.getHours()||tim.getMinutes()!=rs[j+1].tim.getMinutes()||nam!=rs[j+1].nam||ref!=rs[j+1].ref||rem!=rs[j+1].rem)&&(tim.getHours()||tim.getMinutes()))m1+="в&nbsp;"+tim.getHours()+"."+(tim.getMinutes()<10?"0":"")+tim.getMinutes()+"<br>";
			};
			m1=m1.replace(/<br>$/i,"");
			m1+="</td><td class='nam'><br>"+nam+"<br><div class='ref'>"+ref+"</div><br></td><td class='rem'>"+rem+"</td></tr></table>";
		};
	};
	m+="</tr></table><br><br>"+m1;
	document.write(m);
};
var cont  = document.getElementById("container");
var p = document.getElementById ("p");
var cont1 = document.getElementById ("content");
var text = "Huh?";
var text1= "Website is building?"
var text2 = "Oh I forgot. At now I building website";
var text3 = "Nie wierzysz mi?";
var text4 = "Ok, to ci udowodnie to";
var text5= "First, change a background";
var a1_text = new Array (text1, text2, text3, text4, text5);
var x=0;
var body = document.body;
var tag_body = document.getElementsByTagName('body')[0];
var cont_text= "Website is Building...";
var a=1;
var c_line = document.createElement("div");
var div = document.createElement("div");
var c_ul = document.createElement("ul");
var c_li = document.createElement("li");
var c_li1 = document.createElement("li");
var c_li2 = document.createElement("li");
var c_li3 = document.createElement("li");
var c_li4 = document.createElement("li");
var c_li5 = document.createElement("li");
var c_li6 = document.createElement("li");
var c_p_1 = document.createElement ("p");
var c_p_2 = document.createElement ("p");
c_line.id = 'line';
div.id = "wrap";
c_p_1.id = "cv_text";
c_p_2.id = "cv_text_2";
c_ul.id = "f_ul";
c_li.id ="c_li";

c_li1.id = "c_li1";
c_li2.id = "c_li2";
c_li3.id = "c_li3";
c_li4.id = "c_li4";
c_li5.id = "c_li5";

c_p_1.classList.add ("cv_font");
c_p_2.classList.add ("cv_font");
var arr_cv_text = new Array
('<span class="span">C</span>',
'<span class="span">C</span' + 'u',
'<span class="span">C</span>' + 'ur',
'<span class="span">C</span>' +'url',
'<span class="span">C</span>' + 'urli',
'<span class="span">C</span>' + 'urlic',
'<span class="span">C</span>' + 'urlicu',
'<span class="span">C</span>' + 'urlicul',
'<span class="span">C</span>' + 'urliculu',
'<span class="span">C</span>' + 'urliculum');
var arr_cv_text_2 = new Array
('<span class="span">V</span>',
'<span class="span">V</span>' + 'i',
'<span class="span">V</span>' + 'it',
'<span class="span">V</span>' + 'ita',	
'<span class="span">V</span>' + 'itae');
var arr_id = new Array
(
"Data Personal",
"Name: Patrick", 
"First name: Maternicki",
"Born: 03.02.1992r. ",
"Country:Poland",
"Place:Straszyn",
"zip code: 83-010");
var arr_length = new Array
(
arr_id[0].length,
arr_id[1].length,
arr_id[2].length,
arr_id[3].length,
arr_id[4].length,
arr_id[5].length,
arr_id[6].length );
var b = 0;
var c = 0;
var d=0;
var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;
var d6=0;
function v1_loadWeb ()
{
cont1.classList.remove ("o_content");

}
function v2_loadWeb ()
{
	if (x == 5)
	{
	return x;
	}
cont1.innerHTML = a1_text[x];
x++;
	

}

function v3_loadWeb ()
{
body.classList.add ("ac_body");
body.classList.add ("c_body");
}

function v4_loadWeb ()
{
cont1.innerHTML = "At now, change a color text";
}

function v5_loadWeb ()
{
cont.classList.add ("t_white")
}
function v6_loadWeb ()
{
cont1.innerHTML = "Resize container";
}
function v7_loadWeb ()
{
cont.classList.add ("c_body");
body.classList.remove ("c_body");
}

function v8_loadWeb ()
{
cont.classList.add ("ac_container");
}

function v9_loadWeb ()
{
cont.classList.add ("m_container");
}

function v10_loadWeb ()
{
cont1.innerHTML = "Delete text"
}

function v11_loadWeb ()
{
if (a == 23)
{
return a;
}
p.innerHTML = cont_text.substr(0,cont_text.length-a);
a++;
setInterval(v11_loadWeb , 100);
}

function v12_loadWeb ()
{
cont1.innerHTML = "That better";
}

function v13_loadWeb ()
{
cont1.innerHTML = "I don't know what I say.";
}

function v14_loadWeb ()
{
cont.appendChild(c_line);
c_line.classList.add ("line");
c_line.classList.add ("s_line");
c_line.classList.add ("ah_line");
}

function v15_loadWeb ()
{
c_line.classList.remove ("s_line");
c_line.classList.add ("af_line");
var line = document.getElementById("line");
}

function v16_loadWeb ()
{
line.appendChild(c_p_1);
line.appendChild(c_p_2);


}

function v17_loadWeb ()
{
var cv_text = document.getElementById("cv_text");

	if ( b == 10)
{
		return b;
}
cv_text.innerHTML = arr_cv_text[b];
b++;
setInterval ( v17_loadWeb , 50);
}

function v18_loadWeb ()
{
var cv_text_2 = document.getElementById("cv_text_2");
if (c == 5)
	{
	return c;
	}
cv_text_2.innerHTML = arr_cv_text_2[c];
c++;
setInterval (v18_loadWeb, 50);
}

function v19_loadWeb ()
{
c_line.classList.add ("a_logo");
}

function v20_loadWeb ()
{
var d=0;
line.classList.remove ("line");
line.classList.add ("af_a_line");
cont.appendChild(div);
var wrap = document.getElementById("wrap");


}

function v21_loadWeb ()
{


if ( d == arr_length[0]+1)
	{
	return d;
	}
wrap.innerHTML=arr_id[0].substr(0,d);
d++;
setInterval( v21_loadWeb, 50);
wrap.appendChild(c_ul);
var ul = document.getElementById("f_ul")

ul.appendChild (c_li);
ul.appendChild(c_li1);
ul.appendChild(c_li2);
ul.appendChild (c_li3);
ul.appendChild (c_li4);
ul.appendChild (c_li5);
}

function v22_loadWeb ()
{
var li = document.getElementById("c_li");
if (d1 == arr_length[1] + 1)
	{
	return d1;
	}
	
li.innerHTML = arr_id[1].substr(0,d1);
d1++;
setInterval(v22_loadWeb, 50);
}

function v23_loadWeb ()
{
var li1 = document.getElementById("c_li1");
if (d2 == arr_length[2] + 1)
	{
	return d2;
	}

li1.innerHTML = arr_id[2].substr(0,d2);
d2++;
setInterval(v23_loadWeb, 50);
}

function v24_loadWeb()
{
var li2= document.getElementById("c_li2");
if (d3 == arr_length[3] + 1)
	{
	return d3;
	}
	
li2.innerHTML = arr_id[3].substr(0,d3);
d3++;
setInterval(v24_loadWeb, 50);
}

function v25_loadWeb()
{
var li3= document.getElementById("c_li3");
if (d4 == arr_length[4] + 1)
	{
	return d4;
	}
	
li3.innerHTML = arr_id[4].substr(0,d4);
d4++;
setInterval(v25_loadWeb, 50);
}

function v26_loadWeb()
{
var li4= document.getElementById("c_li4");
if (d5 ==  arr_length[5] + 1)
	{
	return d5;
	}
	
li4.innerHTML = arr_id[5].substr(0,d5);
d5++;
setInterval(v26_loadWeb, 50);
}

function v27_loadWeb()
{
var li5= document.getElementById("c_li5");
if (d6 ==  arr_length[6] + 1)
	{
	return d6;
	}
	
li5.innerHTML = arr_id[6].substr(0,d6);
d6++;
setInterval(v27_loadWeb, 50);
}

function loadWeb ()
{
cont1.innerHTML = text;
setTimeout ( v1_loadWeb , 500);
setInterval ( v2_loadWeb , 2000);
	if (x == 5)
	{
	clearInterval (v2_loadWeb);
	}
setTimeout ( v3_loadWeb , 11000);
setTimeout ( v4_loadWeb , 14000);
setTimeout ( v5_loadWeb, 14500);
setTimeout ( v6_loadWeb, 15000);
setTimeout ( v7_loadWeb, 15500);
setTimeout ( v8_loadWeb, 15700);
setTimeout ( v9_loadWeb, 17200);
setTimeout ( v10_loadWeb, 17500);
setTimeout ( v11_loadWeb, 18000);
	if ( a == 23)
	{
	clearInterval(v11_loadWeb);
	}
setTimeout (v12_loadWeb, 20000);
setTimeout (v13_loadWeb, 20500);
setTimeout (v14_loadWeb, 21500);
setTimeout (v15_loadWeb, 22000);
setTimeout (v16_loadWeb, 22200);
setTimeout (v17_loadWeb, 22230);
	if (b == 10)
	{
	clearInterval(v17_loadWeb);
	}
	
setTimeout (v18_loadWeb, 22700);


if (c == 5)
	{
	clearInterval(v18_loadWeb);
	}	
setTimeout (v19_loadWeb, 23700);
setTimeout (v20_loadWeb, 24700);
setTimeout (v21_loadWeb, 24800);
if (d == 13)
	{
	clearInterval(v21_loadWeb)
	}
setTimeout (v22_loadWeb, 24850);
setTimeout (v23_loadWeb, 24870);
setTimeout (v24_loadWeb, 24890);
setTimeout (v25_loadWeb, 24900);
setTimeout (v26_loadWeb, 24910);
setTimeout (v27_loadWeb, 24920);

if (d1 == 14)
	{
	clearInterval(v22_loadWeb);
	}
if (d2 == 23)
	{
	clearInterval(v23_loadWeb);
	}
if (d3 == 20)
	{
	clearInterval(v24_loadWeb);
	}
	
if (d4 == 15)
	{
	clearInterval(v25_loadWeb);
	}
if  (d6 == 16)
	{
	clearInterval(v26_loadWeb);
	}
}
window.onload = loadWeb;
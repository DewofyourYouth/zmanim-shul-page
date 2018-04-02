function setup(){
				loadJSON("http://www.hebcal.com/shabbat/?cfg=json&geo=geoname&amp;geonameid=295277&amp;D=on&amp;lg=h&amp;m=50&amp;o=on&amp;cfg=j&amp;tgt=_top", gotData, jsonp);

}

function gotData(data){
	let today = data.items[0].title;
	let parsha = data.items[7].title;
	let candlelighting = data.items[6].title;
	let havdala = data.items[8].title;
	document.getElementById('today').innerHTML = today
	document.getElementById('parsha').innerHTML = "פרשת השבוע: " + parsha;
	document.getElementById('candlelighting').innerHTML = candlelighting;
	document.getElementById('havdala').innerHTML =  havdala;
}

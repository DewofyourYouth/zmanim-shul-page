function setup(){
				loadJSON("https://www.hebcal.com/shabbat/?cfg=json&geo=geoname&amp;geonameid=295277&amp;D=on&amp;lg=h&amp;m=50&amp;o=on&amp;cfg=j&amp;tgt=_top", gotData);

}

function gotData(data){
	let today = data.items[0].title;
	let parsha = data.items[7].title;
	let candlelighting = data.items[6].title;
	let havdala = data.items[8].title;
	let todayDate = new Date();
	let daysOfWeek = ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום ששי", "שבת קודש"];
	let todayWeek = daysOfWeek[todayDate.getDay()];
	document.getElementById('today').innerHTML = todayWeek + ", " + today;
	document.getElementById('parsha').innerHTML = "פרשת השבוע: " + parsha;
	document.getElementById('candlelighting').innerHTML = candlelighting;
	document.getElementById('havdala').innerHTML =  havdala;
}

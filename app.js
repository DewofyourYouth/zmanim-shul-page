const shabbatTimes = new XMLHttpRequest();
const d = new Date();
const dayOfWeek = d.getDay();
const date = d.toISOString();
let daysOfWeek = ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום ששי", "שבת קודש"];
const today = date.substr(0, 10);

console.log(today);
shabbatTimes.open('GET', 'https://www.hebcal.com/shabbat/?cfg=json&geo=geoname&amp;geonameid=295432&amp;lg=h&amp;m=50&amp;o=on&amp;cfg=j&amp;tgt=_top');
shabbatTimes.onload = function() {
	const zmanim = JSON.parse( shabbatTimes.responseText );
	document.getElementById('info').innerHTML = "";
	for(let i = 0; i < zmanim.items.length; i++){
		if(zmanim.items[i].category != 'holiday' || zmanim.items[i].date == today || zmanim.items[i].yomtov == true){
			document.getElementById('info').innerHTML += `
			<div class="col-md-3" style="display: inline-block; padding: 30px;">${zmanim.items[i].title}</div>
			`;
		}
		
	}
};
shabbatTimes.send();

const jewishCal = new XMLHttpRequest();
jewishCal.open('GET', 'http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&o=on&min=on&d=onmod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=295432&m=50&s=on');
jewishCal.onload = function() {
	const jewCal = JSON.parse(jewishCal.responseText);
	let i = 0;
	while(jewCal.items[i].date !== today){
		i++;
	} 
	console.log(i)
	function omerDay(element){
		return element.category === 'omer' && element.date === today;
	}
	omer = jewCal.items.findIndex(omerDay);
	omerString = jewCal.items[omer].hebrew;
	console.log(omerString);
	console.log(jewCal.items[i]);
	document.getElementById('date').innerHTML = daysOfWeek[dayOfWeek] + ", " + jewCal.items[i].hebrew + "<br>"  +  "<span style='color:555; font-size: 1.3rem;'>" + omerString + "</span>";
}
jewishCal.send();
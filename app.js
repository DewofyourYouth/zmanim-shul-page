const shabbatTimes = new XMLHttpRequest();
const d = new Date();
const date = d.toISOString();
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
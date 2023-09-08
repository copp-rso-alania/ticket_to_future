
 let big = [
 		['Маляр','malar.png','comfort'/*,'display="none"'*/],
 		['Электромонтер по ремонту и обслуживанию электрооборудования','electromon.jpg','comfort'],
 		['Слесарь-сантехник','slesar.jpg','comfort'],
 		['Портной','portnoi.jpg','creative'],
 		['Токарь-универсал','tokar.jpg','industrial'],
 		['Штукатур','shtukatur.jpeg','comfort'],
 		['Плотник','plotnik.jpg','comfort'],
 		['Сварщик','svarshik.jpg','comfort'],
 		['Оператор БПЛА','bpla.jpg','industrial'],
 		['Гид (экскурсовод)','gid.jpg','social'],
 		['Психолог','psiho.jpeg','social'],
 		['Менеджер по туризму','turmanager.jpg','social'],
		['Официант','oficiant.jpeg','social'],
		['Педагог','pedagog.jpeg','smart'],
		['Журналист','journalist.jpg','creative'],
		['Звукорежиссер','zvukorezh.jpg','creative'],
		['Редактор','redactor.jpeg','creative'],
		['Специалист индустрии красоты: парикмахер','barber.jpg','social'],
		['Банковский служащий','band.jpg','business'],
		['Бухгалтер','buhgalter.jpg','business'],
		['Предприниматель малого бизнеса','maliy_bus.jpg','business'],
		['Юрист','lawyer.jpg','business'],
		['Мастер по ремонту и обслуживанию автомобилей','avtomaster.jpeg','industrial'],
		['Фронтенд-разработчик','frontend.jpg','smart'],
		['Менеджер по качеству','catchmanager.jpg','industrial'],
		['Разработчик Web и мультимедийных приложений','vebmobile.jpeg','smart'],
		['Фармацевт','farmacevt.jpg','heal'],
		['Фармаколог','farmacolog.jpg','heal'],
		['Эколог','ecolog.jpg','heal'],
		['Почвовед','pochvoved.jpg','agrar'],
		['Специалист по экологической безопасности','ecoprotect.jpg','heal'],
		['Лаборант химического анализа','laborant.jpg','industrial'],
		['Лаборант по контролю качества сырья, реактивов, промежуточных продуктов, готовой продукции, отходов производства','laborant_control.jpg','industrial'],
		['Инженер по охране окружающей среды','engineer_wild.jpg','heal'],
		['Инженер-электрик','engineer_electro.jpg','industrial'],
		['Технолог продуктов общественного питания массового изготовления и специализированных пищевых продуктов','tehnopit.jpg','agrar'],
		['Специалист по информационным кабельным сетям','cabel.jpg','secure'],
		['Специалист по информационной безопасности','infosecure.jpg','secure'],
		['Бэкенд-разработчик','backend.jpg','smart'],
		['Гейм-дизайнер','gamedesigner.jpeg','smart'],
		['Дизайнер виртуальных миров','virtual_designer.png','smart'],
		['Инженер по 3D печати','3dprint.jpeg','comfort'],
		['Электрохимик','electrohim.jpg','industrial'],
	]

	// for(let i= 0; i<big.length;i++){
	for(let i= big.length-1; i>=0;i--){
		document.getElementById('hidtag').insertAdjacentHTML("beforebegin", `
				<div class="school_card ${big[i][2]}" ${big[i][3]}>
					<div class="card_image">
						<img src="prof_course/prof_images/${big[i][1]}">
					</div>
					<div class="card_disc">
						<h2>
							${big[i][0]}
						</h2>

						<p>
							Профессиональная среда - ${document.getElementById(`${big[i][2]}`).innerText.toLocaleLowerCase()}.
						</p>

						<div class="link_card">
							<a href="prof_course/allpage.html" class="look">
								Посмотреть
							</a>
						</div>
					</div>
				</div>`)

}

// <a href="prof_course/prof${i+12}.html" class="look">
// 		Посмотреть
// 	</a>


let zapis = document.getElementsByClassName("look");
for(let i=0; i<zapis.length; i++){
	zapis[i].onclick = function(){
		localStorage.setItem('thepage',`prof${zapis.length-i-1}.html`)
	}
}
//32




let options = document.getElementsByClassName('option_unit');
let cards = document.getElementsByClassName('school_card')

for(let i=0; i<options.length;i++){
	options[i].onclick = function() {
		for(let j=0;j<options.length;j++){
			options[j].classList.remove("chosen")
		}
		options[i].classList.add("chosen")
		// localStorage.setItem("chosen",`${i}`)

		for(let j = 0; j<cards.length;j++){
			if (cards[j].classList.contains(`${options[i].id}`)){
				cards[j].style.display = 'block'
			}

			else if(options[i].id == 'allsreda'){
				for(let j = 0; j<cards.length;j++){
				cards[j].style.display = 'block';
				}

				return true
			}
			
			else{
				cards[j].style.display = 'none'
			}
		}	
		
	}

}



// let google = document.getElementsByClassName('LgNcQe')[0];
// if (google.innerText == 'Вы уже заполнили форму') {
// 	document.getElementById('ifgoog').style.height = '310px'
// }



// let form = document.getElementById('sheetdb-form');
// form.addEventListener('submit',sendform)

// function sendform(event) {
// 		event.preventDefault();
// 		          	fetch(form.action, {
// 		              method : "POST",
// 		              body: new FormData(document.getElementById("sheetdb-form")),
// 		          }).then(
// 		              response => response.json()
// 		          ).then((html) => {
// 		            // you can put any JS code here
// 		            alert('Данные отправлены');
// 		          });
// }


// let form = document.getElementById('sheetdb-form');
// form.addEventListener('submit',sendform);

// function sendform(event){

// 	let alldata = document.getElementsByClassName("datainput");

// 	form.action=`https://script.google.com/macros/s/AKfycbwAtNBoflmazofruoZ95nbuIRiBlhCNk0jTW0BH1AnshSWvo1es8HO6TKCCbkxeeW4v/exec?p1=${alldata[0].value}&p2=${alldata[1].value}&p3=${alldata[2].value}&p4=${alldata[3].value}&p5=${alldata[4].value}&p6=${alldata[5].value}`;

// }


const scriptURL = 'https://script.google.com/macros/s/AKfycbyISWPnerH6qede6ksTUUntgUXqf-aeCQsIqgKd7wRbe33uChoQ14Dncvht_ORhJnfCgQ/exec'
			const form = document.forms['submit-to-google-sheet']
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Форма отправлена"))
				.then(() => {  window.location.reload()})
				.catch(error => console.error('Error!', error.message))
			})


let options2 = document.getElementsByTagName('option');

for(let i = 0; i<options2.length; i++){
	if(localStorage.getItem('theprof0') == options2[i].value){
		options2[i].setAttribute('selected','');
	}
}

// window.onbeforeunload = function(){
// 	return false;
// };

 let big = [
 		['Оператор ЭВМ','graf.jpg','С освоением модуля по компетенции «Графический дизайн»'],
		 ['Оператор ЭВМ','3d.jpg','С освоением модуля по компетенции «Основы 3d-моделирования»'],
		 ['Оператор ЭВМ','web.jpeg','С освоением модуля по компетенции «Веб-разработчик»'],
		 ['Агент коммерческий','agent.jpg',' '],
		 ['Ассистент экскурсовода','xcurs.jpg',' '],
		 ['Оператор наземных средств управления беспилотным летательным аппаратом','bpla.png',' '],
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
							${big[i][2]}
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
		localStorage.setItem('thepage2',`prof${zapis.length-i-1}.html`)
	}
}
//32



// let google = document.getElementsByClassName('LgNcQe')[0];
// if (google.innerText == 'Вы уже заполнили форму') {
// 	document.getElementById('ifgoog').style.height = '310px'
// }


let form = document.getElementById('sheetdb-form');
form.addEventListener('submit',sendform)

function sendform(event) {
		event.preventDefault();
		          	fetch(form.action, {
		              method : "POST",
		              body: new FormData(document.getElementById("sheetdb-form")),
		          }).then(
		              response => response.json()
		          ).then((html) => {
		            // you can put any JS code here
		            alert('Данные отправлены');
		          });
}



let options = document.getElementsByTagName('option')

for(let i = 0; i<options.length; i++){
	if(localStorage.getItem('theprof') == options[i].value){
		options[i].setAttribute('selected','');
	}
}
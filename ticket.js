	let news = [
				['parents1.jpg',
				'2 июня, 2023 ',
				'Билет в будущее» запускает первый бесплатный профориентационный курс для родителей.',
				`«Родители в теме» — это ценная информация для мам и пап, которые озабочены будущим своих детей, которые действительно хотят помочь им найти свой профессиональный путь и поддержать их в этом нелегком выборе. Курс доступен на портале <a href="https://bvbinfo.ru/">bvbinfo.ru</a> и содержит в себе 5 модулей, полностью раскрывающих важность профориентации и помогающих родителям погрузиться в эту тему максимально доступно. Эксперты курса расскажут также и о том, как корректно поговорить с ребенком о будущем и как познакомить их с многообразием существующих сегодня профессий. 
					Приглашаю всех родителей школьников на курс «Родители в теме», где у вас будет: <br>
					— 8 экспертов в области профориентации;<br>
					— 5 разнообразных модулей в формате видеоуроков;<br>
					— чек-листы, памятки и планировщики;<br>
					— и ни единого шанса упустить будущее своего ребенка.`],

				['future.jpeg',
				'17 августа, 2023 ',
				'Сегодня мы обращаемся к родителям.',
				'Если ваш ребенок не определился с профессией, вы можете его поддержать и направить. С каждым годом количество участников проекта «Билет в будущее» растёт, увеличивается интерес к профориентации. «Мы ожидаем содействия от педагогов. Также важными участниками проекта станут родители. В первую очередь родители заинтересованы, у них болит душа о том, что же будет дальше с ребёнком, какой путь он себе выберет. И поэтому, чтобы не возникал диссонанс между ожиданиями родителя и ребёнка от будущего, чтобы этот выбор был сонаправленным и участники слышали друг друга, родители станут непосредственными равноправными участниками этого проекта», – подчеркнула заместитель Министра просвещения Российской Федерации Татьяна Васильева.'],

	]

if (document.getElementById('hidtag')) {
	for(let i= news.length-1; i>=0;i--){
		document.getElementById('hidtag').insertAdjacentHTML("beforebegin", `
				<form action="the_new/ticket_new.html"class="n_block">
				<button>
					<div class="n_image">
						<img src="images/for_news/${news[i][0]}">
					</div>

					<div class="n_text">
						<div class="n_date">
							${news[i][1]}
						</div>
						<h3>
							${news[i][2]}
						</h3>
						<p>
							${news[i][3]}
	 					</p>

					</div>
				</button>
			</form>`)
}}




if (document.body.contains(document.getElementsByClassName('n_block')[0])) {

let newinfo = document.getElementsByClassName('n_block')

for(let i= news.length-1; i>=0;i--){
	newinfo[i].onclick = function() {
		localStorage.setItem('infonew',`${news.length-i-1}`)
	}
}
}




if (document.body.contains(document.getElementsByClassName('the_new_container')[0])) {
	let localca = localStorage.getItem('infonew')
	document.getElementsByClassName('the_new_container')[0].innerHTML = `
			<h1>
				${news[localca][2]}
			</h1>

			<div class="n_date_2">
				${news[localca][1]}
			</div>

			<div class="n_main_image" name="changedata">
				<img src="../images/for_news/${news[localca][0]}">
			</div>
			
			
			<div class="n_main_text">
				<div>
					<!-- <h4>Сроки приема на заочное и вечернее сократились</h4>-->
					<p>
						${news[localca][3]}
					</p>
				</div>
			</div>

	`


}


// console.log(localStorage.getItem('infonew'))
//news
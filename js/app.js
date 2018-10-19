const apiURL = 'http://api.tvmaze.com/search/shows?q='
const btnSearch=document.querySelector('#btnSearch')

btnSearch.addEventListener('click', function (e) {
	e.preventDefault();
	let busqueda=document.querySelector('#tbxSearch').value
	let query=`${apiURL}${busqueda}`
	fetch(query).
		then(function (data){
			return data.json()
		}).
		then(function (response){
			let containerSeries=document.querySelector('.cards-series')
			containerSeries.innerHTML =''
			response.forEach(function (serie){
				containerSeries.innerHTML += templateSerie(serie)
			})
		then(function (total){
			let containerSeries=document.querySelector('.total-series')
			containerSeries.innerHTML =''
			total.forEach(function (serie){
				containerSeries.innerHTML += templateSerie(serie.length)
			})
		})
})

const templateSerie= function (serie){
	let img=serie.show.image ? serie.show.image.medium : 'images/default.png'
	return `<div class="card">
                        <div class="card-hero">
                            <img src="${serie.show.image.medium}" alt="">
                        </div>
                        <div class="card-title">
                            <h3>${serie.show.name}</h3>
                        </div>
                    </div>`
}

const templateNumSeries=function(total){
	return `<h2>Se han encontrado ${total} resultado(s)</h2>`
}
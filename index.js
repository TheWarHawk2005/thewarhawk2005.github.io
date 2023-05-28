loadPortfolio()

function loadPortfolio() {
	for (i=0;i<portfolio.length;i++) {
		let ele = document.createElement('DIV')
		ele.classList.add('portfolio-entry')
		ele.innerHTML = `
		<div class="margin-wrapper">
			<div class="portfolio-header">
				<h2>${portfolio[i].name}</h2>
				<button class="glass" onclick="openWin('${portfolio[i].codeUrl}')">Code</button>
				<button class="glass" onclick="openWin('${portfolio[i].url}')">Visit >></button>
			</div>
			<div class="portfolio-desc">
			<p>${portfolio[i].description}</p>
			</div>
		</div>
		<hr width="100px">
		`
		document.querySelector('#portfolio').appendChild(ele)
	}
}

function openWin(url) {
	window.open(url)
}
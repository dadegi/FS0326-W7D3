console.log('Prima: riga 1');
setTimeout(() => console.log('Dopo: riga 2'), 1000);
console.log('Subito dopo: riga 3');

// Promise
const isLoading = document.querySelector('.spinner-border');
const info = document.querySelector('#info');

const libri = ['Primo', 'Secondo', 'Terzo'];
const promessa = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (libri.length > 0) {
			resolve(`Sono arrivati: ${libri}`);
			console.log(promessa);
		} else {
			reject('Non ci sono libri');
			console.log(promessa);
		}
	}, 1000);
});

console.log(promessa);

promessa
	.then((messaggio) => {
		printLibri(messaggio);
	})
	.catch((messaggio) => {
		printLibri(messaggio);
	})
	.finally(() => {
		isLoading.style.display = 'none';
	});

function printLibri(messaggio) {
	console.log(messaggio);
	info.textContent = messaggio;
}

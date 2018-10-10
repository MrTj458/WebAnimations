const spin = [
	{ transform: 'rotate(0)', color: '#00F' },
	{ color: '#000', offset: 0.3 },
	{ transform: 'rotate(360deg)', color: '#00F' },
]

const spinTiming = {
	duration: 4000,
	iterations: Infinity,
}

document.getElementById('arrow2').animate(spin, spinTiming)

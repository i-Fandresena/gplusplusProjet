const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));
/*
const ratio =  1

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 1
}

const set_invisible = function(entries, observer){
	entries.forEach(function(entry){
		if (entry.intersectionRatio <= ratio){
			console.log(entry.intersectionRatio)
			document.querySelector('.navigation').classList.add('reset')
			document.querySelector('.nav').classList.add('navreset')
		} else {
			document.querySelector('.navigation').classList.remove('reset')
			document.querySelector('.nav').classList.remove('navreset')
		}
	})
}

const observer =  new IntersectionObserver(set_invisible, options);
observer.observe(document.querySelector('.window'))
*/

const ratio = .1

const options = {
	root: null,
	rootMargin: '0px',
	threshold: .1
}


const set_invisible = function(entries, observer){
	entries.forEach(function(entry){
		if (entry.intersectionRatio > ratio) {
			document.querySelector('.navigation').classList.remove('reset')
			document.querySelector('.nav').classList.remove('navreset')
		} else{
			document.querySelector('.navigation').classList.add('reset')
			document.querySelector('.nav').classList.add('navreset')
		}
	})
}

const observer =  new IntersectionObserver(set_invisible, options);
observer.observe(document.querySelector('.window'))

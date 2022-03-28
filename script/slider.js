const rootElem = document.querySelector('#root2');
const imgList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpeg'];
const mediaPath = 'media/'
let imgIndex = 0;

const slider_container = document.createElement('div');
const slider_main = document.createElement('div');
const slider_film = document.createElement('div');
const slider_trigger = document.createElement('div');

const slider_trigger_left = document.createElement('div');
const slider_trigger_right = document.createElement('div');
slider_trigger_left.innerHTML = '<i class="fas fa-arrow-left"></i>';
slider_trigger_right.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

slider_container.classList.add('slider-container');
slider_main.classList.add('slider-main');
slider_trigger.classList.add('slider-trigger');
slider_film.classList.add('slider-film');

slider_trigger.append(slider_trigger_left, slider_trigger_right);

slider_container.append(slider_main, slider_trigger);
slider_main.append(slider_film);
rootElem.append(slider_container);

slider_film.append(...imgList.map(img_name=>{
	const divElem = document.createElement('div');
	divElem.style.backgroundImage = `url('${mediaPath+img_name}')`;
	return divElem
}));



const render = ()=>{
	const window_width = slider_main.offsetWidth;
	slider_film.style.right = window_width * imgIndex +'px'
}



slider_trigger_left.addEventListener('click', ()=>{
	if (imgIndex > 0){
		imgIndex--;
	}else{
		imgIndex = imgList.length - 1;
	}
	render()
});

slider_trigger_right.addEventListener('click', ()=>{
	if (imgList.length - 1 > imgIndex){
		imgIndex++;
	}else{
		imgIndex = 0;
	}
	render()
});



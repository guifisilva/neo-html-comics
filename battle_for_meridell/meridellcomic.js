var targetToggle = document.querySelector('.wrapper');
targetToggle.onclick = function(){
	'use strict';
	if (targetToggle.classList.contains('defaultWidth')) {
		targetToggle.classList.toggle('defaultWidth');
		targetToggle.classList.toggle('trueSize');
	}
	else if (targetToggle.classList.contains('trueSize')) {
		targetToggle.classList.toggle('trueSize');
		targetToggle.classList.toggle('fullWidth');
	}
	else if (targetToggle.classList.contains('fullWidth')) {
		targetToggle.classList.toggle('fullWidth');
		targetToggle.classList.toggle('defaultWidth');
	}
};
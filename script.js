

function anim(elem, i, k, c) {
	var elem = document.querySelector(elem);
	setTimeout(function() {

		elem.classList.add(i);
	},k)

	setTimeout(function() {
		elem.classList.remove(i);
	}, c)


}






function reverse () {
	
		anim('.back_main', 'active_min', 1500);
		anim('.text_1', 'active', 2000);
		anim('.back_main', 'active_full', 4000);
		anim('.text_1', 'hide', 4000);
		anim('.text_2', 'active', 4500);
		anim('.mobile_1', 'active', 4800);
		anim('.mobile_1', 'hide', 6700);
		anim('.text_2', 'hide', 6500);
		anim('.mobile_2', 'active', 7200);
		anim('.text_3', 'active', 7000);
		anim('.mobile_2', 'hide', 9200);
		anim('.text_3', 'hide', 9000);
		anim('.sogl', 'active', 9500);
		anim('.sogl', 'active', 12000);

	


}

reverse(), setInterval(function() {
	reverse();
}, 12500)

// 	file:///D:/Moe/Hihi/index.html
const audio = new Audio();
var welcome = document.getElementById('welcome');
var content = document.getElementsByClassName('content');
var start = document.getElementById('homepage');
var que1 = document.getElementById('1');
var que2 = document.getElementById('2');
var hide = document.getElementById('hide');
var end = document.getElementById('end');
var con = $('#confes');
const info = "      Em yêu anh nhiều lắm. Anh ở bên em mãi mãi nha !!!";
var index = 0;
var leng = info.length - 2;
var a = Array.from(info);
var n = '';
audio.src = './another/images-music/1.mp3';
audio.loop = true;
change=()=>{
	welcome.style.display = 'none';
	content[0].style.display = 'block';
	audio.play();
}

next=()=>{
	content[0].style.display = 'none';
	content[1].style.display = 'block';
}

showpopup=()=>{
	content[1].style.filter = 'blur(5px)';
	end.style.display = 'block';
}

movebutton=()=>{
	let x = $(window).width()/5 * Math.random();
	let y = $(window).height()/3 * Math.random();
	if (x>0) {
		x = -x + 'px';
	}
	else {
		x = -x + 'px';
	}

	if (y>0) {
		y = -y + 'px';
	}
	else {
		y = -y + 'px';
	}
	hide.style.left = x;
	hide.style.top = y;
}

add=()=>{
	if(index >= leng) {
		index = 0;
		n = '';
		con.val(n);	
	}
	index++;
	n = n+a[index];
	con.val(n);	
}


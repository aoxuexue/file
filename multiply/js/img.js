var but1 = document.getElementById('but1');
var but2 = document.getElementById('but2');
var span = document.querySelector('#main>span')
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var img = document.getElementById('img');
var span1 = document.getElementById('span1');
var span2 = document.getElementById('span2');
var arr = ['1.jpg','2.jpg','3.jpg','4.jpg'];
var num = 0;
var arr1 = ['1/4','2/4','3/4','4/4'];
var arr2 = ['文字一','文字二','文字三','文字四'];

but1.onclick = function(){
	span.innerHTML = '图片可从最后一张跳转到第一张循环切换';
	
	next.onclick = function(){
	//根据数组状态更换图片
	// num = num+1;
	num++;
	//++运算符，每次让运算数自+1；
	if(num > arr.length-1){
		num = 0;
	}
	img.src = 'img/'+arr[num];
	span1.innerHTML = ''+arr1[num];
	span2.innerHTML = ''+arr2[num];	
	};
	
	prev.onclick = function(){
	//根据数组状态更换图片
	num--;
	if(num < 0){
		num = arr.length-1;
	}
	img.src = 'img/'+arr[num];
	span1.innerHTML = ''+arr1[num];
	span2.innerHTML = ''+arr2[num];	
	};
};
but2.onclick = function(){
	span.innerHTML = '图片只能到最后一张或只能到第一张切换';
	next.onclick = function(){
	//根据数组状态更换图片	
	num++;
	if(num > arr.length-1){
		num = 3;
		alert('这是最后一张了,不能在往后了');
	}
	img.src = 'img/'+arr[num];
	span1.innerHTML = ''+arr1[num];
	span2.innerHTML = ''+arr2[num];	
	};
	
	prev.onclick = function(){
	//根据数组状态更换图片
	num--;
	//--运算符，每次运算数自-1;
	if(num < 0){
		num = 0;
		alert('这是最前一张了,不能在往前了');
	}
	img.src = 'img/'+arr[num];
	span1.innerHTML = ''+arr1[num];
	span2.innerHTML = ''+arr2[num];	
	};
};






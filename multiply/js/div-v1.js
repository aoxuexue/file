   /*  向右
         i     eft   top
		 0     0     0
         1     50    50
         2     100   100
         3     50    150
        4     0      200
		 */
		
		/*  
		 向下
		   i    left   top
		   0    0        0
		   1    50      50
		   2   100     100
		   3  150      50
		   4  200     0
		   
		   i=0  
		   i<=2  left top
		          i*50  i*50
		           i*50     200-ix50
		   
		   
		 */
var but = document.getElementById('button');
var box = document.getElementById('box');
var src ='';
var l=0;
var t=0;
var num=0;
but.onclick = function(){
	src = "";
	//当点击按钮时，生成向上V字形
	if(num == 0){
		for(var i=0;i<5;i++){
			l = i*50;
			if(i<=2){
				t = 200-i*50;
			}
			else{
				t = i*50;
			}
			src += '<div style="left: '+l+'px; top: '+t+'px;">'+i+'</div>';
		}
	}
				
	//当点击按钮时，生成向右V字形
	if(num == 1){
		for(var i=0;i<5;i++){
			t = i*50;
			if(i<=2){
				l = i*50;
			}
			else{
				l = 200-i*50;
			}
			src += '<div style="left: '+l+'px; top: '+t+'px;">'+i+'</div>';
		}
	}

	//当点击按钮时，生成向下V字形
	if(num == 2){
		for(var i=0;i<5;i++){
			l = i*50;
			if(i<=2){
				t = i*50;
			}
			else{
				t = 200-i*50;
			}
			src += '<div style="left: '+l+'px; top: '+t+'px;">'+i+'</div>';
		}
	}

	//当点击按钮时，生成向左V字形
	if(num == 3){
		for(var i=0;i<5;i++){
			t = i*50;
			if(i<=2){
				l = 200-i*50;
			}
			else{
				l = i*50;
			}
			src += '<div style="left: '+l+'px; top: '+t+'px;">'+i+'</div>';
		}
	}
	
	num++;
	if(num == 4){
		num = 0;
	}
				
	box.innerHTML = src;
};
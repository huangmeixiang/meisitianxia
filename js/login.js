 var animat = false;  
        var index = 0;        
        var list = document.getElementById('list').getElementsByTagName('a');
       
       setInterval(function(){next()}, 6000);

      
        function next(){
          
            var new_index = (index+1 >3)?0:index+1 ;
          
            animation(index, new_index);
            index = new_index;
           
        }

        function animation(index, new_index){
          
            var interval = 10;
            var one_time = 2000;
            var offset = 1/(2000/10);


         
            list[index].style.opacity = 1;              
            list[new_index].style.opacity = 0;  

            list[new_index].style.display = 'block';

        
            var x = 0;
            go();
            function go(){
                x += offset;    

                list[index].style.opacity -= offset;
              
                list[new_index].style.opacity = x;
              
                if(list[index].style.opacity >=0 ){
                   setTimeout(function(){go()}, 10) ;
                }else{
                    list[index].style.display = 'none';
                 
                  
                }
            }
        }
          var zc_content=document.getElementById('zc_content');
          var login_content=document.getElementById('login_content');
          var zc_title=document.getElementById('zc_title');
          var dl_title=document.getElementById('dl_title');
          var zc=document.getElementById('zc_content');
          var login=document.getElementById('login_content');
          zc_title.onclick=function(){
       		 dl_title.style.color='white';
       		 dl_title.style.background='rgba(0,0,0,0.5)';
       		  zc_title.style.color='#333';
       		 zc_title.style.background='none';
//     		 zc_title.style='';
       		  zc_content.style.display='block';
       		  login_content.style.display='none';
       		 
           }
        dl_title.onclick=function(){
       	  zc_title.style.color='white';
        zc_title.style.background='rgba(0,0,0,0.5)';
         dl_title.style.color='#333';
       		 dl_title.style.background='none';
//     		  dl_title.style='';
       		   zc_content.style.display='none';
       		  login_content.style.display='block';
        }
        var tel_reg = /^1(38|37|30|86|50|36|88|37|80|34|35|30)[0-9]{8}$/;
      
	   function checkTel(){
	   	var pwd=document.getElementById('pwd').value;
		var tel = document.getElementById('tel').value;
		var check = tel_reg.exec(tel);
		if(pwd==''&&tel==''||tel==''||pwd==''){
        	document.getElementById('alert').innerHTML='*&nbsp;用户名或密码不能为空!';
			
        }
		else{
			if( !check ){
			document.getElementById('alert').innerHTML='*&nbsp;用户名或密码格式不对!';
			
		    }else{
		    	document.getElementById('alert').innerHTML='';
		    }
			
		}
		 
	}
	   
        document.getElementById('loginBtn').onclick=function(){checkTel()}
        //在手机号、密码为空的情况下
       
        	
        	
        
    

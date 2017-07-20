
	var animat=false;
        var jieshao_list = document.getElementById('jieshao_list');
      
     document.getElementById('jieshao_next').onclick = function(){next()}

        function next(){
        	if(animat){
        		return false;
        	}
           
         var width = parseInt(jieshao_list.style.left);
         
            var next_width = width-930;

            animation(width, next_width);
            console.log(width, next_width);
          
        }
     document.getElementById('jieshao_pre').onclick = function(){pre()}
        function pre(){
        if(animat){
        		return false;
        	}
          var width = parseInt(jieshao_list.style.left);
           
            var next_width = width+930;
          
         
           animation(width, next_width);
        }
    
       

      
        function animation(width, next_width, one_time, interval){
          if(animat){
        		return false;
        	}
          animat=true;
            one_time = one_time || 800; 
          
            interval = interval || 10;

            var offset = (next_width-width)/(one_time/interval);


            go(width, next_width,offset);

            function go(w, next_width,offset){
           
               jieshao_list.style.left = w+'px';  

                w += offset;
             
                if(w >= next_width && width > next_width || w<=next_width && width<next_width){
                     setTimeout(function(){
                          
                            go(w, next_width,offset);
                        },interval);
                }else{
                   
                    if(next_width < -3720){
                        jieshao_list.style.left = -930+'px';
                    }else if(next_width >-930){
                        jieshao_list.style.left = -3720+'px';
                    }else{
                        jieshao_list.style.left = next_width+'px';
                 }
                 animat=false;

                 }
            }
        }


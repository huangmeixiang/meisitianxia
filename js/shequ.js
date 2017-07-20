
     var animat=false;
        var list = document.getElementById('sq_list');
       
        // 绑定点下一张图片的方法
        document.getElementById('sq_next').onclick = function(){next()}
setInterval( function (){next()},3000);
        // 移动到下一张图片
        function next(){
        	if(animat){
        		return false;
        	}
            
            var width = parseInt(list.style.left);
        
            var next_width = width-645;

            animation(width, next_width);
        }

        // 移动到上一张图片
        function pre(){
        	if(animat){
        		return false;
        	}
            

            var width = parseInt(list.style.left);
            // var next_width = (width>=0)?-4000:width+1000;
            var next_width = width+645;
           
            animation(width, next_width);
        }
        // 绑定点下一张图片的方法
        document.getElementById('sq_pre').onclick = function(){pre()}

        // 实现在图片平移的动画效果方法
        function animation(width, next_width, one_time, interval){
           if(animat){
        		return false;
        	}
           animat = true;
            one_time = one_time || 500;       
        
            interval = interval || 10;

            var offset = (next_width-width)/(one_time/interval);


            go(width, offset, next_width);

          
            function go(w, offset, next_width){
           
                // 把当前的平移距离放到目标元素上
                list.style.left = w+'px';  

                w += offset;
             
                if(w >= next_width && width > next_width || w<=next_width && width<next_width){
                     setTimeout(function(){
                            // 把对应的变量传入函数进行自调
                            go(w, offset, next_width);
                        },interval);
                 }else{
               
                    if(next_width <-3225){
                        list.style.left = -645+'px';
                    }else if(next_width > -645){
                        list.style.left = -3225+'px';
                    }else{
                        list.style.left = next_width+'px';
                    }

                    animat = false;
                 }
                 
            }
        }

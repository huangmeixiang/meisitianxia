window.onload=function(){
	 var animat = false;
        var index = 0;
        var list = document.getElementById('list').getElementsByTagName('a');
        var dots = document.getElementById('dot').getElementsByTagName('li');

        document.getElementById('next').onclick = function(){next()}
        document.getElementById('pre').onclick = function(){pre()}

        var int = setInterval(function(){next()}, 3000);

        // 下张图片的方法
        function next(){
            if(animat){
                return false;
            }
            var new_index = (index+1 >5)?0:index+1 ;
           
            animation(index, new_index);
            index = new_index;
            checkIndex();
            
        }

        // 上张图片的方法
        function pre(){
            if(animat){
                return false;
            }
            var new_index = (index-1 < 0)?5: index-1;
            animation(index, new_index);
            index = new_index;
            checkIndex();
         
        }

        /*
            动画函数
            @pream  integer index       原显示图片的下标
            @pream  integer new_index       需要显示图片的下标
            @return 
        */
        function animation(index, new_index){
            animat = true;

            var interval = 10;
            var one_time = 1000;
            var offset = 1/(1000/10);


          
            list[index].style.opacity = 1;              // 设置当前下标的图片透明度为1
            list[new_index].style.opacity = 0;  // 设置准备显示的图片透明度为0

            list[new_index].style.display = 'block';

       
            var x = 0;
            go();
            function go(){
                x += offset;        // 需要要显示图片的透明度

                list[index].style.opacity -= offset;
              
                list[new_index].style.opacity = x;
            
                if(list[index].style.opacity >=0 ){
                   setTimeout(function(){go()}, 10) ;
                }else{
                    list[index].style.display = 'none';
                    animat = false;
                  
                }
            }
        }
        
        // 检查并设置图片索引的方法
        function checkIndex(){
            for(var i=0; i<dots.length; i++){
                dots[i].className = '';
            }
            // console.log(index);
            dots[index].className = 'on';
        }

        // 绑定点击图片索引点跳转图片的方法
        for(var i=0; i<dots.length; i++){
            dots[i].onclick = function(){
                if(animat){
                    return false;
                }
                var new_index = Number(this.getAttribute('index'));
                animation(index, new_index);
                index = new_index;
                checkIndex();
            }
        }
        
         var container = document.getElementById('banner');
        // 鼠标移动到窗口位置时停止自动轮播
        container.onmouseover=function(){
            // console.log(123);
            clearInterval(int);
        };
        // 鼠村移出窗口位置后重新启动自动轮播
        container.onmouseout = function(){
            int = setInterval(function(){next()},3000);
        }

	
}
       
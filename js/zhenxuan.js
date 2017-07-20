        var animat=false;
        var list = document.getElementById('zxlist');
       

       
//      var int = setInterval(function(){next()},3000);

        // 绑定点下一张图片的方法
        document.getElementById('next').onclick = function(){next()}

        // 移动到下一张图片
        function next(){
            if(animat){
                return false;
            }

            var width = parseInt(list.style.left);
            // var next_width = (width <= -5000)? -1000: width-1000;
            var next_width = width-1035;

            animation(width, next_width);
        }

        // 移动到上一张图片
        function pre(){
            if(animat){
                return false;
            }
            var width = parseInt(list.style.left);
         
            var next_width = width+1035;
          
          
            animation(width, next_width);
        }
        // 绑定点下一张图片的方法
        document.getElementById('pre').onclick = function(){pre()}

        // 实现在图片平移的动画效果方法
        function animation(width, next_width, one_time, interval){
            if(animat){
                return false;
            }
            animate=true;
            one_time = one_time || 500;        // 一次动画的总时长
            // 设置每帧的单位时间
            interval = interval || 10;

            var offset = (next_width-width)/(one_time/interval);


            go(width, offset, next_width);

            // 动画一帧的方法
            function go(w, offset, next_width){
           
                // 把当前的平移距离放到目标元素上
                list.style.left = w+'px';  
             
                // 当前的平移距离+一帧的平移距离 = 下一帧的当前距离
                w += offset;
               
                if(w >= next_width && width > next_width || w<=next_width && width<next_width){
                     setTimeout(function(){
                            // 把对应的变量传入函数进行自调
                            go(w, offset, next_width);
                        },interval);
                 }else{
                    // 动画结束后执行的语句
                    // list.style.left = next_width;   // 为了保证动画时当前位置应该等于终点的位置
                    if(next_width < -4140){
                        list.style.left = -1035+'px';
                    }else if(next_width > -1035){
                        list.style.left = -4140+'px';
                    }else{
                        list.style.left = next_width+'px';
                    }

                     animate=false;
                 }
            }
        }
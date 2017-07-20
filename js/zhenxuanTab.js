window.onload=function(){
	
	var tabLis=document.querySelector('.title_right').children[0].children;
	
	var zxData=document.querySelector('.zhenxuan_content').children;
	console.log(zxData.length);

	for(var i=0;i<tabLis.length;i++){
		tabLis[i].index=i;
		
		tabLis[i].onclick=function(){
			for(var j=0;j<zxData.length;j++){
				tabLis[j].className='';
				zxData[j].style.display="none";
			}
			this.className='on';
			zxData[this.index].style.display="block";
			
		}
	}
	
	cateData();
	fabuData();
	function cateData(){
		var data1=
		[
	
	{
	  "href":"http://zhen.meishichina.com/21974/",
	  "img":"../image/zhenxuan/hy.jpg",
	  "title":"海洋蓝渐变玻璃杯",
	  "price":"28.80",
	  "buyUrl":"http://zhen.meishichina.com/21974/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16717/",
	  "img":"../image/zhenxuan/wj.jpg",
	  "title":"韩国文具水果主义果形铅笔袋",
	  "price":"13.80",
	  "buyUrl":"http://zhen.meishichina.com/16743/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/21971/",
	  "img":"../image/zhenxuan/mh.jpg",
	  "title":"魔幻螺卷器 创意造型黄瓜刀",
	  "price":"14.80",
	  "buyUrl":"http://zhen.meishichina.com/21971/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16690/",
	  "img":"../image/zhenxuan/m.jpg",
	  "title":"够地道的五常大米，来自家人",
	  "price":"99.00",
	  "buyUrl":"http://zhen.meishichina.com/16690/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16743/",
	  "img":"../image/zhenxuan/js.jpg",
	  "title":"Bellarmine 贝勒铭精选雷司...",
	  "price":"326.00",
	  "buyUrl":"http://zhen.meishichina.com/16743/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16716/",
	  "img":"../image/zhenxuan/tg.jpg",
	  "title":"A4糖果色竖式记事板",
	  "price":"4.50",
	  "buyUrl":"http://zhen.meishichina.com/16716/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16711/",
	  "img":"../image/zhenxuan/nz.jpg",
	  "title":"清新文艺床头懒人闹钟",
	  "price":"23.80",
	  "buyUrl":"http://zhen.meishichina.com/16711/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16563/",
	  "img":"../image/zhenxuan/qkl.jpeg",
	  "title":"LU露怡巧克力消化饼干 200g...",
	  "price":"29.90",
	  "buyUrl":"http://zhen.meishichina.com/16563/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16174/",
	  "img":"../image/zhenxuan/yk.jpg",
	  "title":"ecoro/怡可诺 橡皮糖酸小虫",
	  "price":"22.90",
	  "buyUrl":"http://zhen.meishichina.com/16174/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16046/",
	  "img":"../image/zhenxuan/cy.jpg",
	  "title":"创意波点长方形寿司盘 西餐盘",
	  "price":"12.60",
	  "buyUrl":"http://zhen.meishichina.com/16046/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16163/",
	  "img":"../image/zhenxuan/br.jpg",
	  "title":"Brita Marella碧然德滤水壶套装",
	  "price":"182.00",
	  "buyUrl":"http://zhen.meishichina.com/16163/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16106/",
	  "img":"../image/zhenxuan/zl.jpeg",
	  "title":"中粮集团山萃牌荆条成熟蜂蜜",
	  "price":"109.00",
	  "buyUrl":"http://zhen.meishichina.com/16106/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16087/",
	  "img":"../image/zhenxuan/xc.jpg",
	  "title":"西餐调料法香欧芹碎20G",
	  "price":"11.80",
	  "buyUrl":"http://zhen.meishichina.com/16087/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16023/",
	  "img":"../image/zhenxuan/xf.jpg",
	  "title":"西芙 热火烘焙花瓣陶瓷盘",
	  "price":"29.90",
	  "buyUrl":"http://zhen.meishichina.com/16023/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/22094/",
	  "img":"../image/zhenxuan/sg.jpg",
	  "title":"手工坚果仁水果烘焙烤燕麦片",
	  "price":"37.80",
	  "buyUrl":"http://zhen.meishichina.com/22094/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/21686/",
	  "img":"../image/zhenxuan/dh.jpg",
	  "title":"带护手不锈钢切花器",
	  "price":"11.90",
	  "buyUrl":"http://zhen.meishichina.com/21686/redirect/"
	}
];
       var cateData=data1;
       var testData=data1;
      
        var cateUL=document.querySelector('.cateData');
         var testUL=document.querySelector('.testData');
          
          
		cateUL.innerHTML="";
		testUL.innerHTML="";
		
		
		for(var i=0;i<cateData.length;i++){
			cateUL.innerHTML+='<li>'
			+'	<a href='+cateData[i].href+'>'
			+'		<i><img src='+cateData[i].img+' width="233" height="230"/></i>'
			+'			<span>'+cateData[i].title+'</span>'
			+'	 </a>'
			+'	 <p class="price color">&yen;'+cateData[i].price+'</p>'
			+'	 <p class="buy"><a href="'+cateData[i].buyUrl+'">购买</a></p>'
								
			+'</li>';
		
			
		};
		for(var i=0;i<testData.length;i++){
			testUL.innerHTML+='<li>'
			+'	<a href='+testData[i].href+'>'
			+'		<i><img src='+testData[i].img+' width="233" height="230"/></i>'
			+'			<span>'+testData[i].title+'</span>'
			+'	 </a>'
			+'	 <p class="price color">&yen;'+testData[i].price+'</p>'
			+'	 <p class="buy"><a href="'+testData[i].buyUrl+'">购买</a></p>'
								
			+'</li>';
			
		};
		
	};
	function fabuData(){
		var data2=
		[
	{
	  "href":"http://zhen.meishichina.com/21799/",
	  "img":"../image/zhenxuan/fl.jpg",
	  "title":"Philips/飞利浦 HD2079豆浆机家用全自动无渣免过滤迷你多功能",
	  "price":"659.00",
	  "buyUrl":"http://zhen.meishichina.com/21799/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16690/",
	  "img":"../image/zhenxuan/m.jpg",
	  "title":"够地道的五常大米，来自家人",
	  "price":"99.00",
	  "buyUrl":"http://zhen.meishichina.com/16690/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16743/",
	  "img":"../image/zhenxuan/js.jpg",
	  "title":"Bellarmine 贝勒铭精选雷司...",
	  "price":"326.00",
	  "buyUrl":"http://zhen.meishichina.com/16743/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16717/",
	  "img":"../image/zhenxuan/wj.jpg",
	  "title":"韩国文具水果主义果形铅笔袋",
	  "price":"13.80",
	  "buyUrl":"http://zhen.meishichina.com/16743/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16716/",
	  "img":"../image/zhenxuan/tg.jpg",
	  "title":"A4糖果色竖式记事板",
	  "price":"4.50",
	  "buyUrl":"http://zhen.meishichina.com/16716/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16711/",
	  "img":"../image/zhenxuan/nz.jpg",
	  "title":"清新文艺床头懒人闹钟",
	  "price":"23.80",
	  "buyUrl":"http://zhen.meishichina.com/16711/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16563/",
	  "img":"../image/zhenxuan/qkl.jpeg",
	  "title":"LU露怡巧克力消化饼干 200g...",
	  "price":"29.90",
	  "buyUrl":"http://zhen.meishichina.com/16563/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16174/",
	  "img":"../image/zhenxuan/yk.jpg",
	  "title":"ecoro/怡可诺 橡皮糖酸小虫",
	  "price":"22.90",
	  "buyUrl":"http://zhen.meishichina.com/16174/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16163/",
	  "img":"../image/zhenxuan/br.jpg",
	  "title":"Brita Marella碧然德滤水壶套装",
	  "price":"182.00",
	  "buyUrl":"http://zhen.meishichina.com/16163/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16106/",
	  "img":"../image/zhenxuan/zl.jpeg",
	  "title":"中粮集团山萃牌荆条成熟蜂蜜",
	  "price":"109.00",
	  "buyUrl":"http://zhen.meishichina.com/16106/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16087/",
	  "img":"../image/zhenxuan/xc.jpg",
	  "title":"西餐调料法香欧芹碎20G",
	  "price":"11.80",
	  "buyUrl":"http://zhen.meishichina.com/16087/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16046/",
	  "img":"../image/zhenxuan/cy.jpg",
	  "title":"创意波点长方形寿司盘 西餐盘",
	  "price":"12.60",
	  "buyUrl":"http://zhen.meishichina.com/16046/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/16023/",
	  "img":"../image/zhenxuan/xf.jpg",
	  "title":"西芙 热火烘焙花瓣陶瓷盘",
	  "price":"29.90",
	  "buyUrl":"http://zhen.meishichina.com/16023/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/22094/",
	  "img":"../image/zhenxuan/sg.jpg",
	  "title":"手工坚果仁水果烘焙烤燕麦片",
	  "price":"37.80",
	  "buyUrl":"http://zhen.meishichina.com/22094/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/21974/",
	  "img":"../image/zhenxuan/hy.jpg",
	  "title":"海洋蓝渐变玻璃杯",
	  "price":"28.80",
	  "buyUrl":"http://zhen.meishichina.com/21974/redirect/"
	},
	{
	  "href":"http://zhen.meishichina.com/21971/",
	  "img":"../image/zhenxuan/mh.jpg",
	  "title":"魔幻螺卷器 创意造型黄瓜刀",
	  "price":"14.80",
	  "buyUrl":"http://zhen.meishichina.com/21971/redirect/"
	}
];

								
		var callData=data2;
		var fashData=data2;
		var callUL=document.querySelector('.callData');
		var fashUL=document.querySelector('.fashData');
		callUL.innerHTML="";
		fashUL.innerHTML="";
		
				for(var i=0;i<callData.length;i++){
				
				callUL.innerHTML+='<li>'
				+'	<a href='+callData[i].href+'>'
				+'		<i><img src='+callData[i].img+' width="233" height="230"/></i>'
				+'			<span>'+callData[i].title+'</span>'
				+'	 </a>'
				+'	 <p class="price color">&yen;'+callData[i].price+'</p>'
				+'	<p class="buy"><a href="'+callData[i].buyUrl+'">购买</a></p>'
				+'</li>';
				
			}
		
	
				for(var i=0;i<fashData.length;i++){
				
				fashUL.innerHTML+='<li>'
				+'	<a href='+fashData[i].href+'>'
				+'		<i><img src='+fashData[i].img+' width="233" height="230"/></i>'
				+'			<span>'+fashData[i].title+'</span>'
				+'	 </a>'
				+'	 <p class="price color">&yen;'+fashData[i].price+'</p>'
				+'	<p class="buy"><a href="'+fashData[i].buyUrl+'">购买</a></p>'
									
				+'</li>';
				
			}
			
		
		
		
	}
}


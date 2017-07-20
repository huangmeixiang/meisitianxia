window.onload=function(){
	
	var tabLis=document.querySelector('.title_left').children[0].children;
	var caipuData=document.querySelector('.menu_content').children;
	console.log(caipuData.length);

	for(var i=0;i<tabLis.length;i++){
		tabLis[i].index=i;
		
		tabLis[i].onclick=function(){
			for(var j=0;j<caipuData.length;j++){
				tabLis[j].className='';
				caipuData[j].style.display="none";
			}
			this.className='on';
			caipuData[this.index].style.display="block";
			
		}
	}
	
	tjData();
	newData();
	function tjData(){
		var data1=
								[
									{
										"href":"http://home.meishichina.com/recipe-315038.html",
									    "img":"../image/caipu/xs.jpg",
									    "title":"香酥鲤鱼",
									    "author":"黄豆豆的一家",
									    "authorUrl":"http://home.meishichina.com/space-549055.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315035.html",
									    "img":"../image/caipu/nm.jpg",
									    "title":"柠檬蛋糕",
									    "author":"吾爱烘焙",
									    "authorUrl":"http://home.meishichina.com/space-7885543.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315034.html",
									    "img":"../image/caipu/hx.jpg",
									    "title":"海鲜披萨",
									    "author":"Q猪宝宝",
									    "authorUrl":"http://home.meishichina.com/space-6553005.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315032.html",
									   "img":"../image/caipu/cp552.jpg",
									    "title":"国宝熊猫挤挤小面包",
									    "author":"爱蓝胖子的diao",
									    "authorUrl":"http://home.meishichina.com/space-9693501.html"
									},
									{
										"href":"http://home.meishichina.com/space-9693501.html",
									    "img":"../image/caipu/qw.jpg",
									    "title":"青蛙挤挤面包",
									    "author":"爱蓝胖子的diao",
									    "authorUrl":"http://home.meishichina.com/space-9693501.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315025.html",
									    "img":"../image/caipu/hlb.jpg",
									    "title":"胡萝卜小米花生糊",
									    "author":"柚子小吃货",
									    "authorUrl":"http://home.meishichina.com/space-9749826.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315055.html",
									    "img":"../image/caipu/hmg.jpg",
									    "title":"黄玫瑰",
									    "author":"沙儿飞飞❉",
									    "authorUrl":"http://home.meishichina.com/space-9012879.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315066.html",
									    "img":"../image/caipu/cx.jpg",
									    "title":"豉香土豆片",
									    "author":"厨娘宋宋",
									    "authorUrl":"http://home.meishichina.com/space-9823148.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315064.html",
									    "img":"../image/caipu/sc.jpg",
									    "title":"水炒鸡蛋",
									    "author":"卜卜贝",
									    "authorUrl":"http://home.meishichina.com/space-10008152.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315004.html",
									    "img":"../image/caipu/rm.jpg",
									    "title":"肉末豆腐",
									    "author":"祯祯宝贝",
									    "authorUrl":"http://home.meishichina.com/space-6673714.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315011.html",
									    "img":"../image/caipu/rg.jpg",
									    "title":"肉桂苹果派",
									    "author":"s姐_絮",
									    "authorUrl":"http://home.meishichina.com/space-9983821.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314807.html",
									    "img":"../image/caipu/bc.jpg",
									    "title":"菠菜戚风蛋糕",
									    "author":"清水淡竹",
									    "authorUrl":"http://home.meishichina.com/space-8451954.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315007.html",
									    "img":"../image/caipu/rl.jpg",
									    "title":"乳酪小蛋糕",
									    "author":"万山红",
									    "authorUrl":"http://home.meishichina.com/space-272949.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315001.html",
									    "img":"../image/caipu/jf.jpg",
									    "title":"减肥排毒-海带豆腐汤",
									    "author":"五只狸",
									    "authorUrl":"http://home.meishichina.com/space-7832720.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315008.html",
									    "img":"../image/caipu/ksh.jpg",
									    "title":"烤生蚝",
									    "author":"胖子瘦子我都爱",
									    "authorUrl":"http://home.meishichina.com/space-9218939.html"
									},
									{
										"href":"#",
									    "img":"../image/caipu/zsy.jpg",
									    "title":"紫山药豌豆杂粮粥",
									    "author":"柚子小吃货",
									    "authorUrl":"http://home.meishichina.com/recipe-315006.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315003.html",
									    "img":"../image/caipu/cyg.jpg",
									    "title":"撑腰糕",
									    "author":"麦子老妈",
									    "authorUrl":"http://home.meishichina.com/space-8041796.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314997.html",
									    "img":"../image/caipu/yy.jpg",
									    "title":"洋芋擦擦",
									    "author":"泥鳅的主食厨房",
									    "authorUrl":"http://home.meishichina.com/space-8607065.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314979.html",
									    "img":"../image/caipu/zz.jpg",
									    "title":"自制披萨皮",
									    "author":"Q猪宝宝",
									    "authorUrl":"http://home.meishichina.com/space-6553005.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314973.html",
									    "img":"../image/caipu/xn.jpg",
									    "title":"咸奶油蛋糕",
									    "author":"烘焙艺术",
									    "authorUrl":"http://home.meishichina.com/space-9903671.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314971.html",
									    "img":"../image/caipu/mg01.jpg",
									    "title":"芒果千层",
									    "author":"薇笑的鱼",
									    "authorUrl":"http://home.meishichina.com/space-7407908.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314975.html",
									    "img":"../image/caipu/nx.jpg",
									    "title":"柠香玛德琳",
									    "author":"印象时光",
									    "authorUrl":"http://home.meishichina.com/space-9754684.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-333123.html",
									    "img":"../image/caipu/fsts.jpg",
									    "title":"法式吐司",
									    "author":"狸小胖",
									    "authorUrl":"http://home.meishichina.com/space-9650652.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-337472.html",
									    "img":"../image/caipu/ky.jpg",
									    "title":"开洋煮冬瓜",
									    "author":"花鱼儿",
									    "authorUrl":"http://home.meishichina.com/space-404188.html"
									}
								];
						
		var tjUL=caipuData;console.log(caipuData);
       var tjData=data1;
       var hotData=data1;
       var tangData=data1;
       var littleData=data1;
       var cookData=data1;
        var tjUL=document.querySelector('.tjData');
         var hotUL=document.querySelector('.hotData');
          var tangUL=document.querySelector('.tangData');
          
		tjUL.innerHTML="";
		hotUL.innerHTML="";
		tangUL.innerHTML="";
		
		for(var i=0;i<tjData.length;i++){
			tjUL.innerHTML+='<li>'
			+'	<a href='+tjData[i].href+'>'
			+'		<i><img src='+tjData[i].img+' width="233" height="230"/></i>'
			+'			<span>'+tjData[i].title+'</span>'
			+'	 </a>'
			+'	 <p><a href="'+tjData[i].authorUrl+'">'+tjData[i].author+'</a></p>'
								
			+'</li>';
			
		};
		for(var i=0;i<hotData.length;i++){
			hotUL.innerHTML+='<li>'
			+'	<a href='+hotData[i].href+'>'
			+'		<i><img src='+hotData[i].img+' width="233" height="230"/></i>'
			+'			<span>'+hotData[i].title+'</span>'
			+'	 </a>'
			+'	 <p><a href="'+hotData[i].authorUrl+'">'+hotData[i].author+'</a></p>'
								
			+'</li>';
			
		};
		for(var i=0;i<tangData.length;i++){
			tangUL.innerHTML+='<li>'
			+'	<a href='+tangData[i].href+'>'
			+'		<i><img src='+tangData[i].img+' width="233" height="230"/></i>'
			+'			<span>'+tangData[i].title+'</span>'
			+'	 </a>'
			+'	 <p><a href="'+tangData[i].authorUrl+'">'+tangData[i].author+'</a></p>'
								
			+'</li>';
			
		}

	};
	function newData(){
		var data2=
								[
									
									{
										"href":"http://home.meishichina.com/recipe-315007.html",
									    "img":"../image/caipu/rl.jpg",
									    "title":"乳酪小蛋糕",
									    "author":"万山红",
									    "authorUrl":"http://home.meishichina.com/space-272949.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315038.html",
									    "img":"../image/caipu/xs.jpg",
									    "title":"香酥鲤鱼",
									    "author":"黄豆豆的一家",
									    "authorUrl":"http://home.meishichina.com/space-549055.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315011.html",
									    "img":"../image/caipu/rg.jpg",
									    "title":"肉桂苹果派",
									    "author":"s姐_絮",
									    "authorUrl":"http://home.meishichina.com/space-9983821.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315034.html",
									    "img":"../image/caipu/hx.jpg",
									    "title":"海鲜披萨",
									    "author":"Q猪宝宝",
									    "authorUrl":"http://home.meishichina.com/space-6553005.html"
									},
									{
										"href":"http://home.meishichina.com/space-9693501.html",
									    "img":"../image/caipu/qw.jpg",
									    "title":"青蛙挤挤面包",
									    "author":"爱蓝胖子的diao",
									    "authorUrl":"http://home.meishichina.com/space-9693501.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-333123.html",
									    "img":"http://i3.meishichina.com/attachment/recipe/2017/07/16/20170716150019733376313.jpg",
									    "title":"法式吐司",
									    "author":"狸小胖",
									    "authorUrl":"http://home.meishichina.com/space-9650652.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315055.html",
									    "img":"../image/caipu/hmg.jpg",
									    "title":"黄玫瑰",
									    "author":"沙儿飞飞❉",
									    "authorUrl":"http://home.meishichina.com/space-9012879.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315066.html",
									    "img":"../image/caipu/cx.jpg",
									    "title":"豉香土豆片",
									    "author":"厨娘宋宋",
									    "authorUrl":"http://home.meishichina.com/space-9823148.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315064.html",
									    "img":"../image/caipu/sc.jpg",
									    "title":"水炒鸡蛋",
									    "author":"卜卜贝",
									    "authorUrl":"http://home.meishichina.com/space-10008152.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315004.html",
									    "img":"../image/caipu/rm.jpg",
									    "title":"肉末豆腐",
									    "author":"祯祯宝贝",
									    "authorUrl":"http://home.meishichina.com/space-6673714.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314807.html",
									    "img":"../image/caipu/bc.jpg",
									    "title":"菠菜戚风蛋糕",
									    "author":"清水淡竹",
									    "authorUrl":"http://home.meishichina.com/space-8451954.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315001.html",
									    "img":"../image/caipu/jf.jpg",
									    "title":"减肥排毒-海带豆腐汤",
									    "author":"五只狸",
									    "authorUrl":"http://home.meishichina.com/space-7832720.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315008.html",
									    "img":"../image/caipu/ksh.jpg",
									    "title":"烤生蚝",
									    "author":"胖子瘦子我都爱",
									    "authorUrl":"http://home.meishichina.com/space-9218939.html"
									},
									{
										"href":"#",
									    "img":"../image/caipu/zsy.jpg",
									    "title":"紫山药豌豆杂粮粥",
									    "author":"柚子小吃货",
									    "authorUrl":"http://home.meishichina.com/recipe-315006.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315003.html",
									    "img":"../image/caipu/cyg.jpg",
									    "title":"撑腰糕",
									    "author":"麦子老妈",
									    "authorUrl":"http://home.meishichina.com/space-8041796.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314997.html",
									    "img":"../image/caipu/yy.jpg",
									    "title":"洋芋擦擦",
									    "author":"泥鳅的主食厨房",
									    "authorUrl":"http://home.meishichina.com/space-8607065.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314979.html",
									    "img":"../image/caipu/zz.jpg",
									    "title":"自制披萨皮",
									    "author":"Q猪宝宝",
									    "authorUrl":"http://home.meishichina.com/space-6553005.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314971.html",
									    "img":"../image/caipu/mg01.jpg",
									    "title":"芒果千层",
									    "author":"薇笑的鱼",
									    "authorUrl":"http://home.meishichina.com/space-7407908.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-314975.html",
									    "img":"../image/caipu/nx.jpg",
									    "title":"柠香玛德琳",
									    "author":"印象时光",
									    "authorUrl":"http://home.meishichina.com/space-9754684.html"
									},
									{
										"href":"http://home.meishichina.com/recipe-315032.html",
									   "img":"../image/caipu/cp552.jpg",
									    "title":"国宝熊猫挤挤小面包",
									    "author":"爱蓝胖子的diao",
									    "authorUrl":"http://home.meishichina.com/space-9693501.html"
									}
								];
								var newData=data2;
								var coolData=data2;
						
//		var newUL=caipuData;
//var data2UL=document.querySelector('.menu_content').children[0];
//console.log(data2UL);
var newUL=document.querySelector('.newData');
var coolUL=document.querySelector('.coolData');
		newUL.innerHTML="";
		coolUL.innerHTML="";
		
				for(var i=0;i<newData.length;i++){
				
				newUL.innerHTML+='<li>'
				+'	<a href='+newData[i].href+'>'
				+'		<i><img src='+newData[i].img+' width="233" height="230"/></i>'
				+'			<span>'+newData[i].title+'</span>'
				+'	 </a>'
				+'	 <p><a href="'+newData[i].authorUrl+'">'+newData[i].author+'</a></p>'
									
				+'</li>';
				
			}
		
	
				for(var i=0;i<coolData.length;i++){
				
				coolUL.innerHTML+='<li>'
				+'	<a href='+coolData[i].href+'>'
				+'		<i><img src='+coolData[i].img+' width="233" height="230"/></i>'
				+'			<span>'+coolData[i].title+'</span>'
				+'	 </a>'
				+'	 <p><a href="'+coolData[i].authorUrl+'">'+coolData[i].author+'</a></p>'
									
				+'</li>';
				
			}
			console.log("凉菜");
			console.log(coolData.length);

		
		
		
	}
}




var createJsonData=function(pageItem){

	var SwiperConfig={
		bgSound=$.val(),
		sliderData:[]
	}

	$.each(pageItem,function(k,v){
		var bg=v.bgurl;
		var textArr=[],photoArr=[];
		 v.find('.text').each(function(t){
		 	 textArr.push({
		          textValue:t.html(),
		          animateType:$(this).attr('data-animateType'),
		          delay:t.delay,
		          position:['4%','13%'],
		          style:t.style
		 	 })
		   });
		 v.find('.photo').each(function(t){
			 	 photoArr.push({
					src:'img/akj1_1.jpg',
			        animateType:'bounceIn ',
			        delay:0,
			        position:['2%','3%'],
			        style:'width:20%'
			 	 })
		   });
	})

   SwiperConfig.sliderData.push({
			bg:v.bgurl;
			text:textArr,
			photo:photoArr
		})	
   return SwiperConfig


}
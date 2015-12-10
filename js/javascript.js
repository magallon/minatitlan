$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 100){	
			if(!flag){
				$("#logo").css({"margin-top": "25px", "width": "100px","height":"50px"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "450px","height":"200px"});
				flag = false;
			}
		}


	});

});
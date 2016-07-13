;(function($){
	$.dialog=function(option){
		return new dialog(option);
	}
	function dialog(option){
		var defaults={
			title:'',
			close:'',
			msg:'',
			btn:[
			        {text:'确定',className:'ok'},
			        {text:'取消',className:'no'},
			    ],
			btn1Event:null,
			btn2Event:null
		}
		defaults=$.extend({},defaults,option);
		addDialog(defaults);
		addEvent(defaults);
	}
	function addDialog(defaults){
		var html=$('<div class="mask"></div>'
				+'<div class="dialog-box animated bounceInUp">'
					+'<p class="dialog-title"><img class="close" src="../img/dia-close.png" alt="" /> </p>'
					+'<div class="dialog-img"><img src="../img/dia-bg.png"/></div> '
					+'<h1 class="dialog-msg">'+defaults.msg+'</h1>'
					+'<div class="dialog-btn-wrap ok"></div>'
				+'</div>');
		$('body').append(html);
		addBtn(defaults);
	}
	function addBtn(defaults){
		if(defaults.btn.length==0) return false;
		for(var i=0,len=defaults.btn.length;i<len;i++){
			var close=$('<span class="dialog-btn '+defaults.btn[i].className+'"><a href="javascript:;">'+defaults.btn[i].text+'</a></span>')
			$('.dialog-btn-wrap').append(close);
		}
	}
	function addEvent(defaults){
		var dft=defaults;
		$('.close').on('click',function(){
			btnsEvent();
		})
		$('.dialog-btn-wrap').on('click',function(){
			btnsEvent();
		})
		$('.btn').on('click',function(){
			dft.btn1Event();
			return;
		})
		$('.no').on('click',function(){
			dft.btn2Event && dft.btn2Event();
		})
	}
	function btnsEvent(){
		$('.mask').remove();
		$('.dialog-box').remove();
	}
})(Zepto)
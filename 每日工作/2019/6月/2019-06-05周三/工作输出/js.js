 
function content(a,b){
 if(prompt("输入密码")=='cqgw123')
 {	
	  $(a).html(b);
 }else{
	 $(a).html("<p>你无权查看</p>");
	}  
}
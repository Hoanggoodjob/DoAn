function calculator(operator)
{	var a,b,result=document.getElementById('result');
	a=document.getElementById('x').value;
	b=document.getElementById('y').value;
	switch(operator)
	{
		case "tong":result.innerHTML=tong(a,b);
			$('#result').css({'background':'red','color':'white'});
			break;
		case "hieu":result.innerHTML=hieu(a,b);
			result.style.color='white';
			result.style.background='green';
			break;
		case "nhan":result.innerHTML=nhan(a,b);
			result.style.color='white';
			result.style.background='red';
			break;
		case "chia":result.innerHTML=chia(a,b);break;
	}
}
function tong(x,y)
{	return parseInt(x)+parseInt(y);}
function hieu(x,y)
{	return parseInt(x)-parseInt(y);}
function nhan(x,y)
{	return parseInt(x)*parseInt(y);}
function chia(x,y)
{	var result;
	if(parseInt(y)!=0)
		result=parseInt(x)/parseInt(y);
	else
		result="Mẫu số phải khác 0";
	return result;
}
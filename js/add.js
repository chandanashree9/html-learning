(
	function(){

		this.htmlControls={
			txtNum:document.getElementById("txtNumber"),
			addBtn:document.getElementById("addbtn"),
			divAdd:document.getElementById("divadd")
		};

		function init(){
			console.log("Enter into init");
			htmlControls.divAdd.style.display="none";
			htmlControls.addBtn.addEventListener("click",addition);
			htmlControls.txtNum.addEventListener("keypress",validate);
		}

		function addition(){
			var input = htmlControls.txtNum.value;
			console.log("Enter into addition ::"+input);
			var output=0;
			if(input != undefined && input != '')
			{
				if(input.indexOf(',') != -1)
				{					
					var str = input.split(',');
					console.log(str);
					for(var i=0;i<str.length;i++)
					{
						output = output + parseInt(str[i]);
					}					
				}
				else
				{
					output=input;
				}
			}
			htmlControls.divAdd.style.display="inline";
			htmlControls.divAdd.innerHTML="Answer is:"+ output;
		}

		function validate(evt)
		{
			if(!((evt.keyCode>47 && evt.keyCode<58) || evt.keyCode==46 || evt.keyCode==44))
			{
				evt.preventDefault();
			}
		}

		init();
	}
)();
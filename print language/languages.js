function savedata()
		{
		var i,j;
		var lang=new Array();
		
	j=document.getElementById('lang').value;	
		for(i=0;i<j;i++)
		{
			 lang[i]=window.prompt("Enter your language");	 
				
		}

              var content="<h1>languages you enter are :</h1><br>";
			for(i=0;i<j;i++)
		{
			content+=lang[i]+"</br>";
			
		}
		document.getElementById('display').innerHTML = content;
			
		}
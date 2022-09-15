function dvloop() {
    var x = document.getElementById("dvloop");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function dvcon() {
      var x = document.getElementById('dvcon');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  function dvif() {
      var x = document.getElementById('dvconif');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  function checkif()
              {
               var age;
              age=Number(document.getElementById("age").value);
               if (age > 18) {
              
               document.getElementById('displayif').textContent="your age is: "+age +", you are eligible to vote";
              }
          }
  
              function dvelse() {
      var x = document.getElementById('dvconelse');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  function checkelse()
              {
               var hour;
              hour=Number(document.getElementById("hour").value);
              if (hour < 18) {
              
               document.getElementById('displayelse').textContent="hour is: "+hour +", Good day";
             } else
              document.getElementById('displayelse').textContent="hour  is: "+hour +", Good evening"; 
              
          }
            
        
          function dvifelse() {
      var x = document.getElementById('dvconifelse');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  
  function checkifelse()
              {
               var no;
              no=Number(document.getElementById("no").value);
               if(no>0 )
              
               document.getElementById('displayifelse').textContent="number: "+no +", number is positive ";
               else   if(no<0 )
               document.getElementById('displayifelse').textContent="number: "+no +", number is negative "; 
               else  if(no=0)
               document.getElementById('displayifelse').textContent="number: "+no +", number is 0"; 
              
              }   
          
          function dvswitch() {
      var x = document.getElementById('dvconswitch');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  
  function checkswitch()
              {
               var score;
              score=Number(document.getElementById("marks").value);
              switch(true) {
      case (score <= 100 && score >= 90):
               document.getElementById('displayswitch').textContent="marks: "+score +", grade is A+ ";
               break;
      case (score <= 89 && score >= 80):
               document.getElementById('displayswitch').textContent="marks: "+score +", grade is A "; 
               break;
      case (score <= 79 && score >= 70):
               document.getElementById('displayswitch').textContent="marks: "+score +", grade is B"; 
               break;
         case (score <= 69 && score >= 60):
        
               document.getElementById('displayswitch').textContent="marks: "+score +", grade is C "; 
               break;
      case (score <= 59 && score >= 40):
       
               document.getElementById('displayswitch').textContent="marks: "+score +", grade is D "; 
              break;
              default: 
               document.getElementById('displayswitch').textContent="marks: "+score +", fail "; 
              }
          }
          function dvfor() {
      var x = document.getElementById('dvloopfor');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  
  function checkfor()
              {
               var num;
              num=Number(document.getElementById("num").value);
              
              sum=0;
  for (let i = 1; i <= num; i++) {
             sum+=i;
             }  document.getElementById('displayfor').textContent=sum;
              }   
  
  
  
              function dvwhile() {
      var x = document.getElementById('dvloopwhile');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  
  function checkwhile()
              {
                  var f1,l1, result=' ';
              f1=Number(document.getElementById("f1").value);
              l1=Number(document.getElementById("l1").value);
             
             
           
              while (f1 <= l1) {
                  f1 = f1 + 1;
    result = result + f1;
  }
  document.getElementById('displaywhile').textContent=result;
              }   
  
              function dvdo() {
      var x = document.getElementById('dvloopdo');
      if (x.style.display == 'none') {
          x.style.display = 'block';
      } else {
          x.style.display = 'none';
      }
  }
  
  function checkdo()
              {
              
                  var n,  less=' ';
              n=Number(document.getElementById("tab").value);
            
             
             
              do {
                  n= n- 1;
                  less = less + n;
               
  }while (n >0)
  document.getElementById('displaydo').innerHTML=less;
           
              
          
    }
               
  
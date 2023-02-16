 function getinput(input){
     const income = document.getElementById(input);
     const string =parseInt(income.value);
     return string;
 }
 function setvalue(input,value){
    const totalExpence = document.getElementById(input);
    totalExpence.innerText = value;
    
 }

document.getElementById('calculate').addEventListener('click',function(){
       const totalincome = getinput('income');
      
      const food = getinput('food');
      const rent = getinput('rent');
      const cloths = getinput('cloths');
      const totalbay = food+rent+cloths;
       if(totalincome<=0 || food<=0 || rent<=0 || cloths<=0 ||totalincome<totalbay){
            alert('please provide your amount');
            return;
       }
       if(isNaN(totalincome)|| isNaN(food) || isNaN(rent) || isNaN(cloths)){
          alert('please your amount');
          return;
       }
     
    
      const totalExpenceBalence = totalincome-totalbay;
       setvalue('total-expen',totalbay);
       setvalue('balance',totalExpenceBalence);
   

     
     
})
document.getElementById('savebtn').addEventListener('click',function(){
     const persent = getinput('parsent');
     if(persent>100 || isNaN(persent)){
         alert('please your valid amount persent');
         return;

     }
     const totaltaka = persent/100;
     const totalincome = getinput('income');
     const food = getinput('food');
      const rent = getinput('rent');
      const cloths = getinput('cloths');
      const totalbay = food+rent+cloths;
      const totalExpenceBalence = totalincome-totalbay;
     const savingtaka  = totalincome*totaltaka;
    
     const remingtaka = totalExpenceBalence-savingtaka;
      setvalue('save',savingtaka);
      setvalue('remaining',remingtaka);
    

      
     
})
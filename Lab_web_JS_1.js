      let name = prompt('Enter you name','');
      while (name == null || name.length === 0){
      name = prompt('Enter you name again!','');
      }
      let age = Number(prompt('Enter you age',''));
      while (age == null || age == "" || isNaN(age)){
      age = prompt('Enter you age again! Write digital number','');
}
if (age < 18){
							alert("       So little... \n You are not allowed to visit this website");
              console.log("Данные: " + name + age);
  }else if(age >= 18 && age <= 22){
  						result = confirm("Are you sure you want to continue?");
              
              if (result === true) alert("Welcome, " + name + age);
              	else alert("You are not allowed to visit this website");
              console.log("Результат: " + result);
              
    }else  if(age > 22 ){
    
      alert("Welcome, " + name);
      console.log("Данные: " + name + age);
    }
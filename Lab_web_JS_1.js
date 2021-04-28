let name = prompt('Enter you name','');                             //Обьявляем и сразу же определяем имя
  while (name == null || name.length === 0){                        //Проверка на неверный ввод     
    name = prompt('Enter you name again!','');                      //Определение имени при неправильном вводе
  }

let age = Number(prompt('Enter you age',''));                       //Обьявляем и сразу же определяем возраст
  while (age == null || age == "" || isNaN(age)){                   //Проверка на неверный ввод 
    age = prompt('Enter you age again! Write digital number','');   //Определение возраста при неправильном вводе
  }
    if (age < 18){                                                  //Проверка есть ли посетителю меньше 18 лет
			alert("       So little... \n " + 
      "You are not allowed to visit this website");                 //Вывод соответствующего сообщения если нету 18 лет
      console.log("Данные: " + name + age);                         //Вывод результата ввода

    }else if(age >= 18 && age <= 22){                               //Если есть 18 провести проверку есть ли посетителю от 18 до 22 лет
  		result = confirm("Are you sure you want to continue?");       //Подтверждающая строка продолжения операции входа
        if (result === true) alert("Welcome, " + name + age);       //Проверка на вход и соответсвующего сообщения при согласию
          else alert("You are not allowed to visit this website");  //Вывод соответсвующего сообщения при отказе
            console.log("Результат: " + result);                    //Вывод результата ввода 
            
    }else if(age > 22 ){                                            //Проверка есть ли посетителю больше чем 22 года
      alert("Welcome, " + name);                                    //Вывод соответсвующего сообщения
      console.log("Данные: " + name + age);                         //Вывод результата ввода
    }
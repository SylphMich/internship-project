document.getElementById('clear').addEventListener("click", function(){
    localStorage.clear()
})

const signUp = e => {
  let names = document.getElementById('names').value,
      email = document.getElementById('email').value,
      pwd = document.getElementById('pwd').value;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.names.toLowerCase() == names.toLowerCase() )

  if(!exist){
      formData.push({ names, email, pwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('names').focus();
      alert("Акаунт създаден");
  }
  else{
      alert("Вече сте влезнали");
  }
  e.preventDefault();
}

function signIn(e) {
  let names = document.getElementById('names').value, pwd = document.getElementById('pwd').value;
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist = formData.length && 
  JSON.parse(localStorage.getItem('formData')).some(data => data.names.toLowerCase() == names && data.pwd.toLowerCase() == pwd);
  if(!exist){
      alert("Грешно име или парола.");
  }
  else{
      location.href = "Menu.html";
  }
  e.preventDefault();
}

const charmake = e => {
    let namechar = document.getElementById('namechar').value, 
        attack = document.getElementById('attack').value, 
        defence = document.getElementById('defence').value, 
        health = document.getElementById('health').value;

    let hero = JSON.parse(localStorage.getItem('hero')) || [];

    let exist = hero.length &&
        JSON.parse(localStorage.getItem('hero')).some(data => data.namechar.toLowerCase() == namechar.toLowerCase());

    if (!exist) {
        hero.push({ namechar, attack, defence, health });
        localStorage.setItem('charstats', JSON.stringify(hero));
        document.querySelector('form').reset();
        document.getElementById('namechar').focus();
        alert("Герой Създаден");
    }
    else {
        alert("Вече съществува такъв герой");
    }
    e.preventDefault();
}



function submit() {
    var names = document.getElementById("names").value;
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    allNames.push(names);
    localStorage.setItem("allNames", JSON.stringify(allNames));
    document.getElementById("names").value = '';
    document.getElementById("namesList").innerHTML = localStorage.getItem("allNames");
  }
  
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
      alert("Вече сте влезнали.");
  }
  e.preventDefault();
}

function signIn(e) {
  let names = document.getElementById('names').value, pwd = document.getElementById('pwd').value;
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist = formData.length && 
  JSON.parse(localStorage.getItem('formData')).some(data => data.names.toLowerCase() == names && data.pwd.toLowerCase() == pwd);
  if(!exist){
      alert("Incorrect login credentials");
  }
  else{
      location.href = "Menu.html";
  }
  e.preventDefault();
}

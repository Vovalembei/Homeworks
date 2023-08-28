const form = document.querySelector(".form")
const users =[];
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.Email.value);
  console.log(e.target.Password.value);
  addUser(e.target.Email.value, e.target.Password.value, users.length);
};
form.addEventListener("submit", handleSubmit);
const addUser = (email, password, id) =>{
    const user = {
        login : email, 
        password : password, 
        id : id,
    } 
    users.push(user);
    clearForm();
}
console.log(users);
clearForm = () => {
    form.reset();
}
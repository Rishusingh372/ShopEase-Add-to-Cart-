let user =JSON.parse(localStorage.getItem("user")|| '[]') ;

const userdata=(e)=>{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let number=document.getElementById('number').value;
    let pass=document.getElementById('pass').value;
    let z={name,email,number,pass};
    user.push(z);
    localStorage.setItem("user",JSON.stringify(user));
    // console.log(user);
    // alert("hello")

    window.location.href="Login.html";
    // window.location.href="../Addto cart/add_to_cart.html";

}

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("form").addEventListener("submit",userdata);
})




let api="http://localhost:3300/users/login"

const getData=async(e) => {
    e.preventDefault();
    let obj={
        "email":document.getElementById("email").value,
        "password":document.getElementById("password").value
    }
   try{
    let res1= await fetch(`${api}`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(obj)
    })
    let res2= await res1.json();
    if(res2.success){
        alert("Logged in successfully")
        localStorage.setItem("token", JSON.stringify(res2.message))
        window.location.href = "/tictac.html"
    }else{
        alert(res2.message)
    }
   }catch(err){
    alert("Something went wrong")
   }
}
document.querySelector("form").addEventListener("submit",getData)
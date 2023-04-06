

let api="http://localhost:3300/users/register"
const getData=async(e) => {
    e.preventDefault();
    let obj={
        "name": document.getElementById("name").value,
        "email":document.getElementById("email").value,
        "password":document.getElementById("password").value,
        "gender":document.getElementById("gender").value,
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
        alert("Sign up successfully")
        window.location.href = "index.html"
    }else{
        alert(res2.message)
    }
   }catch(err){
    alert("Something went wrong")
   }
}
document.querySelector("form").addEventListener("submit",getData)
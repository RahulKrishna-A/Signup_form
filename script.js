pass = document.querySelector("#pass1")
cpass= document.querySelector("#pass2")
submit = document.querySelector("button")

submit.addEventListener("click",()=>{
   if(pass===cpass){
      if(pass.classList.contains("pass")){
         pass.classList.remove("pass")
         cpass.classList.remove("red")
         pass.classList.remove("red")
      }
      else {}

   }else{
      pass.classList.add("pass")
      cpass.classList.add("red")
      pass.classList.add("red")



   }
})


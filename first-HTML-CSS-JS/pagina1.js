function toggleMode() {
   const html = document.documentElement

   if(html.classList.contains("light")){
        html.classList.remove("light")
    } else{
        html.classList.add("light")
    }
    //tambem pode ser feito desse maneira
    //html.classList.toggle("light")
}
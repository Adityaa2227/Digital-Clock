let div=document.querySelector('#clock');

setInterval(()=>{
  let time=new Date();
  div.innerText=time.toLocaleTimeString();

},1000);
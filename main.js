var nombre="José Alfredo Pérez Nazario";

        let edad=20;
        let title=document.getElementById('titulo');
        let msj = "Mi nombre es "+nombre+" y mi edad es "+(edad+1);

        console.log(msj);
        title.innerHTML=msj;
        
        title.style.color= 'green';
        title.style.textTransform= 'uppercase';
        title.onclick=function(){

            title.style.textTransform = 'lowercase'
            title.innerHTML="<img src='https://media1.giphy.com/media/h3NG7ZmTxy3jW/giphy.gif?cid=ecf05e475d6w6ro15nbf2kqaj19c8qrovc5ywrhjlohupkiv&rid=giphy.gif&ct=g'><p>¡Bienvenido a Javascript!</p>";}
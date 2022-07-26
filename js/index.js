
let email=document.getElementById('email');
let val

const sectionf=document.querySelector('#section-fetch');


async function datafetch(){
    let url="./js/data.json"
    await fetch(url)
    .then(res=>res.json())
    .then((data)=>
        {   
          

            let arr=data.items;
            return arr
            
                
        }
    )
    .then((arr)=>{
        let html="";

        arr.forEach(element => {

            html=html+`<div class="textspace" style="display: grid;">
            <h6 class="text">${element.title}</h6>
            <p>${element.p} </p>
            <a  href="${element.link.url}" >Read more...</a>
            </div>

            <div class="div_flex_container1">
            <div class=" grow div_space">
                <img class="imgdiv" src="${element.img1.url}"  alt="${element.title}">
            </div>
            <div class=" grow div_space">
                <img class="imgdiv" src="${element.img2.url}" alt="${element.title}">
            </div>
         

            </div> `
               
        });
        sectionf.innerHTML=html;

    })

    .catch((e)=>{console.log(e.message)});
    
}

datafetch();



function print(){
    val=email.value;
}



    
  
    
function mail(){
    if (val!=undefined){
        alert(`Thank you for Subscribe ${val}`)
        val="";
        email.value=""
    }
}

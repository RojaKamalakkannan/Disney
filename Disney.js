var title=document.createElement('H1')
title.setAttribute('id', 'title')
title.setAttribute('class', 'text-center')
title.innerText=("Disney")
document.body.appendChild(title)

let cont=document.createElement("div");
cont.setAttribute("class", "containerfluid");
document.body.append(cont);


let row = document.createElement("div")
row.setAttribute("class", "row");
cont.appendChild(row);




fetch("https://api.disneyapi.dev/characters")
.then((d)=>d.json())
.then((data)=>{
    console.log(data);
   console.log(data.data.length);
 for (let i=0; i<data.data.length; i++){
   
        a=data.data[i]
        row.innerHTML+=`
        
        <div class="col-lg-4 col-md-4 col-sm-6 col-xl-4 p-3 mx-auto" >
        <div  class="card border text-black  h-100 m-3" style="width: 18rem;">
            <div class="card-header text-center "> ${a._id}<div>
                
            <img src=${a.imageUrl} class="card-img-top">
                <div class="card-text"> Name:${a.name}<br>
                 TvShow:${a.tvShows}<br>
                 VideoGame:${a.videoGames}</div>
                 <button onclick="Check('${a.url}','ans${a._id}')">For more Details</button>
<div id="ans${a._id}"></div>
   </div>
   <div>
    
    </div>
    `
    
    
    }
})

.catch((er)=>{
    console.log("er")
})

function Check(a,m){
    
    document.getElementById(m).innerHTML=a

}
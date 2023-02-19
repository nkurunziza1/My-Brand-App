
// on making sidebar menu

let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})
let getBlogValue;
async function getMainArticles(){

let mainArticles  = document.getElementById('main-articles')
// let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))


await axios.get("https://alexandre-nkurunziza.onrender.com/api/v1/blogs")
    .then((res)=>{
        console.log("response", res)
      getBlogValue = res.data
    }).catch((err)=>{
      console.log("error:", err)
    })

while(getBlogValue < 3){
    
        let mainHOld = document.createElement('div')
        mainHOld.className = "classic";
      console.log(getBlogValue)
        mainHOld.innerHTML =`
        
        <a href="alborton.html?id= '${getBlogValue._id}'">${getBlogValue.title}</a>
        <img src="${getBlogValue.image}" alt=""">
        <p>${getBlogValue.summary}</p>
        <div class="like-comment-share">
            <img src="/imge&icon/hand like.png" alt="">
            <img src="/imge&icon/chat comment.png" alt="" id="comment-btn">
            <!-- <img src="/imge&icon/share icon.png" alt=""> -->
        </div>
        <div class="like-share-comment-p">
            <p><span style="color: red; margin-right: 5px;">${getBlogValue.likes}</span>Likes</p>
            <p><span style="color: red; margin-right: 5px;">${getBlogValue.comments}</span>Comment</p>
            <!-- <p><span style="color: red; margin-right: 5px;">12</span>Share</p> -->
      
       
        `  
        mainArticles.appendChild(mainHOld)
    }
  
 
}



getMainArticles()
// mainArticles.innerHTML =`
// <h3><a href="/alborton.html?id=${getBlogItems[0].id}">${getBlogItems[0].blogTitleInputValue}</a></h3>
// <img src="${ getBlogItems[0].blogImageTitle}">
// <img src="/imge&icon/hand like.png" alt="">
// <img src="/imge&icon/chat comment.png" alt="" id="comment-btn">

// `

// how to extract a query parameter from a link using javascript.





 
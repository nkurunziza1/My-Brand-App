let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})


async function takeBlogView(){
    let blogBlock = document.getElementById('all-blogs-content')
    let loadinghold = document.getElementById("loading-hold")
    let loadingText = document.getElementById('loading')
    // let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))
    let getBlogValue;

    loadingText.innerHTML = `Loading...`

    loadinghold.append(loadingText)
    
    // let getBlogValue;
    await axios.get("https://alexandre-nkurunziza.onrender.com/api/v1/blogs").then((res)=>{
      getBlogValue = res.data.blog
    }).catch((err)=>{
      console.log("error:", err)
    })

     loadingText.innerHTML = ''
    
    for(const value of getBlogValue){
        let blogHold = document.createElement('div')
        blogHold.style.width = "200px";
        
        
        blogHold.innerHTML = `

        <div class="music-img"> 
        <a href="/alborton.html?id=${value._id}">${value.title}</a>
        <img src="${value.image}">
        <p>${value.summary}</p>
      </div>
        <div class="like-comment-share">
                <img src="/imge&icon/hand like.png" alt="">
                <img src="/imge&icon/chat comment.png" alt="" id="comment-btn">
                <!-- <img src="/imge&icon/share icon.png" alt=""> -->
            </div>
            <div class="like-share-comment-p">
            <p><span style="color: red; margin-right: 5px;">${value.likes}</span>Likes</p>
            <p><span style="color: red; margin-right: 5px;">${value.commentCount}</span>Comment</p>
            <!-- <p><span style="color: red; margin-right: 5px;">12</span>Share</p> -->
        </div>   
        `
        
        blogBlock.appendChild(blogHold)
       
  
 
    }  

    // localStorage.setItem('blogValues', JSON.stringify(getBlogValue ))
  }
 
  // takeBlogView()

// let params = (new URL(document.location)).searchParams;
// let name = params.get('id')

// console.log(name)

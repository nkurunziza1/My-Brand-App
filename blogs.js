let openMenu = document.getElementById('open')
let menu = document.getElementById('menu') 

openMenu.addEventListener('click',function(){
    menu.classList.toggle('active')  
})


  let params = (new URL(document.location)).searchParams;
  let blogID = params.get('id')
  
  
  // const getStorage =JSON.parse(localStorage.getItem('blogValues')) ;

// wibuke ko getStorage is an array
// const blogContent = getStorage.find(x => x.id == name)

async function takeBlogView(){
  let blogContent;

  await axios.get(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${blogID}`).then((res)=>{
    console.log(res)
    blogContent = res.data;

  }).catch((error)=>{
    console.log("Blog error: ", error);
  })

  let blogDisplay = document.getElementById('blog-display')
    
        blogDisplay.innerHTML = `
        <div class="single-blog" id="blog-display">
      
        <h1><a href="">${blogContent.title}</a></h1>
        <img src="${blogContent.image}"></img>
       <p>
       ${blogContent.content}
       </p>
      <div style='display:flex;'>
       <i><img src="/imge&icon/heart like.png" alt="" onclick ="like()"></i>
       <p style="display:flex" ><span style="color: red; margin-right: 5px; " >${blogContent.likes}</span>Likes</p>
       <i><img src="/imge&icon/chat comment.png" alt="" onclick ="like()"></i>
       <p id="comments-number"><span style="color: red; margin-right: 5px;">${blogContent.commentCount}</span>Comments</p>
       </div>
       <input type="text" placeholder="Enter a name" id="comment-name" 
       class="comment-input"> <br>
       <input type="text" placeholder="Leave comment here" id="comment-input" 
       class="comment-input">
       <input type="submit" name="" value="submit" 
       onclick='comment()' class="comment-submit">
        <div class="hold-comment" id="hold-comment">
      <h3>Review comments</h3>
     
    </div>
        `
       
    } 
 
  takeBlogView()
let commentInput = document.getElementById('comment-input')
let commentName = document.getElementById('comment-name')
let commentSubmit = document.getElementById('comment-submit')

 async function like(){
    // let params = (new URL(document.location)).searchParams;
    // let name = params.get('id')

    // let getStorage =JSON.parse(localStorage.getItem('blogValues')) ;
// wibuke ko getStorage is an array
// let blogContent = getStorage.find(x => x.id == name)

const likes = { $inc: { likes: 1 } }
            

axios.post(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${blogID}/likes`, likes)
.then((res =>{console.log(res.data)}))
.catch((error)=>{console.log('error:' ,error)})
 
// blogContent.likes +=1

// const blogIndex = getStorage.findIndex(x => x.id == name)

// getStorage[blogIndex] = blogContent;

// localStorage.setItem('blogValues', JSON.stringify(getStorage)) 

// window.location.reload()
}


async function comment(){
let commentInputValue = document.getElementById('comment-input').value;
let nameInputValue = document.getElementById('comment-name').value
  if(commentInputValue === '' || nameInputValue==="")  {
    commentInput.style.borderColor = 'red'
    commentName.style.borderColor = 'red'
  }else{
    // let params = (new URL(document.location)).searchParams;
    // let name = params.get('id')
    let commentValue = document.getElementById('comment-input').value;
    let nameValue = document.getElementById('comment-name').value;
    
   
    // let getStorage =JSON.parse(localStorage.getItem('blogValues'))
   
    // let blogContent = getStorage.find(x => x.id == name) 

    

    // blogContent.commentWords.push({
    //     id:blogContent.commentWords.length +1,
    //     articleId:name,
    //     commentvalue:commentValue,
    //     nameValue:nameValue
    // })
    
    // blogContent.comments +=1
    
    // const blogIndex = getStorage.findIndex(x => x.id == name)

    // getStorage[blogIndex] = blogContent;
    
    // localStorage.setItem('blogValues', JSON.stringify(getStorage))
    
    const formData = 
    {
      "name": nameValue,
      "comment":  commentValue
    }
    
    axios.post(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${blogID}/comments`, formData).then(res =>{
         console.log("response: ", res)
     }).catch((error)=>{
      console.log("error :" ,error)
     })

    
  }
  
}

  async function displayComment(){
    // let getStore =JSON.parse(localStorage.getItem('blogValues'))
    let commentsContents;

    await axios.get(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${blogID}/comments`).then((res)=>{
      commentsContents = res.data;
    }).catch((error)=>{
      console.log("Blog comments error: ", error);
    })

    let commentAppend = document.getElementById('hold-comment')


  index = 1
  for(let val of commentsContents){
    let div = document.createElement('div')
   
    div.innerHTML = `${index}.<span style="color:#000090; font-size:20px;">${val.name}:</span>   <span style="opacity:70%; 
         font-family:  Geneva, Verdana, sans-serif;">${val.comment}</span>`
    commentAppend.appendChild(div)
    index++;
  }

}
  
displayComment()

async function countComment(){
  const commentsNumber = 0
  await axios.get(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${blogID}/comments`).then((res)=>{
    commentsNumber = res.data.length;
  }).catch((error)=>{
    console.log("Blog comments error: ", error);
  })

  return commentsNumber
}
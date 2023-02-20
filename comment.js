let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })
   let params = (new URL(document.location)).searchParams;
   let name = params.get('id')
   let token = localStorage.getItem("token")

   let getStore;
   function deleteComment(id){
      //  let  getStore= JSON.parse(localStorage.getItem('blogValues'))
      let index1 = getStore.findIndex((obj) => obj._id === id)
      console.log(index1, id)
      axios.delete(`https://sparkling-petticoat-bull.cyclic.app/api/v1/comments/${id}`,{
        headers:{
          'Authorization': 'Bearer ' + token
        }
      })

      .then((res)=>{
        console.log("response", res)
        getStore.splice(index1, 1)
      }).catch((err)=>{
        console.log("error", err)
      })

      
      
  
      //localStorage.setItem('blogValues', JSON.stringify(getStore))
  
      // window.location.reload()  
   }

   let blog
  async function showComment(){
    
    // let getStore =JSON.parse(localStorage.getItem('blogValues'))
   
    // let blogCont = getStore.find(x => x.id == name)
    await axios.get(`https://sparkling-petticoat-bull.cyclic.app/api/v1/comments`)
    .then((res)=>{
      console.log("response" ,res)
      getStore=res.data;
      console.log(blog)
    }).catch((err)=>{
      console.log("error", err)
     })
    // let filteredComments = getStore.commentWords.filter(value => value.articleId === name)
    
    
  let commentAppend = document.getElementById('comment-message')
    

  for(let valu of getStore) {
   let div = document.createElement('div')
   
       div.innerHTML = `
       <h3>${valu}</h3>
       <p>${valu.name}</p>
       <p>${valu.comment}</p>
        <button onclick=deleteComment('${valu._id}')>Delete</button> 
        
   `
    commentAppend.appendChild(div)
  } 
    


 }

showComment()

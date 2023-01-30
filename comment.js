let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })


   function deleteComment(id){
      let  getStore= JSON.parse(localStorage.getItem('blogValues'))
      
      
      for(let va of getStore){
        
         let index1 = va.commentWords.findIndex((obj) => obj.id === id)
      
         va.commentWords.splice(index1, 1)
         
      
      }
      
      localStorage.setItem('blogValues', JSON.stringify(getStore))
      window.location.reload() 
      
     
     
   }

   
 function showComment(){
    let params = (new URL(document.location)).searchParams;
    let name = params.get('id')
    
    let getStore =JSON.parse(localStorage.getItem('blogValues'))
   console.log(getStore)
   //  let blogCont = getStore.find(x => x.id == name)
// console.log(blogCont)
   //  let filteredComments = getStore.commentWords.filter(value => value.articleId === name)
    let commentAppend = document.getElementById('comment-message')
    

  for(let valu of getStore) {
   for(let val of valu.commentWords){
      let div = document.createElement('div')
      div.innerHTML = `
      <h3>${valu.blogTitleInputValue}</h3>
      <p style=" color:blue;font-family:Arial">${val.nameValue}</p>
      <p>${val.commentvalue}</p>
       <button onclick=deleteComment(${val.id})>Delete</button> `
      
    commentAppend.appendChild(div)
    }
   
   

     
        
   
  } 
    


 }

showComment()

let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content')   
adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })


   //function deleteComment(id){

   let params = (new URL(document.location)).searchParams;
   let commentId = params.get('id')

   let getStore ;
   let token = localStorage.getItem("token")

   //    function myDelete(id){
   //       let commentIndex= getStore.findIndex(x => x._id == id)
   //       // let getStore =JSON.parse(localStorage.getItem('blogValue'))

   //       console.log(commentIndex, id)
   //       axios.delete(`https://alexandre-nkurunziza.onrender.com/api/v1/comments/${id}`,{
   //          headers:{
   //            'Authorization': 'Bearer ' + token
   //          }
   //         })
   //             .then((res)=>{
   //              console.log("response", res)
   //              getStore.splice(commentIndex,1)
   //              window.location.reload()
   //            })
               
   //             .catch((err)=>{console.log("error", err)})
        
         

   //       //let commentIndex = getStore[blogIndex].commentValue.findIndex(x => x._id == id) 
   //      // localStorage.setItem('blogValue', JSON.stringify(getStore))
        
   //    //      window.location.reload()
   //    // let  getStore= JSON.parse(localStorage.getItem('blogValues'))
      
      
   //    // for(let va of getStore){
        
   //    //    let index1 = va.commentWords.findIndex((obj) => obj.id === id)
   //    //    va.commentWords.splice(index1, 1)   
      
   //    // }
      
   //    // localStorage.setItem('blogValues', JSON.stringify(getStore))
   //    // window.location.reload() 
      
   //   console.log(token)
     
   // }

   
  function showComment(){
    
    
    //let getStore =JSON.parse(localStorage.getItem('blogValues'))
    //console.log(getStore)
   //  let blogCont = getStore.find(x => x.id == name)
   //  console.log(blogCont)
    //let filteredComments = getStore.commentWords.filter(value => value.articleId === name)
    
   let commentAppend = document.getElementById('comment-message')
   
   axios.get(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${commentId}/comments`)
   .then((res)=>{console.log("response", res)
  }).catch((err)=>{console.log("error", err)})


  for(let valu of getStore){
   // for(let val of valu.commentWords){
      let div = document.createElement('div')
      div.innerHTML = `
      <h3>${valu.blog.title}</h3>
      <p style=" color:blue;font-family:Arial">${valu.name}</p>
      <p>${valu.comment}</p>
       <button onclick=myDelete('${valu._id}')>Delete</button> `
      // console.log(valu.blog)
    commentAppend.appendChild(div)
   // }
    
  
  
} 
    console.log("hello")


 }

showComment()

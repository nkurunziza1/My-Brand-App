 
//  let blogIndex = blogValues.findIndex(x => x.id == editableBlog.id)
//  let editableBlog;
const token = localStorage.getItem("token")
const blogId =  JSON.parse(localStorage.getItem('id'))
 function getEditableBlog(){
//  const blogId=  JSON.parse(localStorage.getItem('id'))

 console.log(blogId)
axios.get(`https://sparkling-petticoat-bull.cyclic.app/api/v1/blogs/${blogId}`,)
.then((res)=> {
   console.log(res)
   document.getElementById('blog-title').value= res.data.title;
   document.getElementById('blog-summary').value= res.data.summary;
   editor.html.set(res.data.content);   
  })
.catch((err)=>{
   console.log("error", err)
})
 
 }

 
function saveBlog(){
   

   const title =document.getElementById('blog-title').value  
   const summary =document.getElementById('blog-summary').value
   const content =document.getElementById('blog-content').value
   
   axios.patch(`https://sparkling-petticoat-bull.cyclic.app/api/v1/blogs/${blogId}` ,{
   headers:{
      'Authorization': 'Bearer ' + token
      }
    })
   .then((res)=>{
    console.log("reponse", res)
    summary,
    content,
    title
   }).catch((err)=>{
      console.log("error", err)
   })

  


 document.getElementById('blog-title').value =''
 document.getElementById('blog-summary').value =''
 editor.html.set('')




}
getEditableBlog()



 






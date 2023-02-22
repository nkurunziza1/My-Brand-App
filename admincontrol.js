let adminOpen = document.getElementById("admin-open");
let adminContent = document.getElementById("admin-content");
let adminBlogMessage = document.getElementById("admin-blog-message")
adminOpen.addEventListener("click", () => {
  adminContent.classList.toggle("focus");
});

let getBlogValue;

function deleteList(id) {
//   let getBlogValue = JSON.parse(localStorage.getItem("blogValues"));
//   console.log(getBlogValue);
  const index = getBlogValue.findIndex((obj) => obj._id === id);
  console.log(index,id)
  const token = localStorage.getItem("token")
// login flow
// call login api
// keep the token in localstorage
// use token in headers to access protected
  axios
    .delete(`https://sparkling-petticoat-bull.cyclic.app/api/v1/blogs/${id}`,{
     headers:{
        'Authorization': 'Bearer ' + token
     }
    })
    .then((res) => {
      console.log("response", res);

      getBlogValue.splice(index, 1);

      // localStorage.setItem("blogValues", JSON.stringify(getBlogValue));

      window.location.reload();
    })
    .catch((err) => {
      console.log("error", err);
      adminBlogMessage.innerHTML = err.response.data;
      adminBlogMessage.style.color = 'red'

      setTimeout(()=>{
        adminBlogMessage.innerHTML= ""
      },3000)
      
    });
}

function editBlog(id){


  localStorage.setItem('id', JSON.stringify(id))

  // let blogValues = JSON.parse(localStorage.getItem('blogValues'))
    
  // const index = blogValues.findIndex((obj) => obj.id === id)

  
  // blogValues[index]

  // localStorage.setItem('editableBlog', JSON.stringify(blogValues[index]))

  // window.location.href='edit.html' 
  
    // let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))
    // console.log(getBlogValue)
    // const index = getBlogValue.findIndex((obj) => obj.id === id)
    
    // getBlogValue.splice(index, 1)
    
    // localStorage.setItem('blogValues', JSON.stringify(getBlogValue))

    // window.location.reload()
    window.location.href='edit.html' 
  // const index = getBlogValue.findIndex((obj) => obj._id === id);
  // console.log(index,id)
  // const token = localStorage.getItem("token")

  // axios
  //   .patch(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${id}`,{
  //    headers:{
  //       'Authorization': 'Bearer ' + token
  //    }
  //   })
  //   .then((res) => {
  //     console.log("response", res);

  //     // getBlogValue.splice(index, 1);

  //     // localStorage.setItem("blogValues", JSON.stringify(getBlogValue));

  //    
  //   })
  //   .catch((err) => {
  //     console.log("error", err);
  //   });
}

async function getValue() {
  let messageTable = document.getElementById("message-table");
  //let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))

  await axios
    .get("https://sparkling-petticoat-bull.cyclic.app/api/v1/blogs")
    .then((res) => {
      console.log("response", res.data.blog);
      getBlogValue = res.data.blog;
    })
    .catch((err)=> {
      console.log("error", err);
      
      
      
      console.log("hello");
    });

    

  for (const value of getBlogValue) {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td> ${value.title}</td>
        <td> ${value.createdAt}</td>
        
        <td>
        <button onclick ="editBlog('${value._id}')" style ="background:#008CBA;" class="edit-btn">Edit</button>
        <button onclick ="deleteList('${value._id}')" class = "delete-btn">Delete</button>
        </td>
       
        `;
    messageTable.appendChild(tableRow);
  }
}
getValue();

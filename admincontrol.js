let adminOpen = document.getElementById("admin-open");
let adminContent = document.getElementById("admin-content");
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
    .delete(`https://alexandre-nkurunziza.onrender.com/api/v1/blogs/${id}`,{
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
    });
}

function editBlog(id) {


  const index = getBlogValue.findIndex((obj) => obj._id === id);

  getBlogValue[index];
  
  console.log(getBlogValue)

  // window.location.href = "edit.html";
}

async function getValue() {
  let messageTable = document.getElementById("message-table");
  //let getBlogValue = JSON.parse(localStorage.getItem('blogValues'))

  await axios
    .get("https://alexandre-nkurunziza.onrender.com/api/v1/blogs")
    .then((res) => {
      console.log("response", res.data.blog);
      getBlogValue = res.data.blog;
    })
    .catch((err) => {
      console.log("error", err);
    });

  console.log("hello");

  for (const value of getBlogValue) {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td> ${value.title}</td>
        <td> ${value.createAt}</td>
        
        <td>
        <button onclick ="editBlog('${value._id}')">Edit</button>
        <button onclick ="deleteList('${value._id}')">Delete</button>
        </td>
       
        `;
    messageTable.appendChild(tableRow);
  }
}
getValue();

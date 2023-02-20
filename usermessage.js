
//  let menuActive = document.querySelector('.unOrdered-list').querySelectorAll('a')

//  menuActive.forEach(el => {
//      el.addEventListener('click', function(){
         
//        menuActive.forEach(nav => nav.classList.remove('passive')) 
//        console.log('menu')
//        this.classList.add('passive') 
//      })
 
//  })
let adminOpen = document.getElementById('admin-open')
let adminContent = document.getElementById('admin-content') 
let clearAllBtn = document.getElementById('clear-all')

adminOpen.addEventListener('click',(e)=>{
    adminContent.classList.toggle('focus')
    e.preventDefault()   
   })

   let  getContactValue;
   

  

// clearAllBtn.addEventListener('click',()=>{
//     let getContactValue = JSON.parse(localStorage.getItem('storeValue'))
    
//     localStorage.clear(getContactValue)

//     window.location.reload()

// })


 async function getValue(){
    let messageTable = document.getElementById('message-table')
    // let getContactValue = JSON.parse(localStorage.getItem('storeValue'))
    await axios.get("https://sparkling-petticoat-bull.cyclic.app/api/v1/messages")
    .then((res)=>{
        console.log("response", res)
        getContactValue = res.data;
    }).catch((err)=>{console.log("error", err)})

    
    console.log('hello')

    for (const value of getContactValue) {
        let tableRow = document.createElement('tr')
        tableRow.innerHTML = `<td>  ${value.name}</td>
        <td> ${value.email}</td>
        <td>${value.message}</td> 
        <td><button onclick ="deleteList('${value._id}')">Delete</button></td>`
        messageTable.appendChild(tableRow)
        
    }  
  }
 
  let token = localStorage.getItem("token")
  function deleteList(id){
    const contactId = getContactValue.findIndex((obj) => obj._id === id)
   console.log(contactId)

    axios.delete(`https://sparkling-petticoat-bull.cyclic.app/api/v1/messages/${id}`,{
    headers:{
      'Authorization': 'Bearer ' + token
    }
   })
       .then((res)=>{
        console.log("response", res)
        getContactValue.slice(contactId, 1)
        window.location.reload()
      })
       
       .catch((err)=>{console.log("error", err)})
   
      
    }
getValue()


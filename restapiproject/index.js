function handleFormSubmit(event) {
    event.preventDefault();
  
    const product = {
      productname: event.target.name.value,
      sellingprice: event.target.selling.value
    }
  
  
    axios.post("https://crudcrud.com/api/02cc4ff5c2394af488949b316a15a1dd/productdetails", product)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    document.getElementById("name").value = "";
    document.getElementById("selling").value = "";
  }
  
  window.addEventListener("DOMContentLoaded", function (event) {
    axios.get("https://crudcrud.com/api/02cc4ff5c2394af488949b316a15a1dd/productdetails")
      .then((res) => {
  
        for (var i = 0; i < res.data.length; i++) {
          showProductOnScreen(res.data[i]);
          
  
        }
  
      })
      .catch((err) => {
        console.log(err);
      })
  })
  
  
  function showProductOnScreen(product) {
  
  
    const li = document.createElement("li");
    const litext = document.createTextNode(`${product.sellingprice}--${product.productname}`);
    li.appendChild(litext);
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    const dltbtn = document.createElement("button");
    const btntext = document.createTextNode("Delete Product");
    dltbtn.appendChild(btntext);
    li.appendChild(dltbtn);
  
    dltbtn.addEventListener("click", () => {
      axios.delete(`https://crudcrud.com/api/02cc4ff5c2394af488949b316a15a1dd/productdetails/${product._id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }
  
  
  
  
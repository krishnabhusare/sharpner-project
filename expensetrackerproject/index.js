const form = document.getElementById("exp");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const dec = document.getElementById("dec").value;
    const category = document.getElementById("cat").value;
    const obj = {
        amount,
        dec,
        category
    }
    localStorage.setItem(amount, JSON.stringify(obj));
    const lis = document.createElement("li");
    const listext = document.createTextNode(`${amount}-${category}-${dec}`);
    lis.appendChild(listext);
    const divs = document.querySelector("div");
    divs.appendChild(lis);
    lis.setAttribute("class", "border border-dark border-3 rounded-3");

    const dltbtn = document.createElement("button");
    const btntext = document.createTextNode("Delete Expense ");
    dltbtn.appendChild(btntext);
    dltbtn.setAttribute("type", "click");
    lis.appendChild(dltbtn);

    const editbtn = document.createElement("button");
    const editbtntext = document.createTextNode("Edit Expense");
    editbtn.appendChild(editbtntext);
    lis.appendChild(editbtn);
    editbtn.setAttribute("type", "click");

    document.getElementById("amount").value = null;
    document.getElementById("dec").value = null;
    document.getElementById("cat").value = null;





    dltbtn.addEventListener("click", function (event) {
        localStorage.removeItem(obj.amount);
        divs.removeChild(lis);

    })

    editbtn.addEventListener("click", e => {
        localStorage.removeItem(obj.amount);
        divs.removeChild(lis);
        document.getElementById("amount").value = amount;
        document.getElementById("cat").value = category;
        document.getElementById("dec").value = dec;

    })



})
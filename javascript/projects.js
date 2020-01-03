loadProjectsJSON(function (response) {
    var projects = JSON.parse(response);
    var cards = "";
    projects.forEach(project => {
        cards += `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5">
            <div class="card m-0 ml-auto mr-auto" style="width: 18rem;height:350px">
                <div class="position-relative">
                    <img src="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg" class="card-img-top" alt="...">
                    <h5 class="card-title text-center w-100" style="position:absolute;bottom:0;font-size:1rem">${project.name}</h5>
                </div>
                <div class="card-body bg-light m-0">
                    <h5 class="text-dark text-left" style="margin-top:-18px;font-size:1rem;"><u>${project.field}</u></h5>
                    <h5 class="text-dark text-left mb-4" style="height:20px;margin-top:-5px;font-size:0.75rem;">${project.tech}</h5>
                    <div class="m-0 p-0">
                        <p class="text-justify text-dark text-bold w-100 m-0 p-0" style="overflow:hidden;font-size:0.8rem; height:55px;">${project.snippet}</p>
                        <a  class="text-primary m-0 p-0" style="font-size:0.7rem" href="#" data-key="${project.number}" onclick="explainModal(this)">Read More...</a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    document.querySelector("main").innerHTML=cards;
});

function explainModal(event){
    const data_index=event.getAttribute("data-key");
    console.log(data_index);
    createPopUpBox();
    loadDiv(data_index);
}

//This function creates a popup box for the final transaction amount
function createPopUpBox() {
    const popUpBox = document.createElement("div");
    popUpBox.id = "myModal";
    popUpBox.className = "modal";
    popUpBox.classList.add("row");

    const popUpContent = document.createElement("div");
    popUpContent.className = "modal-content";
    popUpContent.classList.add("col-xs-12");
    popUpContent.classList.add("col-sm-12");
    popUpContent.classList.add("col-md-8");
    popUpContent.classList.add("col-lg-8");

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = `&times;`;
    closeBtn.setAttribute("onclick", "closeCart()");
    const content_div = document.createElement("div");
    content_div.id = "content_div";
    popUpContent.appendChild(closeBtn);
    popUpContent.appendChild(content_div);
    popUpBox.appendChild(popUpContent);
    document.querySelector("#content-wrapper").appendChild(popUpBox);
}
function closeCart() {
    document.querySelector("#myModal").remove();
}

function loadDiv(data_index) {
    loadProjectsJSON(function (response) {
        const project = JSON.parse(response)[data_index-1];
        console.log(project);
        const cartSummery = `
                            <h2 class="mb-4 text-danger">Project Summery</h2>
                            <div class="text-dark">
                                <h4>Item:  ${project.name}<h4>
                                <h4>Price: ${project.field}</h4>
                                <h4>Price: ${project.snippet}</h4>
                                <h4>Price: ${project.description}</h4>
                            </div>
                            <br>
        `;
        document.querySelector("#content_div").innerHTML = cartSummery;
    });
}
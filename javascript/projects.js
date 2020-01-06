//This function will load the data from the Json file and put it on the front end.
loadProjectsJSON(function (response) {
    var projects = JSON.parse(response);
    var cards = "";
    projects.forEach(project => {
        cards += `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5">
            <div class="card m-0 ml-auto mr-auto each_card" style="width: 18rem;height:350px">
                <div class="position-relative">
                    <img src="${project.image}" class="card-img-top" alt="..." style="height:180px;">
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

//This function is triggered when the ReadMore button is clicked on each project card
function explainModal(event){
    const data_index=event.getAttribute("data-key");
    console.log(data_index);
    createPopUpBox();
    loadDiv(data_index);
}

//This function creates a popup box for the summery of targeted project
function createPopUpBox() {
    const popUpBox = document.createElement("div");
    popUpBox.id = "myModal";
    popUpBox.className = "modal";
    popUpBox.classList.add("row");

    const popUpContent = document.createElement("div");
    popUpContent.className = "modal-content";
    popUpContent.classList.add("col-xs-12");
    popUpContent.classList.add("col-sm-12");
    popUpContent.classList.add("col-md-7");
    popUpContent.classList.add("col-lg-7");

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
//Closes the pop-up box or simply to say destroys it
function closeCart() {
    document.querySelector("#myModal").remove();
}
//This function loads the pop div with its contents
function loadDiv(data_index) {
    loadProjectsJSON(function (response) {
        const project = JSON.parse(response)[data_index-1];
        let techData="";
        project.tech.forEach(technology=>{
            techData+=`<h5 class="text-primary">&nbsp;&nbsp;#${technology}</h5>`;
        });
        const cartSummery = `
                            <div id="project_img">
                                <img class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10" src="${project.image}"/>
                                <h2 class="mb-4 text-danger">${project.name}</h2>
                                </div>
                            <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 ml-auto mr-auto text-dark">
                                <h4>#${project.field}</h4>
                                <div class="row" style="width:inherit;">
                                ${techData}
                                </div>
                                <h5 class="text-justify">${project.description}</h5>
                                <h4>Project Github: &nbsp;<h5><a href="${project.link}" target="_blank">${project.link}</a></h5></h4>
                            </div>
                            <br>
        `;
        document.querySelector("#content_div").innerHTML = cartSummery;
    });
}
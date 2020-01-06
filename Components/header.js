let urlPassed=window.location.href;
urlPassed=urlPassed.split("/");
urlPassed=urlPassed[urlPassed.length-1];
urlPassed=urlPassed.split(".")[0];
urlPassed=urlPassed.charAt(0).toUpperCase()+urlPassed.slice(1);
if(urlPassed==="Index"){urlPassed="Home";}

const header = document.querySelector("header");
const headerContent = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavBar" aria-controls="myNavBar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavBar">
        <h2 class="text-success">${urlPassed}</h2>
        <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
            <li class="nav-item nav-tab">
                <a class="nav-link text-white" href="index.html">Home</a>
            </li>
            <li class="nav-item nav-tab">
                <a class="nav-link text-white" href="about.html">About</a>
            </li>
            <li class="nav-item nav-tab">
                <a class="nav-link text-white" href="experience.html">Work</a>
            </li>
            <li class="nav-item nav-tab">
                <a class="nav-link text-white" href="projects.html">Projects</a>
            </li>
            <li class="nav-item nav-tab">
                <a class="nav-link text-white" href="resume.html">Resume</a>
            </li>
            <li class="nav-item nav-tab">
                <a class="nav-link text-white" href="contact.html">Contact Me</a>
            </li>
        </ul>
    </div>
</nav>`;
header.innerHTML=headerContent;
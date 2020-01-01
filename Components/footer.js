const footer=document.querySelector("footer");
const footerContent=`<p class="p-0 m-0 text-center">(C) Copyright to Suraj Shrestha</p>`;
footer.innerHTML=footerContent;
footer.classList.add("position-absolute");
footer.classList.add("w-100");
footer.classList.add("m-0");
footer.style.bottom="0";
footer.style.height="2.5rem";
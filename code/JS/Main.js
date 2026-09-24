const firstPage = document.getElementById("pageOne");
const secondPage = document.getElementById("pageTwo");
const thirdPage = document.getElementById("pageThree")

const pages = [firstPage, secondPage, thirdPage];

var page = 1;
var pageMax = pages.length;

const arrowL = document.getElementById("arrowL");
const arrowR = document.getElementById("arrowR");

function updateArrows(){
    if (page == pageMax){
        arrowR.classList.add("disabled");
        arrowL.classList.remove("disabled");
    } else if (page == 1){
        arrowL.classList.add("disabled");
        arrowR.classList.remove("disabled");
    } else {
        arrowL.classList.remove("disabled");
        arrowR.classList.remove("disabled");
    }
}

function navForw(){
    if(page == pageMax){
        return;
    }

    const curPage = pages[page - 1];
    const nexPage = pages[page];

    curPage.style.opacity = 0;

    curPage.addEventListener("transitionend", () => {
        curPage.classList.add("hidden");

        nexPage.classList.remove("hidden");
        nexPage.style.opacity = 0;

        requestAnimationFrame(() => {
            nexPage.style.opacity = 1;
        })
    }, { once: true });

    page += 1;

    updateArrows();
}

function navBack(){
    if(page == 1){
        return;
    }

    const curPage = pages[page - 1];
    const nexPage = pages[page - 2];

    curPage.style.opacity = 0;

    curPage.addEventListener("transitionend", () => {
        curPage.classList.add("hidden");

        nexPage.classList.remove("hidden");
        nexPage.style.opacity = 0;

        requestAnimationFrame(() => {
            nexPage.style.opacity = 1;
        })
    }, { once: true });

    page -= 1;

    updateArrows();
}

function setPage(pageNum){
    const toRender = pages.filter((_, i) => i !== (pageNum - 1));

    for(let i = 0; i<toRender.length; i++){
        toRender[i].classList.add("hidden");
    }
    pages[pageNum - 1].classList.remove("hidden");

    page = pageNum;
    updateArrows();
}
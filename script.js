const searchform=document.getElementById("search-form")
const searchbox=document.getElementById("search-box")
const searchresult=document.getElementById("search-result")
const showmorebtn=document.getElementById("showmore-btn")
const accesskey="QhtWGI0Ed2ulWCuZw0t_7dnqJAT1JqA886d86-zONB";

let keyword=""
let page=1

async function searchimages(){
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const response=await fetch(url)
    const data=await response.json()
    console.log(data);

}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimages();
})


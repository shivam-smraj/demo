let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let aa=document.querySelector("img");
let btn=document.querySelector("button");

async function getImg() {
    try {
        let res = await axios.get(url2);
        console.log(res);
        return res;
    } catch (e) {
        console.log("error - ", e);
        console.log("Image not found")

    }

}


btn.addEventListener("click",async ()=>{
     console.log("button was clicked");
     let a = await getImg();
     aa.src= a.data.message;
});
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
       
//         return res.data.fact;
//     } catch (e) {
//         console.log("error - ", e);
//         console.log("Fact not found")

//     }

// }


// btn.addEventListener("click",async ()=>{
//     // console.log("button was clicked");
//     let fct = await getFacts();
//     console.log(fct)
//     aa.innerText = fct;
// });


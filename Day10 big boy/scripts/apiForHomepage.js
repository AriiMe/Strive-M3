// async function testing(genre){
//     const url = ("https://striveschool-api.herokuapp.com/api/movies/")
//     let productList = document.querySelector("#section1");
//     // let categoryName = document.querySelector("#categoryname1")
    
    
    
//     try {
//       let response = await fetch(url + genre, {
//           method: "GET",
//         headers: new Headers({
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjOTRiY2RlMTAwMTc2MTZhODAiLCJpYXQiOjE2MDUxMDg4MDEsImV4cCI6MTYwNjMxODQwMX0.mtbbZ989-aU75_cKH3KnULhH7anOrPQdcdW1R7MQTSk",
//           "Content-Type": "application/json",
//         }),
//       });


//       let testMovies = await response.json();
//       ///console.log(testMovies);
//       if (testMovies.length > 0) {
//         testMovies.forEach((e) => {
//           let img = document.createElement("div");
//           img.classList.add("mr-3");
//           img.innerHTML = `
          
//           <img
//           src="${e.imageUrl}"
//           class="d-block w-100 img-fluid rounded"
//           alt="img"
//           />`;
//         //   categoryName.innerHTML = `<h4 id="categoryname1" style="color: white">${e.category}</h4>`;
//           productList.appendChild(img);
//         });
//       } else {
//       }
//     }
    
//     catch (e) {
//       console.log(e);
//     }  
//   };
//   testing("off")

  //why god

  async function getMovie(genre){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let movieContainer = document.querySelector("#section1");  
    let categoryName = document.querySelector("#categoryname1")
    try{
        let response = await fetch(url + genre, {
            method:"GET",
            headers: new Headers({
                Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjOTRiY2RlMTAwMTc2MTZhODAiLCJpYXQiOjE2MDUxMDg4MDEsImV4cCI6MTYwNjMxODQwMX0.mtbbZ989-aU75_cKH3KnULhH7anOrPQdcdW1R7MQTSk",
             "Content-Type": "application/json",
            }),
        });
        let horrorMovies= await response.json();
       //console.log(movies);
       if(horrorMovies.length>0){
           horrorMovies.forEach(e => {
            let categoryName = document.querySelector("#categoryname1")
            let movieContainer = document.querySelector("#section1");    
            let col= document.createElement("div");
            col.classList.add("mr-3");
            col.innerHTML= `
            <img
         src="${e.imageUrl}"
         class="d-block w-100 img-fluid rounded"
       alt="img"
          />`;
        categoryName.innerHTML = `<h4 id="categoryname1" style="color: white">${e.category}</h4>`;
         movieContainer.appendChild(col);
           });
       }else{
           
       }

    }
    catch(e){
        console.log(e);
        alert(e);
    }
}
getMovie("off");


async function otherMovie(genre){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let movieContainer = document.querySelector("#section1");  
    let categoryName = document.querySelector("#categoryname1")
    try{
        let response = await fetch(url + genre, {
            method:"GET",
            headers: new Headers({
                Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjOTRiY2RlMTAwMTc2MTZhODAiLCJpYXQiOjE2MDUxMDg4MDEsImV4cCI6MTYwNjMxODQwMX0.mtbbZ989-aU75_cKH3KnULhH7anOrPQdcdW1R7MQTSk",
             "Content-Type": "application/json",
            }),
        });
        let horrorMovies= await response.json();
       //console.log(movies);
       if(horrorMovies.length>0){
           horrorMovies.forEach(e => {
            let categoryName = document.querySelector("#categoryname2")
            let movieContainer = document.querySelector("#section-one1");    
            let col= document.createElement("div");
            col.classList.add("mr-3");
            col.innerHTML= `
            <img
         src="${e.imageUrl}"
         class="d-block w-100 img-fluid rounded"
       alt="img"
          />`;
        categoryName.innerHTML = `<h4 id="categoryname1" style="color: white">${e.category}</h4>`;
         movieContainer.appendChild(col);
           });
       }else{
           
       }

    }
    catch(e){
        console.log(e);
        alert(e);
    }
}
otherMovie("yeetus");

async function anotherMovie(genre){
    const url= "https://striveschool-api.herokuapp.com/api/movies/";
    let movieContainer = document.querySelector("#section-two1");  
    let categoryName = document.querySelector("#categoryname3")
    try{
        let response = await fetch(url + genre, {
            method:"GET",
            headers: new Headers({
                Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRjOTRiY2RlMTAwMTc2MTZhODAiLCJpYXQiOjE2MDUxMDg4MDEsImV4cCI6MTYwNjMxODQwMX0.mtbbZ989-aU75_cKH3KnULhH7anOrPQdcdW1R7MQTSk",
             "Content-Type": "application/json",
            }),
        });
        let horrorMovies= await response.json();
       //console.log(movies);
       if(horrorMovies.length>0){
           horrorMovies.forEach(e => {
            let categoryName = document.querySelector("#categoryname3")
            let movieContainer = document.querySelector("#section-two1");    
            let col= document.createElement("div");
            col.classList.add("mr-3");
            col.innerHTML= `
            <img
         src="${e.imageUrl}"
         class="d-block w-100 img-fluid rounded"
       alt="img"
          />`;
        categoryName.innerHTML = `<h4 id="categoryname1" style="color: white">${e.category}</h4>`;
         movieContainer.appendChild(col);
           });
       }else{
           
       }

    }
    catch(e){
        console.log(e);
        alert(e);
    }
}
anotherMovie("spoopy");
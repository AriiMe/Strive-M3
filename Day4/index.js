
console.log("teeet")


/*
fetch('https://striveschool-api.herokuapp.com/books')
  .then(response => response.json())
  .then(data => console.log(data));
*/



window.onload = () => {
    loadBooks();
};

let data = [];
const fetchBooks = (data) => {
    fetch("https://striveschool-api.herokuapp.com/books", {
        method:"GET",
    
})
    .then((response) => {
        if (response.ok){
        return response.json();
        }
    })
    .then((body) => {
        data(body);
    })
    
    .catch((err) => {
        alert("error has occured mate " + err);
        console.error(err);
    });
};

const loadBooks = () => {
    fetchBooks((body) =>{
        let bookeroni = document.createElement("div");
        bookeroni.classList.add('col');
        const destination = document.querySelector(".row");
        console.log(body)
        body.forEach((element) => {
            console.log(element)
         bookeroni.innerHTML += `<div class="card d-inline-block">
        <img
          src="${element.img}"
          class="card-img-top"
          width="250"
          
          role="img"
        />
        <title>${element.title}</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          ${element.category}
        </text>

        <div class="card-body">
          <p class="card-text">
          ${element.title}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            
              <button
                type="button"
                id="viewBtn"
                class="btn btn-sm btn-outline-secondary"
              >
              
              <i class="fas fa-cart-arrow-down"></i>
              </button>
            </div>
            <small class="text-muted">$ ${element.price}</small>
          </div>
        </div>
      </div>`;
    })
    console.log("teet")
    console.log(bookeroni.innerHTML);
    destination.appendChild(bookeroni)
    })
    
}
    loadBooks();

/*
  window.onload = (query) => {
    let parent = document.querySelector(".parent");
    fetch(`https://striveschool-api.herokuapp.com/books`)
      .then((response) => response.json())
      .then((apiResponse) => {
        console.log(apiResponse);
        let images = apiResponse.data;
        for(let i = 0; i < images.length; i++){
            console.log(img[i].price)
        }
        parsedJson.img.forEach((element) => {
          let images = element.img;
          let card = `<div class="card mb-4 shadow-sm">
            <img
              src="${images}"
              class="card-img-top"
              width="100%"
              height="225"
              role="img"
            />
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>

            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                
                  <button
                    type="button"
                    id="viewBtn"
                    class="btn btn-sm btn-outline-secondary"
                  >
                  
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary" onclick="myFunction()"
                  >
                    hide
                  </button>
                </div>
                <small class="text-muted">${element.price}</small>
              </div>
            </div>
          </div>`;
          parent.innerHTML += card;
        });
      });
  };*/
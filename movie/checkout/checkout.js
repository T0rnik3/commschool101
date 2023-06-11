const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
const movie = JSON.parse(localStorage.getItem("movie"));
const seatnums = JSON.parse(localStorage.getItem("seatnums"));
const container = document.querySelector(".container2");

// Create movie title element
const movieTitle = document.createElement("h1");
movieTitle.innerHTML = "Movie: " + movie.title;
container.appendChild(movieTitle);

// Create seat information elements
seatnums.forEach((seat) => {
  const seatInfo = document.createElement("div");
  seatInfo.classList.add("rows");
  seatInfo.innerHTML = `
    <div class="seat-info">
      <p>Row - <strong>${seat[0]}</strong></p>
      <p>Seat - <strong>${seat[2]}</strong></p>
    </div>
    <p class="price">Price: <strong>10 $</strong></p>`;
  container.appendChild(seatInfo);
});

// Calculate and display total amount
const totalAmount = document.createElement("h1");
totalAmount.innerHTML = "Total amount: " + seatnums.length * 10 + " $";
container.appendChild(totalAmount);

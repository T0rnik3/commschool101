const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector("#main");

getMovies(API_URL);

async function getMovies(url) {
  console.log(url);
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = " ";

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    if (movie.vote_average >= 8) {
      movieEl.innerHTML = `
                <div>
                    <h3>${movie.title}</h3>
                    <p>${movie.overview}</p>
                    <p>${movie.original_language}</p>
                    <p>${movie.vote_average}</p>
                </div>
            `;
    } else {
      null;
    }

    main.appendChild(movieEl);
  });
}
/// event loop // async

//// 1) გააალამაზეთ და მოხოდეთ ვიზუალურად მთლიანი ფილმების აპლიკაცია

/// 2) დაამატეთ ფოტოები  (თავსატეხი)

// 3) vote_average თუ არის 5 ზე ნაკლები გააწითლე თუ არუს 5-7 მდე გააყვითლე და 8 ს ზემოთ გაამწვანე

let bar = document.querySelector(".bar");
// making varaible to maintain the width of bar

let minWidth = 0;
let maxWidth = 100;

//Window load

window.addEventListener("load", () => {
  //set interval

  let id = setInterval(loadingBar, 100);
  function loadingBar() {
    minWidth++;
    document.querySelector(".loading-bar").innerHTML = `Loading ${minWidth}%`;
    bar.style.width = `${minWidth}% `;
    if (minWidth == maxWidth) {
      clearInterval(id);
      document.querySelector(".loading-bar").innerHTML = `Loading done`;
      bar.style.backgroundColor = `lightgreen `;
    }
  }
});

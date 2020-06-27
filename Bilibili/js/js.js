window.onload = function () {
  var cl = document.querySelector(".circle");
  var lunbo = document.querySelector(".all_lunbo");
  for (let i = 0; i < 5; i++) {
    cl.children[i].onclick = function () {
      lunbo.children[i].style.display = 'black';
    };
  }
};

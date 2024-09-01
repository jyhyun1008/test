const githubUserName = 'jyhyun1008' // 깃허브 아이디
const githubRepoName = 'jyhyun1008.github.io' // 깃허브 레포지토리 이름

function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

// スマホ用メニュー　クラス追加
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-globalnav");
const Main = document.querySelector("#js-main");

ham.addEventListener("click", function () {
 ham.classList.toggle("_active");
 nav.classList.toggle("_active");
 Main.classList.toggle("_darker");
});

// 子メニュー表示
const parentMenu = document.querySelectorAll("._has-child > a");
for (let i = 0; i < parentMenu.length; i++) {
 parentMenu[i].addEventListener("click", function(e){
  e.preventDefault();
  this.nextElementSibling.classList.toggle("active");
 })
}

// ページUP
const PageUpBtn = document.getElementById('js-pageup');

window.addEventListener("scroll", function () {
 const scroll = window.pageYOffset;
 if (scroll > 700) {
  PageUpBtn.style.opacity = 1;
 } else PageUpBtn.style.opacity = 0;
});

PageUpBtn?.addEventListener('click', () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 });
});

// キャラクター紹介タブ
// ボタン
const nameList = document.querySelectorAll(".charanamelist__item");
// コンテンツ
const charaContent = document.querySelectorAll(".charalist__item");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < nameList.length; i++) {
    nameList[i].addEventListener("click", charaSwitch);
  }
  function charaSwitch() {
    document.querySelectorAll(".active")[0]?.classList.remove("active");
    this?.classList.add("active");
    document.querySelectorAll(".show")[0].classList.remove("show");
    const aryList = Array.prototype.slice.call(nameList);
    const index = aryList.indexOf(this);
    charaContent[index].classList.add("show");
  }
});

var qs = getQueryStringObject();
var page = qs.p;
var html = qs.h;

if (!page && !html) {
  var url = "https://raw.githubusercontent.com/"+githubUserName+"/"+githubRepoName+"/main/html/main.html"
  fetch(url)
  .then(res => res.text())
  .then((out) => {
    document.querySelector("#js-main").innerHTML += out
  })
} else if (html) {
  var url = "https://raw.githubusercontent.com/"+githubUserName+"/"+githubRepoName+`/main/html/${html}.html`
  fetch(url)
  .then(res => res.text())
  .then((out) => {
    document.querySelector("#js-main").innerHTML += out
  })
} else if (page) {
  document.querySelector("#js-main").innerHTML = '<h1 class="novelpage__title titles"></h1><div class="novelpage__inner"><section class="novelpage__main"></section></div>'
  var url = "https://raw.githubusercontent.com/"+githubUserName+"/"+githubRepoName+`/main/markdown/${page}.md`
  fetch(url)
  .then(res => res.text())
  .then((out) => {
    out = out.replace('\n', '<titleendhere>')
    var title = out.split('<titleendhere>')[0].replace('# ', '')
    var content = out.split('<titleendhere>')[1]
    document.querySelector(".novelpage__title.titles").innerHTML = title
    document.querySelector(".novelpage__main").innerHTML += marked.parse(content)
  })
}
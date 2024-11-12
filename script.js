// タブの切り替え
function showCategory(category) {
  var tabs = document.querySelectorAll('.tab-link');
  var contents = document.querySelectorAll('.news-content');
  
  tabs.forEach(function(tab) {
      tab.classList.remove('active');
  });
  contents.forEach(function(content) {
      content.classList.remove('active');
  });
  
  document.getElementById(category).classList.add('active');
  document.querySelector(`[onclick="showCategory('${category}')"]`).classList.add('active');
}

// 折りたたみ機能
function toggleDetail(element) {
  element.classList.toggle('open');
}

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  // 一番最初のスライドなら次年度ボタンを非表示
  document.querySelector('.slider-button.next').style.display = 
    index === 0 ? 'none' : 'block';
  
  // 一番最後のスライドなら前年度ボタンを非表示
  document.querySelector('.slider-button.prev').style.display = 
    index === slides.length - 1 ? 'none' : 'block';
}

function nextSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
}

// 初期状態を設定
showSlide(currentIndex);

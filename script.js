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


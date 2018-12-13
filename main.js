// 获取所有的图片标签
const imgs = document.getElementsByTagName('img');
// 获取可视区域的高度
const viewHeight = document.innerHeight || document.documentElement.clientHeight;
// 图片那一栏高度
const imgHeight = 120;
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let nextNum = 0;

// 当scroll变更时，加载未加载的图片
function lazyLoad() {
  for (let i = nextNum, len = imgs.length; i < len; i++) {
    let distance = viewHeight - imgs[i].getBoundingClientRect().top;
    if (distance >= 0) {
      imgs[i].src = imgs[i].getAttribute('data-src');
      nextNum = i + 1;
    }
  }
}

// 浏览器端首屏初始最大图片下标
let firstEndNum = Math.ceil(viewHeight/imgHeight);

// 加载首屏图片
function loadFirstScreenImgs() {
  for (let i = 0; i < firstEndNum; i++) {
    imgs[i].src = imgs[i].getAttribute('data-src');
    nextNum = i + 1;
  }
}

window.addEventListener('scroll', lazyLoad, false);

loadFirstScreenImgs();
// 封装一个获取dom 节点的函数
function _(div1) {
  return document.querySelector(div1);
}

function __(div1) {
  return document.querySelectorAll(div1);
}

function pro(div1, pro, val) {
  if (val == undefined) {
    return pro2(div1, pro);
  }
  pro1(div1, pro, val);
}

function pro1(div1, pro, val) {
  if (pro == "opacity") {
    div1.style[pro] = val / 100;
  } else if (pro == "zIndex") {
    div1.style[pro] = val;
  } else {
    div1.style[pro] = val + "px";
  }
}

function pro2(div1, pro) {
  if (pro == "opacity") {
    return getComputedStyle(div1)[pro] * 100;
  }
  return getComputedStyle(div1)[pro];
}

// 删除和添加样式类 封装函数  div是想要加的div，cls是想要加的 class名字
function removeClass(div, cls) {
  div.classList.remove(cls);
}

function addClass(div, cls) {
  div.classList.add(cls);
}

// 封装一个类似 forEach带回调函数的函数

function each(likeArray, callback) {
  var i = 0,
    l = likeArray.length;
  for (; i < l; i++) {
    if (callback(likeArray[i], i) === false) {
      break;
    }
  }
}

// 透明度，宽高移动封装函数
function fal(div, opa, fn) {
  var start, step;
  clearInterval(div.time);
  div.time = setInterval(function() {
    var abc = true;
    for (var prop in opa) {
      start = prop == "opacity" ? pro(div, prop) : parseInt(pro(div, prop));
      step =
        prop == "opacity"
          ? (opa[prop] * 100 - start) / 10
          : (opa[prop] - start) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      start += step;

      if (prop == "opacity") {
        if (start != opa[prop] * 100) {
          abc = false;
        }
      } else if (start != opa[prop]) {
        abc = false;
      }

      pro(div, prop, start);
    }
    if (abc == true) {
      fn && fn(div);
      clearInterval(div.time);
    }
  }, 20);
}

function opacityGo(className) {
  var list4a = document.getElementsByClassName("className");
  for (let i = 0; i < list4a.length; i++) {
    list4a[i].onmouseover = function() {
      list4a[i].style.opacity = 0.8;
      list4a[i].onmouseout = function() {
        list4a[i].style.opacity = 1;
      };
    };
  }
}

function boxShadow(div) {
  for (let i = 0; i < div.length; i++) {
    div[i].onmouseenter = function() {
      div[i].style.boxShadow =
        5 +
        "px" +
        " " +
        5 +
        "px" +
        " " +
        15 +
        "px" +
        " " +
        15 +
        "px" +
        " " +
        "#e1dede";
    };
    div[i].onmouseleave = function() {
      div[i].style.boxShadow = "none";
    };
  }
}

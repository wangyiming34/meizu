// {/* <script>window.onload = function() {};</script>; */}
window.onload = function() {
  // 进入下面的选项卡，透明度变化

  var tabcon1 = document.getElementById("tab-con1");
  var lilian = document.getElementsByClassName("lilian");
  // lilian[0].style.opacity = 1;
  // taburl.style.opacity = 0.5;

  lilian[0].onmouseover = function() {
    lilian[1].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[0].onmouseout = function() {
      lilian[1].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[6].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[1].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[1].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[6].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[2].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[1].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[2].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[1].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[6].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[3].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[1].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[3].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[1].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[6].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[4].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[1].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[4].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[1].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[6].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[5].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[1].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[5].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[1].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[6].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[6].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[1].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[7].style.opacity = 0.5;
    lilian[6].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[1].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[7].style.opacity = 1;
    };
  };

  lilian[7].onmouseover = function() {
    lilian[0].style.opacity = 0.5;
    lilian[1].style.opacity = 0.5;
    lilian[2].style.opacity = 0.5;
    lilian[3].style.opacity = 0.5;
    lilian[4].style.opacity = 0.5;
    lilian[5].style.opacity = 0.5;
    lilian[6].style.opacity = 0.5;
    lilian[7].onmouseout = function() {
      lilian[0].style.opacity = 1;
      lilian[1].style.opacity = 1;
      lilian[2].style.opacity = 1;
      lilian[3].style.opacity = 1;
      lilian[4].style.opacity = 1;
      lilian[5].style.opacity = 1;
      lilian[6].style.opacity = 1;
    };
  };

  // 登陆注册选项卡
  document
    .querySelector(".wrap-login")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#wrap-login-licontent").style.display = "block";
    });

  document
    .querySelector(".wrap-login")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#wrap-login-licontent").style.display = "none";
    });

  var logina = document.getElementsByClassName("logina");

  for (let i = 0; i < logina.length; i++) {
    logina[i].addEventListener("mouseover", function(e) {
      logina[i].style.color = "#00b4ff";
    });
    logina[i].addEventListener("mouseout", function(e) {
      logina[i].style.color = "#676767";
    });
  }

  // banner轮播图
  var slideIndex = 0;
  var slideshowLi = document.getElementsByClassName("slideshow-li1");
  var circle = document.getElementsByClassName("circle");
  var slideshowInside = document.getElementById("slideshow-inside");
  function play() {
    slideIndex++;
    if (slideIndex > 6) {
      slideIndex = 1;
      slideshowInside.style.left = 0;
    }

    fal(slideshowInside, { left: slideIndex * -1263 }, function() {
      setTimeout(play, 7000);
    });

    for (var i = 0; i < circle.length; i++) {
      circle[i].classList.remove("circle-color");
    }

    circle[slideIndex % 6].classList.add("circle-color");
  }

  var time = setTimeout(play, 7000);

  for (let j = 0; j < circle.length; j++) {
    circle[j].onclick = function() {
      clearTimeout(time);

      slideIndex = j;

      for (var i = 0; i < circle.length; i++) {
        circle[i].classList.remove("circle-color");
      }

      circle[slideIndex % 6].classList.add("circle-color");

      fal(slideshowInside, { left: slideIndex * -1263 }, function() {
        setTimeout(play, 7000);
      });
    };
  }

  // 导航选项卡,鼠标悬浮 头部背景变白，a标签字体变黑

  var wrapTab = document.querySelector(".wrap-tab");
  var head = document.querySelector("#head");
  var ulA = document.querySelectorAll(".wrap-tab a");
  var tabContent = document.querySelector("#tab-content");
  var shopLi = document.querySelector("#shopLi");
  var loginLi = document.querySelector("#loginLi");

  ulA[0].onmouseover = function() {
    head.style.backgroundColor = "#ffffff";
    shopLi.style.color = "black";
    loginLi.style.color = "black";
    tabContent.style.display = "block";
    // tabContent.style.height = 191 + "px";
    fal(tabContent, { height: 191 });

    ulA[0].style.color = "#00b4ff";

    ulA[1].style.color = "black";
    ulA[2].style.color = "black";
    ulA[3].style.color = "black";
    ulA[4].style.color = "black";
    ulA[5].style.color = "black";
    ulA[6].style.color = "black";
    ulA[7].style.color = "black";
    ulA[8].style.color = "black";

    ulA[0].onmouseout = function() {
      tabContent.onmouseover = function() {
        ulA[0].style.color = "black";
        ulA[1].style.color = "black";
        ulA[2].style.color = "black";
        ulA[3].style.color = "black";
        ulA[4].style.color = "black";
        ulA[5].style.color = "black";
        ulA[6].style.color = "black";
        ulA[7].style.color = "black";
        ulA[8].style.color = "black";
        tabContent.style.height = 191 + "px";
      };

      ulA[0].style.color = "#ffffff";
      ulA[1].style.color = "#ffffff";
      ulA[2].style.color = "#ffffff";
      ulA[3].style.color = "#ffffff";
      ulA[4].style.color = "#ffffff";
      ulA[5].style.color = "#ffffff";
      ulA[6].style.color = "#ffffff";
      ulA[7].style.color = "#ffffff";
      ulA[8].style.color = "#ffffff";
      tabContent.style.height = 0;
    };
  };

  wrapTab.onmouseenter = function() {
    for (let i = 1; i < ulA.length; i++) {
      ulA[i].onmouseover = function() {
        ulA[i].style.color = "#00b4ff";
        head.style.backgroundColor = "";
        tabContent.style.display = "none";
        ulA[i].onmouseout = function() {
          ulA[i].style.color = "#ffffff";
          shopLi.style.color = "#ffffff";
          loginLi.style.color = "#ffffff";
        };
      };
    }
  };

  wrapTab.onmouseleave = function() {
    head.style.backgroundColor = "";
    ulA.forEach(function(item, index) {
      item.style.color = "#ffffff";
    });
    tabContent.style.display = "none";
    tabContent.style.height = 0;
    shopLi.style.color = "#ffffff";
    loginLi.style.color = "#ffffff";
  };

  // bannner下面-list4个图片的特效 鼠标移入就透明度变化
  var list4a = document.getElementsByClassName("lista");
  for (let i = 0; i < list4a.length; i++) {
    list4a[i].onmouseover = function() {
      list4a[i].style.opacity = 0.8;
      list4a[i].onmouseout = function() {
        list4a[i].style.opacity = 1;
      };
    };
  }

  // banner下面的横屏banner2

  var banner2 = document.getElementsByClassName("banner2a");
  var banner2img = document.getElementsByClassName("banner2img");

  for (let i = 0; i < banner2.length; i++) {
    banner2[i].onmouseover = function() {
      fal(banner2img[i], { opacity: 0.8 });
      // banner2img[i].style.opacity = 0.9;
      banner2[i].onmouseout = function() {
        // banner2img[i].style.opacity = 1;
        fal(banner2img[i], { opacity: 1 });
      };
    };
  }

  // 新品A,鼠标移入改变他的 阴影
  var xinpinA = document.getElementsByClassName("xinpinA");

  boxShadow(xinpinA);

  var lingjuana = document.getElementsByClassName("lingjuana");
  boxShadow(lingjuana);

  var retiea = document.getElementsByClassName("retiea");
  boxShadow(retiea);

  var flymea = document.getElementsByClassName("flymea");
  boxShadow(flymea);

  var btn16 = document.getElementById("btn16");

  btn16.onclick = function() {
    var ipt16 = document.getElementById("ipt16");
    if (ipt16.value == "魅族16th") {
      location = "/store";
      // var xhr = new XMLHttpRequest();
      // xhr.open("get", "http://localhost:8080?=" + ipt16.value);
      // // console.log("http://localhost:8080?=" + ipt16.value);
      // xhr.onreadystatechange = function() {
      //   if (xhr.readyState == 4) {
      //     if (xhr.status == 200) {
      //       var res = JSON.parse(xhr.responseText);
      //       if (res.code == 200) {

      //       }
      //     }
      //   }
      // };

      // xhr.send();
    } else {
      alert("对不起，我只能发送魅族16th的ajsx请求");
    }
  };
};

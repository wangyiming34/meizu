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

  // 导航选项卡,鼠标悬浮 头部背景变白，a标签字体变黑

  var wrapTab = document.querySelector(".wrap-tab");
  var head = document.querySelector("#head");
  var ulA = document.querySelectorAll(".wrap-tab a");
  var tabContent = document.querySelector("#tab-content");
  var shopLi = document.querySelector("#shopLi");
  var loginLi = document.querySelector("#loginLi");

  ulA[0].onmouseover = function() {
    tabContent.style.display = "block";
    // tabContent.style.height = 191 + "px";
    fal(tabContent, { height: 191 });

    ulA[0].style.color = "#00b4ff";

    ulA[0].onmouseout = function() {
      ulA[0].style.color = "black";
      tabContent.onmouseover = function() {
        ulA[0].style.color = "black";

        tabContent.style.height = 191 + "px";
      };

      tabContent.style.height = 0;
    };
  };

  wrapTab.onmouseenter = function() {
    for (let i = 1; i < ulA.length; i++) {
      ulA[i].onmouseover = function() {
        ulA[i].style.color = "#00b4ff";

        tabContent.style.display = "none";
        ulA[i].onmouseout = function() {
          ulA[i].style.color = "black";
        };
      };
    }
  };

  wrapTab.onmouseleave = function() {
    tabContent.style.display = "none";
    tabContent.style.height = 0;
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
};

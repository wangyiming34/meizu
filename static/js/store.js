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

  // 导航栏下面16th  部位  定位
  var miaoshu = document.getElementById("miaoshu");
  window.onscroll = function() {
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    if (top >= 80) {
      miaoshu.style.position = "fixed";
      miaoshu.style.left = 0;
      miaoshu.style.top = 0;
      miaoshu.style.opacity = 0.8;
      miaoshu.style.zIndex = 12;
    } else {
      miaoshu.style.position = "";
      miaoshu.style.opacity = 1;
    }
  };

  var zuoli = document.getElementsByClassName("xiali");
  var zuoimg = document.getElementsByClassName("zuoimg");
  for (let i = 0; i < zuoli.length; i++) {
    zuoli[i].onclick = function() {
      // zuoimg.forEach(function(item) {
      //   item.classList.add(deop);
      // });

      for (var j = 0; j < zuoli.length; j++) {
        // zuoimg[j].classList.add("deop");
        fal(zuoimg[j], { opacity: 0 });
      }
      boxShadow(zuoli[i]);
      fal(zuoimg[i], { opacity: 1 });
    };
  }

  var div99 = document.getElementById("div99");
  var cityTab = document.getElementById("cityTab");
  var citychange = document.getElementById("citychange");
  var change = document.getElementById("change");
  var div88 = document.getElementById("div88");
  var div90 = document.getElementById("div90");
  div99.onmouseover = function() {
    cityTab.style.display = "block";
  };

  div99.onmouseout = function() {
    cityTab.style.display = "";
  };
  var cityname = document.getElementsByClassName("cityname");
  var textli = document.getElementsByClassName("textli");

  for (let i = 0; i < cityname.length; i++) {
    cityname[i].onclick = function() {
      var name = cityname[i].innerText;
      for (let j = 0; j < textli.length; j++) {
        textli[j].innerText = name;
      }
    };
  }
  citychange.onclick = function() {
    div88.style.display = "block";
    div90.style.display = "none";
    div88.style.borderTop = 1 + "px" + " " + "solid" + " " + "black";
    citychange.style.border = 1 + "px" + " " + "solid" + " " + "black";
    change.style.border = 1 + "px" + " " + "solid" + " " + "#ccc";
    change.style.borderBottom = 1 + "px" + " " + "solid" + " " + "black";

    citychange.style.borderBottom = 2 + "px" + " " + "solid" + " " + "#eaecee";
  };
  change.onclick = function() {
    div88.style.display = "none";
    div90.style.display = "block";
    div90.style.borderTop = 1 + "px" + " " + "solid" + " " + "black";
    change.style.border = 1 + "px" + " " + "solid" + " " + "black";
    citychange.style.border = 1 + "px" + " " + "solid" + " " + "#ccc";
    citychange.style.borderBottom = 1 + "px" + " " + "solid" + " " + "black";

    change.style.borderBottom = 2 + "px" + " " + "solid" + " " + "#eaecee";
  };

  var cityname1 = document.getElementsByClassName("cityname1");
  var textli1 = document.getElementsByClassName("textli1");

  for (let i = 0; i < cityname1.length; i++) {
    cityname1[i].onclick = function() {
      var name1 = cityname1[i].innerText;
      for (let j = 0; j < textli1.length; j++) {
        textli1[j].innerText = name1;
      }
    };
  }

  var kuaili1 = document.getElementsByClassName("kuaili1");

  for (let i = 0; i < kuaili1.length; i++) {
    kuaili1[i].onclick = function() {
      console.log(i);
      for (var j = 0; j < kuaili1.length; j++) {
        kuaili1[j].classList.remove("black");
      }

      kuaili1[i].classList.add("black");
    };
  }

  var huabeis = document.getElementsByClassName("huabeis");

  var jia = document.getElementById("jia");
  var jian = document.getElementById("jian");
  var shuzi = document.getElementById("shuzi");
  jia.onclick = function() {
    if (shuzi.innerHTML < 4) {
      shuzi.innerHTML = ++shuzi.innerHTML;
      for (let i = 0; i < huabeis.length; i++) {
        // var a = shuzi.innerHTML * huabeis[i].innerHTML;

        huabeis[i].innerHTML *= shuzi.innerHTML;
      }
    }
  };

  jian.onclick = function() {
    if (shuzi.innerHTML > 1 && shuzi.innerHTML <= 4) {
      for (let i = 0; i < huabeis.length; i++) {
        // var a = shuzi.innerHTML * huabeis[i].innerHTML;
        huabeis[i].innerHTML /= shuzi.innerHTML;
      }
      shuzi.innerHTML = --shuzi.innerHTML;
    }
  };

  // var storeimg = document.querySelectorAll("#store-footer img");
  // for (let i = 0; i < storeimg.length; i++) {
  //   storeimg[i].onmouseover = function() {
  //     console.log(storeimg[i]);
  //     storeimg[i].style.height = 200 + "px";
  //     storeimg[i].style.width = 200 + "px";
  //   };
  // }
};

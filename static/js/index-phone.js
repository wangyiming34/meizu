window.onload = function() {
  var aLi = document.getElementById("service-One");
  aLi.onmouseover = function() {
    aLi.children[1].style.display = "block";
  };
  aLi.onmouseout = function() {
    aLi.children[1].style.display = "none";
  };
  var checked = document.getElementsByClassName("service-aa");
  for (let i = 0; i < checked.length; i++) {
    checked[i].addEventListener("mouseover", function(e) {
      checked[i].style.color = "#00b4ff";
    });
    checked[i].addEventListener("mouseout", function(e) {
      checked[i].style.color = "#666";
    });
  }
  var bLi = document.getElementById("service-Two");
  bLi.onmouseover = function() {
    bLi.children[1].style.display = "block";
  };
  bLi.onmouseout = function() {
    bLi.children[1].style.display = "none";
  };
  // app下拉菜单
  document
    .querySelector("#wn-liApp")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#wnp-App").style.display = "block";
      // document.querySelector("#wnp-App").style.transition =
      //   "all 4s ease-in-out";
    });
  document.querySelector("#wn-liApp").addEventListener("mouseout", function(e) {
    document.querySelector("#wnp-App").style.display = "none";
  });
  // 手机下拉菜单，一级鼠标悬浮事件
  document
    .querySelector("#wnl-Phones")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#wnphones-Menu").style.display = "block";
    });
  document
    .querySelector("#wnl-Phones")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#wnphones-Menu").style.display = "none";
    });
  // 二级鼠标悬浮事件;
  var phonesMove = document.getElementsByClassName("webHeader-nav-phones-link");
  // for (let i = 0; i < phonesMove.length; i++) {
  //   phonesMove[i].addEventListener("mouseover", function(e) {
  //     phonesMove[i].style.opacity = "1";
  //   });
  //   phonesMove[i].addEventListener("mouseout", function(e) {
  //     phonesMove[i].style.opacity = "0.8";
  //   });
  // }
  phonesMove[0].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[0].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[1].onmouseover = function() {
    phonesMove[0].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[1].onmouseout = function() {
    phonesMove[0].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[2].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[0].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[2].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[0].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[3].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[0].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[3].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[0].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[4].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[0].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[4].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[0].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[5].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[0].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[5].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[0].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[6].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[0].style.opacity = 0.5;
    phonesMove[7].style.opacity = 0.5;
  };
  phonesMove[6].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[0].style.opacity = 1;
    phonesMove[7].style.opacity = 1;
  };
  phonesMove[7].onmouseover = function() {
    phonesMove[1].style.opacity = 0.5;
    phonesMove[2].style.opacity = 0.5;
    phonesMove[3].style.opacity = 0.5;
    phonesMove[4].style.opacity = 0.5;
    phonesMove[5].style.opacity = 0.5;
    phonesMove[6].style.opacity = 0.5;
    phonesMove[0].style.opacity = 0.5;
  };
  phonesMove[7].onmouseout = function() {
    phonesMove[1].style.opacity = 1;
    phonesMove[2].style.opacity = 1;
    phonesMove[3].style.opacity = 1;
    phonesMove[4].style.opacity = 1;
    phonesMove[5].style.opacity = 1;
    phonesMove[6].style.opacity = 1;
    phonesMove[0].style.opacity = 1;
  };

  // var phonesMove = document.getElementsByClassName("webHeader-nav-phones-link");
  // phonesMove
  // for (let i = 0; i < 7; i++) {
  //   phonesMove[0].addEventListener("mouseover", function(e) {
  //     if ((i = 0)) {
  //       phonesMove[1].style.opacity = "0.6";
  //       phonesMove[2].style.opacity = "0.6";
  //       phonesMove[3].style.opacity = "0.6";
  //       phonesMove[4].style.opacity = "0.6";
  //       phonesMove[5].style.opacity = "0.6";
  //       phonesMove[6].style.opacity = "0.6";
  //       phonesMove[7].style.opacity = "0.6";
  //     }
  //   });
  // }
  // 耳机菜单
  document
    .querySelector("#wnl-Headsets")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#wnheadsets-Menu").style.display = "block";
    });
  document
    .querySelector("#wnl-Headsets")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#wnheadsets-Menu").style.display = "none";
    });
  // 耳机二级鼠标悬浮事件;
  var headsetsMove = document.getElementsByClassName(
    "webHeader-nav-headsets-link"
  );
  for (let i = 0; i < headsetsMove.length; i++) {
    headsetsMove[i].addEventListener("mouseover", function(e) {
      headsetsMove[i].style.opacity = "1";
    });
    headsetsMove[i].addEventListener("mouseout", function(e) {
      headsetsMove[i].style.opacity = "0.75";
    });
  }
  // 配件下拉菜单
  document
    .querySelector("#wnl-Parts")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#wnparts-Menu").style.display = "block";
    });
  document
    .querySelector("#wnl-Parts")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#wnparts-Menu").style.display = "none";
    });
  // 配件二级鼠标悬浮事件;
  var partsMove = document.getElementsByClassName("webHeader-nav-parts-link");
  for (let i = 0; i < partsMove.length; i++) {
    partsMove[i].addEventListener("mouseover", function(e) {
      partsMove[i].style.opacity = "1";
    });
    partsMove[i].addEventListener("mouseout", function(e) {
      partsMove[i].style.opacity = "0.75";
    });
  }
  // 生活下拉菜单
  document
    .querySelector("#wnl-Lefts")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#wnlefts-Menu").style.display = "block";
    });
  document
    .querySelector("#wnl-Lefts")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#wnlefts-Menu").style.display = "none";
    });
  // 生活二级鼠标悬浮事件;
  var leftsMove = document.getElementsByClassName("webHeader-nav-lefts-link");
  for (let i = 0; i < leftsMove.length; i++) {
    leftsMove[i].addEventListener("mouseover", function(e) {
      leftsMove[i].style.opacity = "1";
    });
    leftsMove[i].addEventListener("mouseout", function(e) {
      leftsMove[i].style.opacity = "0.75";
    });
  }

  // 手机类型内容鼠标移入显示三个颜色圈
  // 第一个Li
  document
    .querySelector("#forms-linkA")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkA-ul").style.visibility = "visible";
      document.querySelector("#forms-linkA-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkA")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkA-ul").style.opacity = "0";
      document.querySelector("#forms-linkA-ul").style.visibility = "hidden";
    });
  var imgQuan = document.getElementsByClassName("forms-Ul-Li-ul-li-img");
  var imgAA = document.getElementById("forms-imgAA");
  for (let i = 0; i < imgQuan.length; i++) {
    imgQuan[i].onclick = function() {
      for (let g = 0; g < imgQuan.length; g++) {
        imgQuan[g].classList.remove("quan");
      }
      imgQuan[i].classList.add("quan");
      if (i == 0) {
        imgAA.setAttribute("src", "../images/forms1-3.jpg");
      }
      if (i == 1) {
        imgAA.setAttribute("src", "../images/forms1-2.jpg");
      }
      if (i == 2) {
        imgAA.setAttribute("src", "../images/forms1-1.jpg");
      }
    };
  }
  // 第二个Li
  document
    .querySelector("#forms-linkB")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkB-ul").style.visibility = "visible";
      document.querySelector("#forms-linkB-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkB")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkB-ul").style.opacity = "0";
      document.querySelector("#forms-linkB-ul").style.visibility = "hidden";
    });
  // 第三个li
  document
    .querySelector("#forms-linkC")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkC-ul").style.visibility = "visible";
      document.querySelector("#forms-linkC-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkC")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkC-ul").style.opacity = "0";
      document.querySelector("#forms-linkC-ul").style.visibility = "hidden";
    });
  var imgQuanC = document.getElementsByClassName("forms-Ul-Li-ul-li-imgC");
  var imgCC = document.getElementById("forms-imgCC");
  for (let i = 0; i < imgQuanC.length; i++) {
    imgQuanC[i].onclick = function() {
      for (let g = 0; g < imgQuanC.length; g++) {
        imgQuanC[g].classList.remove("quanC");
      }

      imgQuanC[i].classList.add("quanC");
      if (i == 0) {
        imgCC.setAttribute("src", "../images/forms3-1.jpg");
      }
      if (i == 1) {
        imgCC.setAttribute("src", "../images/forms3-2.jpg");
      }
      if (i == 2) {
        imgCC.setAttribute("src", "../images/forms3-3.jpg");
      }
      if (i == 3) {
        imgCC.setAttribute("src", "../images/forms3-4.jpg");
      }
      if (i == 4) {
        imgCC.setAttribute("src", "../images/forms3-5.jpg");
      }
    };
  }
  // 第四个Li
  document
    .querySelector("#forms-linkD")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkD-ul").style.visibility = "visible";
      document.querySelector("#forms-linkD-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkD")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkD-ul").style.opacity = "0";
      document.querySelector("#forms-linkD-ul").style.visibility = "hidden";
    });
  // 第五个Li
  document
    .querySelector("#forms-linkE")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkE-ul").style.visibility = "visible";
      document.querySelector("#forms-linkE-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkE")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkE-ul").style.opacity = "0";
      document.querySelector("#forms-linkE-ul").style.visibility = "hidden";
    });
  // 第六个Li
  document
    .querySelector("#forms-linkF")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkF-ul").style.visibility = "visible";
      document.querySelector("#forms-linkF-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkF")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkF-ul").style.opacity = "0";
      document.querySelector("#forms-linkF-ul").style.visibility = "hidden";
    });
  // 第七个Li
  document
    .querySelector("#forms-linkG")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkG-ul").style.visibility = "visible";
      document.querySelector("#forms-linkG-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkG")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkG-ul").style.opacity = "0";
      document.querySelector("#forms-linkG-ul").style.visibility = "hidden";
    });
  // 第八个Li
  document
    .querySelector("#forms-linkH")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkH-ul").style.visibility = "visible";
      document.querySelector("#forms-linkH-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkH")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkH-ul").style.opacity = "0";
      document.querySelector("#forms-linkH-ul").style.visibility = "hidden";
    });
  // 第九个Li
  document
    .querySelector("#forms-linkI")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkI-ul").style.visibility = "visible";
      document.querySelector("#forms-linkI-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkI")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkI-ul").style.opacity = "0";
      document.querySelector("#forms-linkI-ul").style.visibility = "hidden";
    });
  // 第十个Li
  document
    .querySelector("#forms-linkJ")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkJ-ul").style.visibility = "visible";
      document.querySelector("#forms-linkJ-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkJ")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkJ-ul").style.opacity = "0";
      document.querySelector("#forms-linkJ-ul").style.visibility = "hidden";
    });
  // 第11个Li
  document
    .querySelector("#forms-linkK")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkK-ul").style.visibility = "visible";
      document.querySelector("#forms-linkK-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkK")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkK-ul").style.opacity = "0";
      document.querySelector("#forms-linkK-ul").style.visibility = "hidden";
    });
  // 第12个Li
  document
    .querySelector("#forms-linkL")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkL-ul").style.visibility = "visible";
      document.querySelector("#forms-linkL-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkL")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkL-ul").style.opacity = "0";
      document.querySelector("#forms-linkL-ul").style.visibility = "hidden";
    });
  // 第13个Li
  document
    .querySelector("#forms-linkM")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkM-ul").style.visibility = "visible";
      document.querySelector("#forms-linkM-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkM")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkM-ul").style.opacity = "0";
      document.querySelector("#forms-linkM-ul").style.visibility = "hidden";
    });
  // 第14个Li
  document
    .querySelector("#forms-linkN")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkN-ul").style.visibility = "visible";
      document.querySelector("#forms-linkN-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkN")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkN-ul").style.opacity = "0";
      document.querySelector("#forms-linkN-ul").style.visibility = "hidden";
    });
  // 第15个Li
  document
    .querySelector("#forms-linkO")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkO-ul").style.visibility = "visible";
      document.querySelector("#forms-linkO-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkO")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkO-ul").style.opacity = "0";
      document.querySelector("#forms-linkO-ul").style.visibility = "hidden";
    });
  // 第16个Li
  document
    .querySelector("#forms-linkP")
    .addEventListener("mouseover", function(e) {
      document.querySelector("#forms-linkP-ul").style.visibility = "visible";
      document.querySelector("#forms-linkP-ul").style.opacity = "1";
    });
  document
    .querySelector("#forms-linkP")
    .addEventListener("mouseout", function(e) {
      document.querySelector("#forms-linkP-ul").style.opacity = "0";
      document.querySelector("#forms-linkP-ul").style.visibility = "hidden";
    });

  // recommend下选择choose圈点
  var Dot = document.getElementsByClassName("dotLi");
  var Box1 = document.getElementById("Box1");
  for (let i = 0; i < Dot.length; i++) {
    Dot[i].onclick = function() {
      if (i == 0) {
        Box1.style.left = 0;
        Box1.style.transition = "all" + " " + 0.8 + "s" + " " + "ease";
      } else if (i == 1) {
        Box1.style.left = -930 + "px";
        Box1.style.transition = "all" + " " + 0.8 + "s" + " " + "ease";
      } else {
        Box1.style.left = -1860 + "px";
        Box1.style.transition = "all" + " " + 0.8 + "s" + " " + "ease";
      }
      for (let k = 0; k < Dot.length; k++) {
        Dot[k].classList.remove("dot");
      }
      Dot[i].classList.add("dot");
    };
  }
};

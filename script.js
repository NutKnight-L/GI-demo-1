const wTypeIcon = document.getElementsByClassName("wepList");
const options = document.getElementsByClassName("options");
const spans = options[0].getElementsByTagName("span");
const container = document.getElementsByClassName("container");
const baseInfo = document.getElementsByClassName("baseInfo");
//const btn1 = document.getElementById("btn_lv");
const span1 = document.getElementById("span_lv");
const ctnSpan = container[0].getElementsByTagName("span");
const ctnH4 = container[0].getElementsByTagName("h4");
const ctnH2 = container[0].getElementsByTagName("h2");
const ctnP = container[0].getElementsByTagName("p");
const ctnImg = container[0].getElementsByTagName("img");

//判断浏览器
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);
let mD2 = document.getElementsByClassName("wIcon2img")[0];
//判断是否加载完成
function Imagess(url, callback, error) {
  var val = url;
  var img = new Image();
  if (Browser.ie) {
    img.onreadystatechange = function () {
      if (img.readyState == "complete" || img.readyState == "loaded") {
        callback(img);
      }
    };
  } else {
    img.onload = function () {
      if (img.complete == true) {
        callback(img);
      }
    };
  }
  //如果因为网络或图片的原因发生异常，则显示该图片
  if (error) {
    img.onerror = error;
  } else {
    img.onerror = function () {
      img.src =
        "http://sunbrightness.gitee.io/csdn-material/img_loading/failed.png";
    };
  }
  img.src = val;
}

//进入页面既执行函数
/* window.onload = function () {
    img_loading();
}
 */
//初始化需要显示的图片，并且指定显示的位置
function img_loading() {
  var imglist = document.getElementsByTagName("img");
  for (i = 0; i < imglist.length; i++) {
    let tt = imglist[i];
    //防止重复加载
    if (tt.loading == true) {
      continue;
    }
    //没有该属性代表不加载
    if (!tt.getAttribute("src-data")) {
      continue;
    }
    tt.loading = true;
    let loadDiv = document.createElement("div");
    // loadDiv.className = "loading";
    baseInfo[0].appendChild(loadDiv);

    tt.src = "./img/Gear-0.2s-200px.svg";
    Imagess(tt.getAttribute("src-data"), function (obj) {
      tt.src = obj.src;
      tt.removeAttribute("src-data");
      // tt.className = "wIcon2Img";
      baseInfo[0].getElementsByTagName("div")[0].remove();
    });
  }
}
window.onload = function () {
  for (let i = 0; i < wTypeIcon.length; i++) {
    writeSpan(i);
  }

  function writeSpan(num) {
    const arrtype = ["双手剑", "弓", "法器", "长柄武器", "单手剑"];
    for (let j = 0; j < zWep.length; j++) {
      if (zWep[j]["weaponType"] == arrtype[num]) {
        wTypeIcon[num].innerHTML += `<span>${zWep[j]["weaponName"]}</span>`;
      }
    }
  }

  for (let k = 0; k < spans.length; k++) {
    spans[k].onclick = setSpan;
  }
  let text;
  function setSpan(e) {
    // alert(e.target.textContent);
    // console.log(getWeaponAttr(e.target.textContent));
    text = e.target.textContent;
    let rArr = getWeaponAttr(e.target.textContent);
    let propValue;
    switch (rArr[2]) {
      case "元素精通":
        propValue = getPropType(rArr[9], rArr[12], rArr[8]).toFixed(0);
        break;

      default:
        propValue =
          (getPropType(rArr[9], rArr[12], rArr[8]) * 100).toFixed(1) + "%";
        break;
    }
    // console.log(rArr);
    if (rArr[8] == 0) propValue = "";
    ctnSpan[0].innerHTML = rArr[0];
    ctnSpan[1].innerHTML = `LV.${rArr[12]}`;
    ctnH4[0].innerHTML = rArr[1];
    ctnH4[1].innerHTML = rArr[2];
    ctnH4[2].innerHTML = propValue;
    // ctnH4[2].innerHTML = propValue;
    ctnH4[3].innerHTML = "基础攻击力";
    ctnH2[1].innerHTML = (
      getPropType(rArr[10], rArr[12], rArr[7]) + getWeaponRank(rArr[11], null)
    ).toFixed(0);
    ctnImg[0].setAttribute(
      "src-data",
      `https://enka.network/ui/${rArr[6]}.png`
    );
    img_loading();
    ctnSpan[2].innerHTML = 1;
    ctnH4[5].innerHTML = rArr[4];
    ctnH4[6].innerHTML = rArr[5];
    ctnP[0].innerHTML = rArr[3];
    console.log(rArr);
  }
  /*
btn1.oninput = function () {
  ctnSpan[1].textContent = `LV.${btn1.value}`;
  let propValue;
  switch (getWeaponAttr(text)[2]) {
    case "元素精通":
      propValue = getPropType(
        getWeaponAttr(text)[9],
        btn1.value,
        getWeaponAttr(text)[8]
      ).toFixed(0);
      break;

    default:
      propValue =
        (
          getPropType(
            getWeaponAttr(text)[9],
            btn1.value,
            getWeaponAttr(text)[8]
          ) * 100
        ).toFixed(1) + "%";
      break;
  }
  ctnH4[2].innerHTML = propValue;
  ctnH2[1].innerHTML = (
    getPropType(getWeaponAttr(text)[10], btn1.value, getWeaponAttr(text)[7]) +
    getWeaponRank(getWeaponAttr(text)[11], null)
  ).toFixed(0);
};
*/
  function getWeaponAttr(str) {
    let wValues = [];
    for (let a = 0; a < zWep.length; a++) {
      if (zWep[a]["weaponName"] == str) {
        if (zWep[a]["rankLevel"] == 1 || zWep[a]["rankLevel"] == 2) {
          wValues.push(
            zWep[a]["weaponName"],
            zWep[a]["weaponType"],
            "",
            zWep[a]["descText"],
            "",
            "",
            zWep[a]["icon"],
            zWep[a]["weaponProp"][0]["initValue"],
            "",
            "",
            zWep[a]["weaponProp"][0]["type"],
            zWep[a]["rankLevel"],
            70
          );
        } else {
          wValues.push(
            zWep[a]["weaponName"], // 0
            zWep[a]["weaponType"], // 1
            zWep[a]["weaponProp"][1]["propType"], // 2
            zWep[a]["descText"], // 3
            zWep[a]["skillAffixName"], // 4
            zWep[a]["skillAffixText"], // 5
            zWep[a]["icon"], // 6
            zWep[a]["weaponProp"][0]["initValue"], // 7
            zWep[a]["weaponProp"][1]["initValue"], // 8
            zWep[a]["weaponProp"][1]["type"], // 9
            zWep[a]["weaponProp"][0]["type"], // 10
            zWep[a]["rankLevel"], // 11
            90 // 12
          );
        }
      }
    }
    return wValues;
  }
  function getPropType(type, lv, base) {
    for (let i = 0; i < wce.length; i++) {
      if (lv == wce[i]["level"]) {
        for (let j = 0; j < 18; j++) {
          if (type == wce[i]["curveInfos"][j]["type"])
            return wce[i]["curveInfos"][j]["value"] * base;
        }
      }
    }
  }
  function getWeaponRank(rank, propLv) {
    for (let i = 0; i < 5; i++) {
      if (rank == addPropValue[i]["rankLevel"]) {
        let n = addPropValue[i]["propValue"].length;
        return addPropValue[i]["propValue"][n - 1];
      }
    }
  }
  // console.log(getPropType("GROW_CURVE_CRITICAL_301", 80));
};

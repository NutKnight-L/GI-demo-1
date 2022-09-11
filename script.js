const wTypeIcon = document.getElementsByClassName("wepList");
const options = document.getElementsByClassName("options");
const spans = options[0].getElementsByTagName("span");
const container = document.getElementsByClassName("container");

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

function setSpan(e) {
  // alert(e.target.textContent);
  // console.log(getWeaponAttr(e.target.textContent));
  let rArr = getWeaponAttr(e.target.textContent);
  let propValue;
  switch (rArr[2]) {
    case "元素精通":
      propValue = rArr[8].toFixed(0);
      break;

    default:
      propValue = (rArr[8] * 100).toFixed(1) + "%";
      break;
  }
  // console.log(rArr);
  if (rArr[8] == 0) propValue = "";
  container[0].innerHTML = `<h2>${rArr[0]}</h2>
      <div class="baseInfo">
        <h4>${rArr[1]}</h4>
        <h4>${rArr[2]}</h4>
        <h4>${propValue}</h4>
        <h4>基础攻击力</h4>
        <h2>${rArr[7].toFixed(0)}</h2>
        <img src="https://enka.network/ui/${rArr[6]}.png" />
      </div>
      <div class="descInfo">
        <h4><span id="rect">1</span>精炼1阶</h4>
        <h4>${rArr[4]}</h4>
        <h4>
          ${rArr[5]}
        </h4>
        <p class="descText">
          ${rArr[3]}
        </p>`;
}

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
          ""
        );
      } else {
        wValues.push(
          zWep[a]["weaponName"],
          zWep[a]["weaponType"],
          zWep[a]["weaponProp"][1]["propType"],
          zWep[a]["descText"],
          zWep[a]["skillAffixName"],
          zWep[a]["skillAffixText"],
          zWep[a]["icon"],
          zWep[a]["weaponProp"][0]["initValue"],
          zWep[a]["weaponProp"][1]["initValue"]
        );
      }
    }
  }
  return wValues;
}

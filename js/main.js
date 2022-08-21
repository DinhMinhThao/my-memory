const simpleStatuts = (initial) => {
  let val = initial;
  return [
    () => val,
    (v) => {
      val = v;
    },
  ];
};

//Tree view

const icondeg = document.querySelector(".tree-icon-right");
const icondeg1 = document.querySelector(".tree-icon-right-1");
const icondeg2 = document.querySelector(".tree-icon-right-2");
const icondeg3 = document.querySelector(".tree-icon-right-3");
const icondeg4 = document.querySelector(".tree-icon-right-4");
const icondeg5 = document.querySelector(".tree-icon-right-5");
const icondeg6 = document.querySelector(".tree-icon-right-6");
const icondeg7 = document.querySelector(".tree-icon-right-7");

const noneShow = document.querySelector(".tree-items-childen-one");
const noneShow1 = document.querySelector(".tree-items-childen-one1");
const noneShow2 = document.querySelector(".tree-items-childen-one2");
const noneShow3 = document.querySelector(".tree-items-childen-one10");

const hanldTree = () => {
  icondeg.classList.toggle("togglereg");
  icondeg.style.marginBottom = "5px";
  noneShow.classList.toggle("d-none");
};

const hanldTree1 = () => {
  icondeg1.classList.toggle("togglereg");
  icondeg1.style.marginBottom = "5px";
};
const hanldTree2 = () => {
  icondeg2.classList.toggle("togglereg");
  icondeg2.style.marginBottom = "5px";
  noneShow2.classList.toggle("d-none");
};

const hanldTree3 = () => {
  icondeg3.classList.toggle("togglereg");
  icondeg3.style.marginBottom = "5px";
  noneShow1.classList.toggle("d-none");
};
const hanldTree4 = () => {
  icondeg4.classList.toggle("togglereg");
  icondeg4.style.marginBottom = "5px";
  noneShow3.classList.toggle("d-none");
};
const hanldTree5 = () => {
  icondeg5.classList.toggle("togglereg");
  icondeg5.style.marginBottom = "5px";
};
const hanldTree6 = () => {
  icondeg6.classList.toggle("togglereg");
  icondeg6.style.marginBottom = "5px";
};
const hanldTree7 = () => {
  icondeg7.classList.toggle("togglereg");
  icondeg7.style.marginBottom = "5px";
};

const showUse = document.querySelector(".memory");

const handlShowUse = () => {
  showUse.classList.toggle("d-none");
};

const handlHideUse = () => {
  showUse.classList.toggle("d-none");
};

// Move Coppy

const showCoppy = document.querySelector(".fake-folder");
const trainBtn = document.querySelector(".but-fake-ss");

const handlShowCopy = () => {
  showCoppy.classList.toggle("d-none");
};
const handlHideCopy = () => {
  showCoppy.classList.toggle("d-none");
  trainBtn.style.backgroundColor = "#918989";
  trainBtn.disabled = true;
};

const choseFolde = () => {
  trainBtn.disabled = false;
  trainBtn.style.backgroundColor = "#1c7d4e";
};

// Detelete Index

const allElD3 = document.querySelectorAll('.action-del-3')
const allElD2 = document.querySelectorAll('.action-del-2')
const allElD1 = document.querySelectorAll('.action-del-1')
const allElD = document.querySelectorAll('.action-del')

const handlClickDel0 = () =>{
  allElD.forEach(a=>a.classList.toggle('d-none'))
}
const handlClickDel1 = () =>{
  allElD1.forEach(a=>a.classList.toggle('d-none'))
}
const handlClickDel2 = () => {
  allElD2.forEach(a=>a.classList.toggle('d-none'))
}
const handlClickDel = () => {
  allElD3.forEach(a=>a.classList.toggle('d-none'))
}



// Detail Img

const showCrushEl = document.querySelector(".showCrush");
const showCrushEl1 = document.querySelector(".showCrush1");
const showCrushEl2 = document.querySelector(".showCrush2");
const showCrushEl3 = document.querySelector(".showCrush3");

const handlShowCrush = () => {
  showCrushEl.classList.toggle("d-none");
};
const handlShowCrush1 = () => {
  showCrushEl1.classList.toggle("d-none");
};
const handlShowCrush2 = () => {
  showCrushEl2.classList.toggle("d-none");
};
const handlShowCrush3 = () => {
  showCrushEl3.classList.toggle("d-none");
};

const handlBack = () => {
  showCrushEl.classList.toggle("d-none");
};

const handlBack1 = () => {
  showCrushEl1.classList.toggle("d-none");
};
const handlBack2 = () => {
  showCrushEl2.classList.toggle("d-none");
};
const handlBack3 = () => {
  showCrushEl3.classList.toggle("d-none");
};

"use strict";
const displayList = () => {
  const fruitsElement = document.getElementById("fruits");
  const fruitsListCount = fruitsElement.childElementCount;

  const arrFruitsList = [];

  for (let i = 0; i < fruitsListCount; i++) {
    const fruitsItemElement = fruitsElement.children[i];
    arrFruitsList.push(fruitsItemElement.textContent);
  }

  // 現在残っているテーブル行を削除
  while (fruitsElement.lastChild) {
    fruitsElement.removeChild(fruitsElement.lastChild);
  }

  const newULElement = document.createElement("ul");

  arrFruitsList.map((fruitsText) => {
    // リストを作成
    const newElement = document.createElement("li");
    const newTextNode = document.createTextNode(fruitsText);
    newElement.appendChild(newTextNode);

    // 行に列を追加（newElmRowは親要素）
    newULElement.insertBefore(newElement, null);
  });

  fruitsElement.insertBefore(newULElement, null);
};

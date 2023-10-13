const textElement = document.getElementById("text");

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (e.target.checked) {
    textElement.style.background = "red";
  } else {
    textElement.style.background = "none";
  }
}

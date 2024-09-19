const input = document.getElementById("input");
const btn = document.getElementById("btn");
const boxes = document.querySelectorAll(".box");
let drag = null;
btn.addEventListener("click", function () {
  if (input.value != "") {
    boxes[0].innerHTML += `
<p class='item' draggable="true">${input.value}</p>
`;
  } else {
    window.alert("you must enter a value :(");
  }
  input.value = "";

  dragItem();
});
function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      item.style.opacity = "0.5";
      drag = item;
    });

    item.addEventListener("dragend", function () {
      item.style.opacity = "1";
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault(); //عشان الديفولت تاعها الي بتنفذ هون بمنعني من اني اعمل دروب للعنصر فبعمل بريفنت ديفولت
        box.style.background = "green";
        box.style.color = "white";
      });

      box.addEventListener("dragleave", function () {
        box.style.background = "#6e7ccc";
        box.style.color = "white";
      });

      box.addEventListener("drop", function () {
        box.append(drag);
        box.style.background = "#6e7ccc";
        box.style.color = "white";
      });
    }); //boxes for each
  }); //items for each
} //dragItem()

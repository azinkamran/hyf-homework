console.log("Script loaded");
const ul = document.querySelector("#showUL");
const searchInput = document.getElementById("searchInput");
const categories = document.getElementById("emojiCategorys");

const favoriteUL = document.querySelector("#favoriteUL");

let listOfEmoji;
function fetchEmoji() {
  fetch("https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      listOfEmoji = json;
      renderEmoji(listOfEmoji);
      //
      addtoSelecet();
    });
}
function renderEmoji(data) {
  ul.innerHTML = "";
  data.forEach(emoji => {
    const emojoName = document.createElement("li");
    emojoName.addEventListener("click", () => {
      console.log("copied to clipboard");
      //console.log(emoji.char)
      writeToClipboardOnPermission(emoji.name);
    });
    const favEmoji = document.createElement("li");
    emojoName.addEventListener("dblclick", () => {
      console.log("double");
      favoriteUL.appendChild(favEmoji);
      favEmoji.innerHTML = emoji.char;
    });
    ul.appendChild(emojoName);
    emojoName.innerHTML = emoji.char;
  });
}

fetchEmoji();

function convertToLowerCase(string) {
  return string.trim().toLocaleLowerCase();
}

function search() {
  //console.log("test");
  let inputValue = document.getElementById("searchInput").value;
  if (inputValue.trim() != 0) {
    //console.log(inputValue);
    const searched = listOfEmoji.filter(list =>
      convertToLowerCase(list.name).includes(convertToLowerCase(inputValue))
    );
    console.log(searched);
    renderEmoji(searched);
  }
}
searchInput.addEventListener("keyup", search);

function addtoSelecet() {
  let categoryList = [];
  listOfEmoji.forEach(emoji => {
    const category = emoji.category.split("(")[0];
    //console.log(category)
    if (!categoryList.includes(category)) {
      categoryList.push(category);
    }
  });
  console.log(categoryList);

  categoryList.forEach(caregory => {
    let categoryOption = document.createElement("option");
    categoryOption.appendChild(document.createTextNode(caregory));
    categories.appendChild(categoryOption);
  });

  function selectedCategory() {
    //console.log(categories.value);
    let showCategory = [];
    listOfEmoji.forEach(emoji => {
      //console.log(emoji.category)
      if (emoji.category.includes(categories.value)) {
        showCategory.push(emoji);
      }
      
      console.log(showCategory);
      renderEmoji(showCategory);
    });
  }

  categories.addEventListener("change", selectedCategory);
}

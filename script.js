const sortButton = document.getElementById("sort");

// prevent reload page
const sortInputArray = (e) => {
  event.preventDefault();
  const inputValues = [...document.getElementsByClassName("values-dropdown")];
};

sortButton.addEventListener("click", sortInputArray);

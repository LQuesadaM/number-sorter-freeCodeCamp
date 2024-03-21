const sortButton = document.getElementById("sort");

// prevent reload page
const sortInputArray = (e) => {
  event.preventDefault();
};

sortButton.addEventListener("click", sortInputArray);

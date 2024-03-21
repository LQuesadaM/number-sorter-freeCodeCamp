const sortButton = document.getElementById("sort");

// prevent reload page
const sortInputArray = (e) => {
  event.preventDefault();
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
  console.log(inputValues);
};

sortButton.addEventListener("click", sortInputArray);

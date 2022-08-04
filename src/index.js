const companyList = document.querySelectorAll("[data-filter]"); // list of comany
const filterList = document.querySelectorAll(".filters li"); // list of filters available
let filter = [];

function filterResult() {
  filter = document.querySelectorAll("li.active"); // list of active filters
  let filterVar = Array.from(filter).map((item) => item.dataset.type); // array having data-filter
  let filtered = Array.from(companyList).filter((node) => {
    let text = node.dataset.filter;
    return filterVar.filter((value) => text.includes(value.toLowerCase())) // check if the active filter class is available in data-filter 
      .length;
  });

  if(filtered.length > 0) {
    Array.from(companyList).map((item) => (item.style.display = "none")); // hide all the company list 
    Array.from(filtered).map((item) => {
      item.style.display = "block";
    });    // show the filtered list
  } else {
    Array.from(companyList).map((item) => (item.style.display = "block")); // show all if the filtered  result is zero.
  }
}

// CLicking on the filter available - Checkboxes

filterList.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("active");
    filterResult();
  });
});

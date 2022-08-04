const companyList = document.querySelectorAll("[data-filter]");
const filterList = document.querySelectorAll(".filters li");
let filter = [];

// const getData = () => {
//   const dataValue = fetch('./../data.json')
//   .then((response) => {
//     return response.json();
//   });
//   return dataValue;
// }

// companyList.forEach(element => {
//   console.log(element.dataset.filter);

// });


function filterResult() {
  filter = document.querySelectorAll("li.active");
  let filterVar = Array.from(filter).map((item) => item.dataset.type);
  let filtered = Array.from(companyList).filter((node) => {
    let text = node.dataset.filter;
    return filterVar.filter((value) => text.includes(value.toLowerCase()))
      .length;
  });

  if(filtered.length > 0) {
    Array.from(companyList).map((item) => (item.style.display = "none"));
    Array.from(filtered).map((item) => {
      item.style.display = "block";
    });
  } else {
    Array.from(companyList).map((item) => (item.style.display = "block"));
  }
}

filterList.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("active");
    filterResult();
  });
});

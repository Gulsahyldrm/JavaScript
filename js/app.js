import { menu } from "./data.js";

const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

const categories = menu.reduce((values, items) => {
    if (!values.includes(items.category)) {
      values.push(items.category);

    }
    return values;
  },
  ["ALL"],
);

console.log("categories : ", categories);

const btnCategories=categories.map((category) =>{
    return `<button type="button" class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
}).join("");

console.log("btnCategories :", btnCategories);
btnContainer.innerHTML=btnCategories;

const allBtn=document.querySelectorAll(".btn-item");

console.log("allBtn :" ,allBtn);

allBtn.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const btnCategory=e.currentTarget.dataset.id;
        console.log("btnCategory :", btnCategory);

        const menuCategoryItem=menu.filter((item) =>{
            if(item.category===btnCategory){
                return item;
            }
        });

        console.log("menuCategoryItem : ", menuCategoryItem);
        if(btnCategory==="ALL"){
            menuList(menu);
        }else{
            menuList(menuCategoryItem);
        }
    });
});

const menuList=(menuItems) =>{
    const menuDisplay=menuItems.map((item) =>{
        return `
        <div class="menu-items col-lg-6 col-sm-12">
        <img src=${item.img}
         alt=${item.title}
         class="photo"            
         >
         <div class="menu-info">
          <div class="menu-title"> ${item.title}</div>
          <div class="price">${item.price}  </div>
          <div class="menu-text">${item.desc} </div>
         </div>
      </div>
        `;
    }).join("");

    sectionCenter.innerHTML=menuDisplay;
};

menuList(menu);
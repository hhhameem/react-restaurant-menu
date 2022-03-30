import React, { useState } from "react";
import "./App.css";
import Categories from "./Components/Categories/Categories";
import Menu from "./Components/Menu/Menu";
import items from "./data";
// import image from "menu.png";

//dynamically creating unique values of category from data
const categories = [].concat(...new Set(items.map((item) => item.category)));

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("all");

  //setting item to the sate variable depending on the category
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      setActiveCategory(category);
    } else {
      setActiveCategory(category);
      setMenuItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <span style={{ display: "inline-flex" }}>
            <h2>our menu</h2>
            <img
              src='menu.png'
              alt=''
              style={{ width: "50px", height: "45px" }}
            />
          </span>{" "}
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

import React from "react";

const Categories = (props) => {
  const { filterItems, categories, activeCategory } = props;

  return (
    <div className='btn-container'>
      <button
        className={`filter-btn 
        ${activeCategory === "all" && "filter-btn-active"}`}
        onClick={() => filterItems("all")}
      >
        ALL
      </button>
      {categories.map((item) => (
        <button
          className={`filter-btn 
          ${activeCategory === item && "filter-btn-active"}`}
          key={item}
          onClick={() => filterItems(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Categories;

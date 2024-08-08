import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Accordion } from "./components/Accordion";
import { Brands } from "./components/Brands";
import { useCategoryContext } from "./components/CategoryContext";

type Category = {
  icon: string;
  name: string;
};

function App() {
  const categories: Category[] = [
    { icon: "/img/photographer.svg", name: "Photographer" },
    { icon: "/img/dj.svg", name: "DJ" },
    { icon: "/img/band.svg", name: "Band" },
    { icon: "/img/decorations.svg", name: "Decorations" },
    { icon: "/img/florist.svg", name: "Florist" },
    { icon: "/img/makeup-artist.svg", name: "Make up artist" },
    { icon: "/img/bakery.svg", name: "Bakery" },
  ];

  const { selectedCategory } = useCategoryContext();
console.log(selectedCategory)
  return (
    <>
      <Header />
      <div className="wrapper">
        <Brands />
        <Accordion categories={categories} />
        {selectedCategory
          ? categories
              .filter((item) => item.name === selectedCategory?.name)
              .map((item, index) => <CardList key={index} title={item.name} />)
          : categories.map((item, index) => (
              <CardList key={index} title={item.name} />
            ))}
      </div>
    </>
  );
}

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuUrl } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const { id } = useParams();
  const menuUrl = MenuUrl(id);
  const fetchData = async () => {
    const responseData = await axios.get(menuUrl);
    setResInfo(responseData);
  };
  const info = resInfo?.data?.data?.cards[0]?.card?.card?.info;
  const {
    name = "Default Name",
    cuisines = [],
    costForTwoMessage = "Unknown",
  } = info || {};
  const differentCategoryOfMenu =
    resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
      1
    ); //exclude first option as it is not usefull
  useEffect(() => {
    fetchData();
  }, []);
  return resInfo?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      {differentCategoryOfMenu
        ? differentCategoryOfMenu.map((item, index) => (
            <div className="menu-items-name-price" key={index}>
              <h2 key={item.card.card.title}>{item.card.card.title}</h2>
              {item.card.card.categories ? (
                item.card.card.categories.map((category) => (
                  <div key={category.title}>
                    <h3>{category.title}</h3>
                    <ol>
                      {category.itemCards.map((eachItem) => (
                        <li key={eachItem.card.info.id}>
                          {eachItem.card.info.name}: Rs.
                          {eachItem.card.info.price / 100}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))
              ) : (
                <ol>
                  {item.card.card.itemCards?.map((food) => (
                    <li key={food.card.info.id}>
                      {food.card.info.name}: Rs.{food.card.info.price / 100}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))
        : null}
    </div>
  );
};
export default RestaurantMenu;

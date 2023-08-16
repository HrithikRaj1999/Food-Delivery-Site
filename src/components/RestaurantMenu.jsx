import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { id } = useParams();
    const { resInfo, differentCategoryOfMenu, name, cuisines, costForTwoMessage } =
        useRestaurantMenu(id);

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
                              item.card.card.categories.map(category => (
                                  <div key={category.title}>
                                      <h3>{category.title}</h3>
                                      <ol>
                                          {category.itemCards.map(eachItem => (
                                              <li key={eachItem.card.info.id}>
                                                  {eachItem.card.info.name}: Rs.
                                                  {eachItem.card.info.price / 100 ||
                                                      eachItem.card.info.defaultPrice / 100}
                                              </li>
                                          ))}
                                      </ol>
                                  </div>
                              ))
                          ) : (
                              <ol>
                                  {item.card.card.itemCards?.map(food => (
                                      <li key={food.card.info.id}>
                                          {food.card.info.name}: Rs.
                                          {food.card.info.price / 100 ||
                                              food.card.info.defaultPrice / 100}
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

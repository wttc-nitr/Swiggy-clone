import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const Menu = () => {
  const { resId } = useParams() as { resId: string };
  const resInfo = useResMenu(resId);
  const [id, setId] = useState(1);

  if (!resInfo) return <h2>Restaurant-Menu page, loading...</h2>;

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[0].card?.card.info || {};

  const categories =
    resInfo.data.cards[2].groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordians */}
      {categories?.map((category, index) => (
        <MenuCategory
          key={category.card?.card?.title}
          data={category?.card?.card}
          showItems={id === index ? true : false}
          setIndex={() => {
            if (id === index) setId(-1);
            else setId(index);
          }}
        />
      ))}
    </div>
  );
};

export default Menu;

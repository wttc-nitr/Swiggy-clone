import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../store/cartSlice";
import { useAppDispatch } from "../store/actions";
import type { ItemCard } from "../types/resInfo";

const ItemList = ({ items, input }: { items: ItemCard[]; input: string }) => {
  const dispatch = useAppDispatch();
  const handleAddItem = (item: ItemCard) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item: ItemCard) => {
    dispatch(removeItem(item));
  };

  const method = input === "Remove" ? handleRemoveItem : handleAddItem;
  const title =
    input === "Remove" ? "Remove item from Cart" : "Add item to Cart";
  const btnValue = input === "Remove" ? "Delete" : "Add+";

  // console.log(items[0]);

  return (
    <>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="mx-2 my-5 pt-2 pb-3 text-left border-gray-300 border-b-2 last:pb-0 last:border-none flex justify-between"
        >
          {/* item-details */}
          <div className="w-9/12">
            {/* name + price */}
            <div className="my-2 text-base font-light">
              {item?.card?.info?.name} - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice! / 100}
            </div>

            {/* description */}
            <p className="text-xs font-light">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* item-image */}
          <div className="w-3/12 ml-3 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-xl"
            />
            <button
              onClick={() => method(item)}
              title={title}
              className="
                bg-slate-300 font-normal text-base px-2 py-1 absolute rounded-lg rounded-tr-none rounded-bl-none right-0 bottom-0 hover:shadow-xl"
            >
              {" "}
              {btnValue}{" "}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;

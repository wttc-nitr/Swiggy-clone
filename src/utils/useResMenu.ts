import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
import { ResMenu } from "../types/resInfo";

const useResMenu = (resId: string) => {
  const [resInfo, setResInfo] = useState<ResMenu>();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useResMenu;

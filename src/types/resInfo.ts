export type ResMenu = {
  data: Data;
};

export type Data = {
  cards: DataCard[];
};

export type DataCard = {
  card?: PurpleCard;
  groupedCard?: GroupedCard;
};

export type PurpleCard = {
  card: FluffyCard;
};

export type FluffyCard = {
  "@type": string;
  info: PurpleInfo;
};

export type PurpleInfo = {
  id: string;
  name: string;
  city: string;
  slugs: Slugs;
  uniqueId: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines: string[];
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  slugString: string;
  totalRatings: number;
  backgroundImage: string;
  latLong: string;
};

export type Sla = {
  restaurantId: string;
  deliveryTime: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  stressFactor: number;
  rainMode: string;
  longDistance: string;
  zoneId: number;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
};

export type Slugs = {
  restaurant: string;
  city: string;
};

export type GroupedCard = {
  cardGroupMap: CardGroupMap;
};

export type CardGroupMap = {
  REGULAR: Regular;
};

export type Regular = {
  cards: REGULARCard[];
};

export type REGULARCard = {
  card: TentacledCard;
};

export type TentacledCard = {
  card: StickyCard;
};

export type StickyCard = {
  "@type": string;
  title?: string;
  itemCards?: ItemCard[];
};

export type ItemCard = {
  card: ItemCardCard;
};

export type ItemCardCard = {
  "@type": string;
  info: FluffyInfo;
};

export type FluffyInfo = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  inStock: number;
  isVeg: number;
  price?: number;
  defaultPrice?: number;
  showImage: boolean;
  isBestseller: boolean;
  ratings: Ratings;
};

export type Ratings = {
  aggregatedRating: AggregatedRating;
};

export type AggregatedRating = {
  rating: string;
  ratingCount: string;
  ratingCountV2: string;
};

export type RestaurantType = {
  info: Info;
};

export type Info = {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  badges: Badges;
  isOpen: boolean;
  type: string;
  displayType: string;
};

export type Availability = {
  nextCloseTime: Date;
  opened: boolean;
};

export type Badges = {
  textExtendedBadges: TextExtendedBadge[];
};

export type TextExtendedBadge = {
  iconId: string;
  shortDescription: string;
  fontColor: string;
  description?: string;
};

export type TextExtendedBadges = {
  badgeObject: BadgeObject[];
};

export type BadgeObject = {
  attributes: TextExtendedBadge;
};

export type Sla = {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
};

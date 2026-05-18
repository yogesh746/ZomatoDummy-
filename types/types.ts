export type restaurentItems = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  rating: number;
  description: string;
  price: number;
};

export type FilterItem = {
  id: string;
  title: string;
  icon: string;
};

export type BannerItem = {
  id: string;
  upTo: string;
  percentOff: string;
  nocook: string;
  secondCardImg?: any;
  image?: any;
  july: string;
  big: string;
  discount: string;
  text: string;
};
export type actionData = {
  id: string;
  image: string;
  event: string;
  eventType: string;
};
export type ItemType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
};

 export type foodItem = {
    id: string;
    img: string;
    title: string;
  };

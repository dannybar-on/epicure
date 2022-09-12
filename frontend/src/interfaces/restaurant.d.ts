interface Restaurant {
  _id: string;
  name: string;
  chef: string;
  opens: string;
  closes: string;
  thumb: string;
  image: string;
  dishes: string[];
  reviews: string[];
  latitude: string;
  longitude: string;
  stars: number;
  isNew: boolean;
  isOpen: boolean;
}

export default Restaurant;

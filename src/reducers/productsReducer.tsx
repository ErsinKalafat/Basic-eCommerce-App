interface IProduct {
  id: number
  name: string
  category: string
  price: number
  image: string,
  createdAt: string
}

const initialState: IProduct[] = [];

const transportToHottest = (state = initialState, action) => {
  switch (action.type) {
    case "TRANSPORT_TO_HOTTEST":
      return action.payload;
    default:
      return state;
  }
};

const addToCart = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (
        [...state, action.payload]
      );
    default:
      return state;
  }
};

export { transportToHottest, addToCart };

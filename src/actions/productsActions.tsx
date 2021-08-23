interface IProduct {
  id: number
  name: string
  category: string
  price: number
  image: string,
  createdAt: string
}

let transportToHottest = (products: IProduct[] ) => ({
  type: "TRANSPORT_TO_HOTTEST",
  payload: products
});

let addToCart = (product: IProduct) => ({
  type: "ADD_TO_CART",
  payload: product
});



export { transportToHottest, addToCart };

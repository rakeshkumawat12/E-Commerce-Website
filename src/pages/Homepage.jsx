import React from "react"
import Home from "../components/MainSection/Home"
import Flashdeals from "../components/Flashdeals/FlashDeals"
import TopCategory from "../components/topcategory/TopCategory"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/bigdiscount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"

const Homepage = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Flashdeals productItems={productItems} addToCart={addToCart} />
      <TopCategory />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Homepage

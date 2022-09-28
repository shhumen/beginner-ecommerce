import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Announcement from "../components/announcement/Announcement";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
    return (
        <>
            <Home cartItem={cartItem}/>
            <FlashDeals productItems={productItems} addToCart={addToCart}/>
            <TopCate/>
            <NewArrivals/>
            <Discount/>
            <Shop shopItems={shopItems} addToCart={addToCart}/>
            <Announcement/>
            <Wrapper/>
        </>
    )
}

export default Pages
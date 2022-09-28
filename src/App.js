import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/cart/Cart";
import Data from "./components/flashDeals/Data";
import Sdata from "./components/shop/Sdata";
import Footer from "./common/footer/Footer";


function App() {
    // step 1 : fetch data from database
    const {productItems} = Data
    const {shopItems} = Sdata

    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {
        const productExit = cartItem.find((item) => item.id === product.id)
        if (productExit) {
            setCartItem(cartItem.map((item) => (item.id === product.id ? {
                ...productExit,
                qty: productExit.qty + 1
            } : item)))
        } else {
            setCartItem([...cartItem, {...product, qty: 1}])
        }
    }

    const decreaseQty = (product) => {
        const productExit = cartItem.find((item) => item.id === product.id)
        if (productExit.qty === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(cartItem.map((item) => (item.id === product.id ? {
                ...productExit,
                qty: productExit.qty - 1
            } : item)))
        }
    }


    return (
        <>
            {/*<Navbar/>*/}
            <Router>
                <Header cartItem={cartItem}/>
                <Routes>
                    <Route path="/" element={<Pages
                        productItems={productItems}
                        addToCart={addToCart} shopItems={shopItems}/>}/>
                    <Route path="/cart"
                           element={<Cart cartItem={cartItem} decreaseQty={decreaseQty} addToCart={addToCart}/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;

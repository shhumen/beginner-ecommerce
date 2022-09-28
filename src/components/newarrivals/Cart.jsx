import Ndata from "./Ndata";

const Cart = () => {
    return (
        <>
            <div className="container grid product">
                {
                    Ndata.map((item, index) => {
                        return (
                            <>
                                <div className="box product" key={index}>
                                    <div className="img">
                                        <img src={item.cover} alt=""/>
                                    </div>
                                    <h4>{item.name}</h4>
                                    <span>{item.price}</span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cart
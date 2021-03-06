import { React, Component, Link } from "../library";

import { calculatePriceAfterDiscount } from "../utils/util";

export default class ItemList extends Component {
    render() {
        const { items, handleRemoveItem } = this.props;
        return (items.map((item, index) => {
            const {brand, productName, productActualPrice, discount, productId, productImages} = item;
                return(<div key={productId}>
                    {index>0 && <hr/>}
                    <div className="mt-2 row">
                        <div className="col-md-2 col-sm-3 col-3">
                            <Link to={`product/${productId}`}><img className="img-thumbnail" src={productImages[0]} alt={productName} /></Link>
                        </div>
                        <div className="col-md-6 col-sm-5 col-5 px-0">
                            <Link to={`product/${productId}`}><p className="_cut_text">{productName}</p></Link>
                            <div className="text-muted"><small>{brand}</small></div>
                            <div>
                                <strong className="mr-2">₹{calculatePriceAfterDiscount(productActualPrice, discount, 2)}</strong>
                                <s className="mr-2">{productActualPrice}</s>
                                <small className="text-success"><strong>{discount}% off</strong></small>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-3">
                            <p><small>Delivery in 2 days, Mon | ₹40 </small></p>
                        </div>
                        <div className="col-1 p-0">
                            <div className="_absolute_top_right">
                                <span className="btn text-danger" onClick={() => handleRemoveItem(productId)}>
                                    <span className="material-icons _icon">delete</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>)
            })
        )
    }
}

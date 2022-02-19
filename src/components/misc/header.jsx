import { React, Link, connect } from "../../library";

import CutomerQuickLinks from '../loginSignup/cutomerQuickLinks';
import { getCustomerLoginStatus } from "../../redux/customer/customer.selector";

const mapStateToProps = () => ({
    customerLoggedIn: getCustomerLoginStatus()
});

const Header = ({hideCart, hideLogin, customerLoggedIn}) => {

    return (
        <nav className="navbar navbar-main navbar-gradient sticky-top">
            <Link to={'/'}>
                <img src={"../logo_light.png"} alt="UKART" style={{ width: "8rem" }} />
            </Link>
            <div className="navbar-items">
                {!hideLogin && (customerLoggedIn?
                    <CutomerQuickLinks/>:
                    <Link to={'/user/login'}>
                        <button className="btn-primary-outline-light">Login</button>
                    </Link>)
                }
                {!hideCart && <Link to={'/cart'}>
                    <div className="btn-icon">
                        <span className="align-straight">Cart</span>
                        <span className="icon-left material-icons">shopping_cart</span>
                    </div>
                </Link>
                }
            </div>
        </nav>
    )
}

export default connect(mapStateToProps)(Header);
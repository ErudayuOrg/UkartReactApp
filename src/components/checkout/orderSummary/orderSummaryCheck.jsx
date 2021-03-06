import { React, Component, connect, Tile, DialogModal } from "../../../library";

import ItemList from '../../itemList';

import { getCheckoutStepStatus, getCheckoutItems } from "../../../redux/checkout/checkout.selector";
import { setCheckoutStepStatus, removeItemFromCheckout } from "../../../redux/checkout/checkout.action";

import APP_CONST from "../../../APP_CONST";

const mapStateToProps = () => ({
    stepThreeStatus: getCheckoutStepStatus(APP_CONST.STEP.THREE),
    checkoutItems: getCheckoutItems()
});

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCheckout: (productId) => dispatch(removeItemFromCheckout(productId)),
    setCheckoutStatus: (step, status) => dispatch(setCheckoutStepStatus(step, status))
});

class OrderSummaryCheck extends Component {
    changeDetail = () =>{
        this.props.setCheckoutStatus(APP_CONST.STEP.THREE, APP_CONST.OPEN);
        this.props.setCheckoutStatus(APP_CONST.STEP.FOUR, false);
    }

    getHeaderContent = (color) => (
        <React.Fragment>
            <span className={`badge badge-${color}`}>3</span>
            <span className="text-muted px-1"><strong>ORDER SUMMARY</strong></span>
        </React.Fragment>
    );

    confirmCheckoutItem = () =>{
        this.props.setCheckoutStatus(APP_CONST.STEP.THREE, APP_CONST.CHECKED);
        this.props.setCheckoutStatus(APP_CONST.STEP.FOUR, APP_CONST.OPEN);
    }
    
    moveItemfromCheckout = (productId) => {
        this.props.removeItemFromCheckout(productId);
    }

    showUncheckedOrderSummary = () =>{
        const { stepThreeStatus, checkoutItems } = this.props;
        return( 
            stepThreeStatus?(
                checkoutItems.length?<React.Fragment>
                    <ItemList items={checkoutItems} handleRemoveItem= {this.moveItemfromCheckout}/>
                        <hr/>
                        <div className="row mt-3">
                            <div className="offset-md-8 offset-sm-8 offset-6 col-md-4 col-sm-4 col-6">
                                <button
                                    className="btn btn-dark btn-block" 
                                    onClick={this.confirmCheckoutItem}>
                                        <small> CONTINUE </small>
                                </button>
                            </div>
                        </div>
                </React.Fragment>:
                <small>Your checkout has no items.</small>
            ):
            <div className="row">
                <div className="col-md-9 col-sm-9 col-9">
                    {this.getHeaderContent('light')}
                </div>
            </div>
        );
    }
    
    showCheckedOrderSummary = () =>{
        const {checkoutItems} = this.props;
        const checkedItem = `${checkoutItems.length} item${checkoutItems.length>1? 's': ""}`
        return( 
            <React.Fragment>
                <div className="row">
                    <div className="col-md-9 col-sm-9 col-8">
                        {this.getHeaderContent('light')}
                        <span className="text-dark"><strong>&#x2713;</strong></span>
                        <div className="col pl-3 ml-1">
                            <small> <strong>{checkedItem}</strong> </small>
                        </div>
                    </div>
                    <div className="col-sm-3 col-sm-3 col-4 pr-1 pl-0">
                        <button className="btn btn-outline-dark btn-block px-0" onClick={this.changeDetail}>Change</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const {stepThreeStatus, checkoutItems} = this.props;
        return (
            <React.Fragment>
                <Tile
                    className="mb-3"
                    headerClass ="_primary_bg"
                    header={stepThreeStatus === APP_CONST.OPEN && this.getHeaderContent('dark')}>
                    {stepThreeStatus === APP_CONST.CHECKED? this.showCheckedOrderSummary(): this.showUncheckedOrderSummary()}
                </Tile>
                { !checkoutItems.length && <DialogModal/> }
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryCheck);
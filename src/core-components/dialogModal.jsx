import { React, Component, Link } from "../library";

class DialogModal extends Component{
    componentDidMount(){
        document.body.style.overflow = "hidden";
    }
    
    componentWillUnmount(){
        document.body.style.overflow = null;
    }

    render() {
        return(
            <div className="_page_overlay">
                <div className="_center_child">
                    <div className="card _p_md_5 _w_h_md">
                        <div className="card-body text-center">
                            <div className="_svg_container">
                                <svg fill="rgb(255, 67, 67)" viewBox="0 0 20 20">    
                                    <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm.833-13.125H9.167V5h1.666v1.875zm0 8.125H9.167V8.75h1.666V15z"/>
                                </svg>
                            </div>
                            <h5 className="card-title my-4"> Your checkout has no items </h5>
                            <Link to="./cart" className="btn _primary_bg mt-3 mb-4"><small> GO TO CART </small></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogModal;
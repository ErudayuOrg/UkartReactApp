import { React } from "../library";

const Banner = ({items}) => (
  <div className="carousel">
    <div className="carousel-container">
      <ul className="carousel-track">
        {
          items.length > 0 && items.map((item,index) => (
            <li className="carousel-slide" key={index}>
              <img className="carousel-image" src={item.imageUrl} alt={item.altName} />
            </li>)
          )
        }
      </ul>
    </div>
    <button className="carousel-button-prev"> <i className="material-icons">arrow_back_ios</i> </button>
    <button className="carousel-button-next"> <i className="material-icons">arrow_forward_ios</i> </button>
  </div>
);

export default Banner;


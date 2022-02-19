import { React, Link, connect } from "../../library";

import { getCategories } from "../../redux/directory/directory.selector";

const mapStateToProps = () => ({
    categories: getCategories()
});

const Directory = ({categories}) => {
    return (
        <nav className="sidebar-container">
            <div className="sidebar bar-dark">
                {
                    categories.map( (category) => (
                        <Link key={category.id} className="sidebar-items link-light"
                            to={`/${category.title.toLowerCase()}`}>
                            <span className="item-icon material-icons">{category.icon}</span>
                            <span className="item-name small"> {category.title.toUpperCase()} </span>
                        </Link>)
                    )
                }
            </div>
        </nav>
    );
}

export default connect(mapStateToProps)(Directory);
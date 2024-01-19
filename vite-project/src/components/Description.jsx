import Loader from "./Loader";
import PropTypes from "prop-types"
import "./Description.css"
const Description=({isLoading,weatherDescription})=>{
    return(
        <div className="description">
            <h2 className="description-title">Description</h2>
            <div className="description-divider">
                {isLoading && <Loader/>}
                <p className="description-text">{weatherDescription}</p>
            </div>
        </div>
    );
};
Description.defaultProps={
    weatherDescription:"Waiting for location data.",
};
Description.propTypes={
    weatherDescription : PropTypes.string,
};
export default Description;
import { useState } from "react";
import PropTypes from "prop-types";

function WeatherForm({onSubmit}) {
    const [inputLocation,setInputLocation]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(inputLocation);
    }
    return(
        <form className="location-form" onSubmit={handleSubmit}>
            <div className="location-form-element">
                <label htmlFor="location">Enter Location:</label>
                <input type="text"
                id="location"
                value={inputLocation} 
                onChange={(e)=>setInputLocation(e.target.value)}
                placeholder="City, State Code(if USA),Country code" />
                <input type="submit" value="Submit" />
            </div>
            <p className="instructions">
        For USA, enter &quot;city,two-letter state code,US&quot; eg
        &quot;Oskaloosa,IA,US&quot;. For every other country, enter
        &quot;city,two-letter country code&quot; eg. &quot;Lillehammer,NO&quot;.
      </p>
        </form>
    );
}
WeatherForm.propTypes={
    onSubmit:PropTypes.func
}


export default WeatherForm;
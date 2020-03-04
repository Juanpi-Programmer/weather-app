import React from 'react';


function WeatherSearch(props) {
    return (
        <form className="form-group" action="">
            
            {/* <div className="form-group">
                <input type="text" placeholder= "Time" />
                <input type="text" placeholder= "Day" />
            </div> */}
            
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
}

export default WeatherSearch;
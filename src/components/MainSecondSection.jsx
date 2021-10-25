import bestCoffee from '../assets/bruno-cervera-YH7mGnigHRs-unsplash 1 1.jpg';
import books from '../assets/vandan-patel-vfiuGpL9fiU-unsplash 1 1.jpg';
import snowflake from '../assets/snowflake.svg';
import sunGlasses from '../assets/sunglasses.svg';
import umbrella from '../assets/umbrella.svg';
import loading from '../assets/loading.svg';
import { useEffect } from 'react';
import meteoReducer from '../reducers/meteoReducer';
import { GET_DATA_FROM_SERVER } from '../constants';
import { useReducer } from 'react';
import { useState } from 'react';

const MainSecondSection = () => {

    //noError state helps to render conditionCode's images
    const [noError, setNoError] = useState('');

    //API state
    const [meteo, meteoDispatch] = useReducer(meteoReducer, { weather: [] });

    //GETTING DATA FROM meteo SERVER
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('/v1/places/vilnius/forecasts/long-term')
            response = await response.json()
            meteoDispatch({ type: GET_DATA_FROM_SERVER, payload: response.forecastTimestamps });
            setNoError('true');
        }

        fetchMyAPI()
    }, [])

    //IMAGE SHOWN BY AIR CONDITION CODE
    const getImageByConditionCode = () => {
        let conditionCode = meteo.weather[meteo.weather.length - 1].conditionCode;
        if (conditionCode === 'clear' || conditionCode === 'isolated-clouds' || conditionCode === 'scattered-clouds' || conditionCode === 'na') {
            return sunGlasses;
        } else if (conditionCode === 'overcast' || conditionCode === 'light-rain' || conditionCode === 'moderate-rain' || conditionCode === 'heavy-rain' || conditionCode === 'fog') {
            return umbrella;
        } else if (conditionCode === 'sleet' || conditionCode === 'light-snow' || conditionCode === 'moderate-snow' || conditionCode === 'heavy-snow') {
            return snowflake;
        }
    }

    return (
        <div className="secondSection">
            <h1>Products</h1>
            <h3>Offers today</h3>
            <div className="secondSectionContainer">
                <img alt="Weather" className='weatherImage' src={(noError === 'true') ? getImageByConditionCode() : loading} />
                <div className="secondSectionRightImages">
                    <div className='secondSectionRightImage' style={{ backgroundImage: `url("${bestCoffee}")` }}>
                        <span>THE BEST COFFEE</span>
                    </div>
                    <div className='secondSectionRightImage' style={{ backgroundImage: `url("${books}")` }}>
                        <span>TOP 100 BOOKS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSecondSection;
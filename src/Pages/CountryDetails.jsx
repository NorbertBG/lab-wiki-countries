import { useParams, Link } from 'react-router-dom'
import countries from "../countries.json"

function CountryDetails(props) {

    
    const { countryId } = useParams();

    console.log(countryId);

    const foundCountry = countries.find((onecountry) => {   //  <== ADD
        return onecountry.alpha3Code === countryId;
    });

    return (

        <div >
            <h2>{foundCountry.name.common}</h2>
            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt="flag"/>
            <table >
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {foundCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <td>
                    <ul>
                        {foundCountry.borders.map(border => {
                        return (<li key={border}>{border}</li>)
                        })}
                        </ul>
                    </td>
                </tbody>
            </table>

            <Link to="/">Back</Link>

        </div>

    )
}

export default CountryDetails;
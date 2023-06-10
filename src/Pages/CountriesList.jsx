import { Link } from "react-router-dom";     // <== IMPORT


function Navbar(props) {
    const { countries } = props
    return (
        <ul>
            {countries.map(country => (
                <li key={country.alpha3Code}>
                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt="flag" />
                    <h3  > <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link> </h3>
                </li>
            ))}
        </ul>
    )
}

export default Navbar;
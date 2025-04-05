import {Link} from "react-router-dom";
const NotFound = () => {

    return (
        <div>
        <h2>404 not found</h2>
               <p>The page you are looking for does not exist.</p>
        <Link to="/">Back to homepage...</Link>
        </div>
    );
    }
    export default NotFound;
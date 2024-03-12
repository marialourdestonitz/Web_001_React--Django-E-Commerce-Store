import { useState, useEffect } from "react";
import { setUser } from "../store/utils/auth";


// eslint-disable-next-line react/prop-types
const MainWrapper = ({ children }) => {

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const handler = async () => {
            setLoading(true);

            await setUser()

            setLoading(false);
        }
        handler();

    }, []);


    return (
        <>{loading ? null : children}</>
    )
}



export default MainWrapper
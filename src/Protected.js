import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
const Protected = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-info');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/register');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default Protected;
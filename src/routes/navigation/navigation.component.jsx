import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const signOutUserHandler = async () => {
      await signOutUser();
      setCurrentUser(null);
    }

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <Logo className="logo"/>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                SHOP
                </Link>

                {

                  currentUser ? ( 
                    <span className="nav-link" onClick={signOutUserHandler}>SIGN OUT</span> ) : 
                    ( <Link className="nav-link" to='/auth'>
                    SIGN IN
                    </Link>)
                }
                
                
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;
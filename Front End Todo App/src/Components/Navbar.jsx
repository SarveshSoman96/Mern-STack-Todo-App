import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated , user} = useAuth0();

  return (
    <section className="nav_section">
        <div className="container nav_container flex_1">
            
            <h1>MyToDo App</h1>

            <div className="auth_buttons">  
              {
                isAuthenticated ? (
                  <>
                    <span>Welcome {user.name}</span>
                    <button className="auth_btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                  </>
                ) : (

                  <button className="auth_btn" onClick={() => loginWithRedirect()}>Log In</button>
                )
              }
            </div>
            
        </div>
    </section>
  )
}

export default Navbar;
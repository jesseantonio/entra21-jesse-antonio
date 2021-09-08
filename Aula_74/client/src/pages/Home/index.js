import { Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css"

export function Home(props) {
    const { accessToken } = useAuth();
        
    if (accessToken) {
        return <Redirect to="/dashboard" />        
    }

    return (
      <>        
        <h1>Home</h1>
        <p>{props.text}</p>       
      </>
    );  
}
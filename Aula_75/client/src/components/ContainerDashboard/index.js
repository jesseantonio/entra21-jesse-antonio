import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css";

export function ContainerDashboard({ title, children }) {
    const { signOut } = useAuth();
    const history = useHistory();

    function handleSignOut(){
        signOut();
        history.replace("/");
    }

    return (
        <>
            <header>
                <h1>{title}</h1>
                <button className="botao" onClick={handleSignOut}>Sign Out</button>
            </header>
            <div>{children}</div>
        </>
    );
}
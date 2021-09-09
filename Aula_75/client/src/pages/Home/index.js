import "./styles.css";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export function Home(props) {
  const { accessToken } = useAuth();
  const history = useHistory();

  if (accessToken) {
    return <Redirect to="/dashboard" />
  }




  return (
    <>
      <div>
        <video loop muted autoplay poster="" class="fullscreen-bg__video">
          <source src="./background.mp4" type="video/mp4" />
        </video>
        <h1>Home</h1>
        <p>{props.text}</p>
        <button onClick={() => history.push("/login")}>Logar</button>
      </div>




    </>
  );
}
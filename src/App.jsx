import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import "./App.css";
import External from "./components/External.jsx";
import Inline from "./components/Inline.jsx";
import Button from "./button/Button.jsx";
import TeamCard from "./components/TeamCard.jsx";
import UserGreeting from "./components/UserGreeting.jsx";

function App() {
  return (
    <>
      <Header />
      <Card />
      <External />
      <Button />
      <Inline />
      <UserGreeting isLoggedIn={true} username="Joe" />
      <TeamCard name="Joe Rakesh" role="Using Props" />
      <TeamCard name=" Rakesh" role="Software Engineer" />
      <Footer />
    </>
  );
}

export default App;

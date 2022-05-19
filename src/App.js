import "./index.scss"
import Header from './components/header'
import Home from "./pages/home/Home"
import Rooms from "./pages/rooms/Rooms"
import Facilities from "./pages/facilities/Facilities"
import Contact_us from "./pages/contact_us/Contact_us"
import Footer from './components/footer'
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Header className="header"/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/contact" component={Contact_us} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
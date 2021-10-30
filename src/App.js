import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyBookings from './Components/MyBookings/MyBookings';
import ManageAllBookings from './Components/ManageAllBookings/ManageAllBookings';
import PurchaseBooking from './Components/PurchaseBooking/PurchaseBooking';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/myBookings">
            <MyBookings></MyBookings>
          </Route>

          <Route path="/manageAllBookings">
            <ManageAllBookings></ManageAllBookings>
          </Route>

          <Route path="/purchaseBooking">
            <PurchaseBooking></PurchaseBooking>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

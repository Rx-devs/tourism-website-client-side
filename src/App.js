import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageAllBookings from './Components/ManageAllBookings/ManageAllBookings';
import MyBookings from './Components/MyBookings/MyBookings';
import PurchaseBooking from './Components/PurchaseBooking/PurchaseBooking';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;

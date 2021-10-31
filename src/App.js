import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddBookingPlace from './Components/AddBookingPlace/AddBookingPlace';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageAllBookings from './Components/ManageAllBookings/ManageAllBookings';
import MyBookings from './Components/MyBookings/MyBookings';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
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

            <Route path="/addBookingPlace">
              <AddBookingPlace></AddBookingPlace>
            </Route>

            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>

            <PrivateRoute path="/manageAllBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>

            <PrivateRoute path="/purchaseBooking/:_id">
              <PurchaseBooking></PurchaseBooking>
            </PrivateRoute>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

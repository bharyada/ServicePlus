import React, { Fragment, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/layout/Header';
import Navbar from './component/layout/Navbar';
import FooterSection from './component/layout/FooterSection';
import Footer from './component/layout/Footer';
// import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Alert from './component/layout/Alert';
import Dashboard from './component/dashboard/Dashboard';
import PrivateRoute from './component/routing/PrivateRoute';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Home from './component/pages/Home';
import LocalMovers from './component/pages/LocalMovers';
import LongDistanceMovers from './component/pages/LongDistanceMovers';
import CommercialMovers from './component/pages/CommercialMovers';
import VehicleMovers from './component/pages/VehicleMovers';
import OfficeRelocation from './component/pages/OfficeRelocation';
import HomeShifting from './component/pages/HomeShifting';
import About from './component/pages/About';
import PackersAndMovers from './component/pages/PackersAndMovers';
import Contact from './component/pages/Contact';
import NotFound from './component/pages/NotFound';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
  render() {
    // useEffect(() => {
    //   store.dispatch(loadUser());
    // }, []);
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/localmovers' component={LocalMovers} />
              <Route
                path='/longdistancemovers'
                component={LongDistanceMovers}
              />
              <Route path='/commercialmovers' component={CommercialMovers} />
              <Route path='/vehiclemovers' component={VehicleMovers} />
              <Route path='/officerelocation' component={OfficeRelocation} />
              <Route path='/homeshifting' component={HomeShifting} />
              <Route path='/about' component={About} />
              <Route path='/packersandmovers' component={PackersAndMovers} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
            {/* <Route exact path='/' component={Landing} /> */}
            <section className='container'>
              <Alert />
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
              </Switch>
            </section>
            <FooterSection />
            <div className='clearfix'></div>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

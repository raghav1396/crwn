import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage/homepage";
import ShopPage from "./page/shop/Shop";
import SignInAndSignUp from "./page/signInAndSignUp/SignInAndSignUp";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
    this.unsubscribeFromAuth = null
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    if(this.unsubscribeFromAuth)
      this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

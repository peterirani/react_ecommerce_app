import React from 'react';
import  { Route, Switch } from "react-router-dom";
import { auth } from "firebase/firebase.utils"

import './App.css';
import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CollectionPreview from "./components/collection-preview/collection-preview.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";



<<<<<<< HEAD


=======
>>>>>>> 9c0d5118f3d5f1662255a63f0331aa5334d31047
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser : null
        }
    }

<<<<<<< HEAD
    componentDidMount() {
        auth.onAuthStateChanged(user => {
=======
    // to unsubscribe from auth connection
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
>>>>>>> 9c0d5118f3d5f1662255a63f0331aa5334d31047
            this.setState({currentUser : user})
        })
    }

<<<<<<< HEAD

    render(){
=======
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
>>>>>>> 9c0d5118f3d5f1662255a63f0331aa5334d31047
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                    <Switch>
                        <Route  path='/shop' component={ShopPage} />
<<<<<<< HEAD
                        {/*<Route  path='/hats' component={HatsPage} />*/}
=======
>>>>>>> 9c0d5118f3d5f1662255a63f0331aa5334d31047
                        <Route  path='/collections' component={CollectionPreview} />
                        <Route  path='/signin' component={SignInAndSignUpPage} />
                        <Route  path='/' component={Homepage} />
                    </Switch>
                </header>
            </div>
        );
    }
<<<<<<< HEAD

=======
>>>>>>> 9c0d5118f3d5f1662255a63f0331aa5334d31047
}

export default App;

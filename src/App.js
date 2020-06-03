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


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser : null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            // to unsubscribe from auth connection
            let unsubscribeFromAuth = null;
        });
    }

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser : user})
        })
    }



    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                    <Switch>
                        <Route  path='/shop' component={ShopPage} />
                        {/*<Route  path='/hats' component={HatsPage} />*/}
                        <Route  path='/collections' component={CollectionPreview} />
                        <Route  path='/signin' component={SignInAndSignUpPage} />
                        <Route  path='/' component={Homepage} />
                    </Switch>
                </header>
            </div>
        );
    }
}

export default App;

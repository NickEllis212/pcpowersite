import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import BasketScreen from './screens/BasketScreen';
import Navbar from './Navbar';
import LoginScreen from './screens/LoginScreen';



function App() {

  return (
      <BrowserRouter>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Route path="/basket/:id?" component={BasketScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/signin" component={LoginScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
                
            </main>
            
        
        </BrowserRouter>
  );
}

export default App;

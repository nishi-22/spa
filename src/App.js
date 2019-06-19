import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route,Link,Redirect} from 'react-router-dom';
import Product from "./components/product/product";
import Employee from "./components/employee/employee";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <nav>
                            <ul className="formatLink">
                                <li style={{display: 'inline-block', margin: '20px'}}><Link to="/">Home</Link></li>
                                <li style={{display: 'inline-block'}}><Link to="/empl">Employee</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Route path='/' exact component={Product}/>
                    <Route path='/empl' exact component={Employee}/>
                   /* <Redirect from='/' to='/empl'/> */
                </div>
            </BrowserRouter>

        );
    }
}

export default App;

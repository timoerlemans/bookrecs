import React from 'react';
import { Search } from './Components/Pages/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './Components/Pages/Homepage';
import { BookPage } from './Components/Pages/BookPage';

function App() {
    return (
            <Router>
                <div className="min-h-screen">
                    <Switch>
                        <Route path="/search/:id">
                            <Search/>
                        </Route>
                        <Route path="/book/:id">
                            <BookPage/>
                        </Route>
                        <Route path="/">
                            <Homepage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
    )
}

export default App;

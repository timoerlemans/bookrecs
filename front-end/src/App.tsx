import React from 'react';
import { Search } from './Components/Pages/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from './Components/Pages/Homepage';

function App() {
    return (
            // @ts-ignore
            <Router>
                <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 py-6 flex flex-col justify-center items-center text-white">
                    <div className="container mx-auto px-3">
                        <Switch>
                            <Route path="/search/:id">
                                <Search/>
                            </Route>
                            <Route path="/">
                                <Homepage/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
    )
}

export default App;

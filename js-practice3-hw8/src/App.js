import React from 'react';
import "./App.css"
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom";
import Navigation from "./components/navigation";
import NotFoundPage from "./routing/modules/errors";
import UserUpDatePage from "./routing/modules/users/UserUpDatePage";
import UserDetailsPage from "./routing/modules/users/UserDetailsPage";
import ListUsersPage from "./routing/modules/users/ListUsersPage";
import AlbumsPage from "./routing/modules/alboms/AlbumsPage";
import AlbumsDetailsPage from "./routing/modules/alboms/AlbumsDetailsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route path='/users/update/:id' component={UserUpDatePage}/>
                <Route path='/users/:id' component={UserDetailsPage}/>
                <Route path='/users/' component={ListUsersPage}/>

                <Route path='/albums/:id' component={AlbumsDetailsPage}/>
                <Route path='/albums/' component={AlbumsPage}/>

                <Route exact={true} path='/not-found' component={NotFoundPage}/>
                <Redirect from='*' to='/not-found'/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;

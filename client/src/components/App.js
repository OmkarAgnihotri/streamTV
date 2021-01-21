import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';

const App = () => {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit" exact component={StreamEdit}></Route>
                <Route path="/streams/delete" exact component={StreamDelete}></Route>
            </BrowserRouter>
        </div>
    )
}

export default App;

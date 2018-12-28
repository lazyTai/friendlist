import React from 'react';
import Loading from "../component/Loading";
import Loadable from 'react-loadable';
import {routerRedux} from 'dva/router';
import {Route, Switch} from "react-router-dom";
import {setHistory} from "../util/uitls";
// import RequireAuth from "../component/authCompont";
/*const Home = Loadable({
    loader: () => import('../page/general/home/index.js'),
    loading: Loading
});*/
const Home = Loadable({
    loader: () => import('../page/home/index.js'),
    loading: Loading
});


const {ConnectedRouter} = routerRedux;


export default ({history, app}) => {

    return (<ConnectedRouter history={history}>

            <Switch>
                {
                    setHistory(history)
                }
                <Route exact path="/" component={Home}/>


            </Switch>
        </ConnectedRouter>
    );
}


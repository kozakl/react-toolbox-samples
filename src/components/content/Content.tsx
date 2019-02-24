import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';

export default function Content()
{
    return (
        <HashRouter>
            <>
                <select
                    style={{position: 'fixed', top: '0'}}
                    defaultValue={location.hash}
                    onChange={(event)=>
                        window.location.href = event.target.value}>
                    <option value="#/dashoffset">Dashoffset</option>
                    <option value="#/marker">Marker</option>
                    <option value="#/pattern-sample">Pattern</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/dashoffset' exact/>
                </Switch>
            </>
        </HashRouter>
    );
}

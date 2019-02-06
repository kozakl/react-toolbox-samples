import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {FlexSample} from '../../pages/flex-sample';
import {GrowSample} from '../../pages/grow-sample';
import {WrapSample} from '../../pages/wrap-sample';

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
                    <option value="#/flex">Flex</option>
                    <option value="#/grow">Grow</option>
                    <option value="#/wrap">Wrap</option>
                </select>
                <Switch>
                    <Redirect from="/" to='/flex' exact/>
                    <Route path="/flex" component={FlexSample}/>
                    <Route path="/grow" component={GrowSample}/>
                    <Route path="/wrap" component={WrapSample}/>
                </Switch>
            </>
        </HashRouter>
    );
}

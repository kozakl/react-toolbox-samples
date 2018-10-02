import * as React from 'react';
import * as style from './Content.css';
import Slider from '../slider';
/**
 * @author kozakluke@gmail.com
 */
export default class Content extends React.PureComponent<{}, State>
{
    constructor()
    {
        super(null);
        
        this.state = {
            value: 10
        }
    }
    
    onChange = (value:number)=>
    {
        this.setState({value});
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <Slider
                    pinned snaps editable
                    min={1} max={20} step={1}
                    value={this.state.value}
                    onChange={this.onChange}/>
            </div>
        );
    }
}

interface State {
    value:number;
}

import * as React from 'react';
import * as style from './SliderSample.pcss';
import Slider from '../../components/slider';
import Button from "react-toolbox/lib/button/Button";
/**
 * @author kozakluke@gmail.com
 */
export default class SliderSample extends React.PureComponent<{}, State>
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
                <Button>sdsds</Button>
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

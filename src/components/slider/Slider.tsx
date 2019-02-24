import * as React from 'react';
import SliderCore, {SliderProps} from 'react-toolbox/lib/slider';
/**
 * @author kozakluke@gmail.com
 */
export default class Slider extends React.Component<Props, State>
{
    private lastValue:number;
    
    constructor(props:Props)
    {
        super(props);
        this.lastValue = props.value;
        this.state     = null;
        
        this.state = {
            value: props.value
        };
    }
    
    componentWillReceiveProps(nextProps:Props)
    {
        if (this.props.value != nextProps.value)
            this.setState({value: nextProps.value});
    }
    
    onChange = (value:number)=>
    {
        this.setState({value});
    };
    
    onDragStop = ()=>
    {
        if (this.state.value != this.lastValue)
            this.props.onChange(this.state.value,
                                this.props.name);
        this.lastValue = this.state.value;
    };
    
    render()
    {
        return (
            <SliderCore
                {...this.props}
                value={this.state.value}
                onChange={this.onChange}
                onDragStop={this.onDragStop}/>
        );
    }
}

interface Props extends SliderProps {
    value:number;
    name?:string;
    onChange?:(value:number, name:string)=> void;
}

interface State {
    value:number;
}

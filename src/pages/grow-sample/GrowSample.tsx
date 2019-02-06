import * as React from 'react';
import * as style from './GrowSample.pcss';

export default function GrowSample()
{
    return (
        <div className={style.grow}>
            <div className={style.element1}>1</div>
            <div className={style.element2}>2</div>
            <div className={style.element3}>3</div>
            <div className={style.element4}>4</div>
        </div>
    );
}

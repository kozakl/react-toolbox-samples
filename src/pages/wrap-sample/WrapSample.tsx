import * as React from 'react';
import * as style from './WrapSample.pcss';

export default function WrapSample()
{
    return (
        <div className={style.wrap}>
            <div className={style.element1}>1</div>
            <div className={style.element2}>2</div>
            <div className={style.element3}>3</div>
            <div className={style.element4}>4</div>
        </div>
    );
}

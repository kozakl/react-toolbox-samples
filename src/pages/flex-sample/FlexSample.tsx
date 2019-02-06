import * as React from 'react';
import * as style from './FlexSample.pcss';

export default function FlexSample()
{
    return (
        <div className={style.flex}>
            <div className={style.element1}>1</div>
            <div className={style.element2}>2</div>
            <div className={style.element3}>3</div>
            <div className={style.element4}>4</div>
        </div>
    );
}

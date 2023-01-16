import React from 'react';
import "./sebha.css"
import { useState } from "react";

const Sebha = () => {
    var [count, setcount] = useState(0);

    return (
        <div>
            <h1 id='sebhaa'>السبحة</h1>
            <div className='sebha'>
                <div className='sebhaBody'>
                    <div className='screen'>
                        <p id='count'>{count}</p>
                    </div>
                    <div className='buttons'>
                        <button onClick={()=>{setcount(++count)}} id='z' ></button>
                        <div id='s'>
                        <button onClick={()=>{setcount(0)}} className='zero'></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sebha;

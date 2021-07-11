import React from 'react';
import {useSelector} from "react-redux";

const RoundResults = () => {
    const users = useSelector((state => state.gamePageReducer.users.sort((a,b)=>{
        if (a.lastResult > b.lastResult) {
            return -1;
        }
        if (a.lastResult < b.lastResult) {
            return 1;
        }
        return 0;
    })));
    return (
        <div className="result-round-container">
            {
                users.map((item, index)=> <div key={"result-round-item"+index} className="result-round-item">
                    <div className="result-round-item__name">{item.username}</div>
                    <div className={`result-round-item__points`} style={{color: `hsl(${(item.lastResult/550 * (120 - 0)) + 0}, 100%, 70%)`}}>+{item.lastResult}</div>
                </div>)
            }
        </div>
    );
};

export default RoundResults;
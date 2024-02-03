import React from 'react'
import './Checkoption.css'
import Searchyes from '../Searchyes/Searchyes';

function shoot(e) {
    const lable = document.querySelectorAll(".target")[e.target.id];
    const lable1 = document.querySelectorAll(".target");
    lable.style.color = "white";
    lable.style.backgroundColor = "black";
    for (var i = 0; i < lable1.length; i++) {
        if (e.target.id != i) {
            const item = document.getElementsByClassName("target")[i];
            item.style.color = "black";
            item.style.backgroundColor = "white";
        }
    }
}

function Checkoption() {
    return (
        <>
            <div id="checkoption-id">
                <div className='mergeshort-class'>
                    <div>
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
                        <label className="btn target" onClick={shoot} htmlFor="option1" id="0">Checked</label>
                        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                        <label className="btn target" onClick={shoot} htmlFor="option2" id="1" >Radio</label>
                        <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
                        <label className="btn target" onClick={shoot} htmlFor="option3" id="2" >Radio</label>
                        <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" />
                        <label className="btn target" onClick={shoot} htmlFor="option4" id="3" >Radio</label>
                        <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off" />
                        <label className="btn target" onClick={shoot} htmlFor="option5" id="4" >Radio</label>
                    </div>
                </div>
                <div>
                    <Searchyes />
                </div>
            </div>
        </>
    )
}

export default Checkoption

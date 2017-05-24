import React from 'react';
require('./Slider.less');

export default class Dots extends React.Component{
    render() {
        let {images, turn, pos} = this.props;
        return (
            <ul className="dots">
                {
                    images.map((image, index)=>(
                        <li className={"dot " + (index==pos||(pos==images.length&&index==0)?'active':'')} key={index} onClick={()=>turn(index-pos)}>{index+1}</li>
                    ))
                }
            </ul>
        )
    }
}
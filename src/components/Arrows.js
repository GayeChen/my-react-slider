import React from 'react'
require('./Slider.less');

export default class Arrows extends React.Component{
    render() {
        return (
            <div className="arrows">
                <span className="arrow arrow-left" onClick={()=>this.props.turn(-1)}>&lt;</span>
                <span className="arrow arrow-right" onClick={()=>this.props.turn(1)}>&gt;</span>
            </div>
        )
    }
}
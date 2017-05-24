import React from 'react';
import Arrows from "./Arrows";
import Dots from "./Dots";
import Sliders from "./Sliders";
import $ from 'jquery'
require('./Slider.less');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: 0
        }
    }
    turn = (n) => {
        let pos = this.state.pos;
        pos += n;
        if (pos >= this.props.images.length + 1) {
            this.$sliders.css("left", 0);
            pos = 1;
        }
        if (pos <= -1) {
            this.$sliders.css('left', this.props.images.length*-400);
            pos = this.props.images.length-1;
        }
        this.$sliders.stop().animate({
            left: pos * -400
        }, this.props.speed * 1000);
        this.setState({
            pos
        })
    };
    play = () => {
        this.$timer = setInterval(()=>{
            this.turn(1);
        }, this.props.interval*1000);
    };
    componentDidMount () {
        this.$sliders = $('.sliders');
        this.play();
    }
    render() {
        let {images} = this.props;
        let style = {
            width: 400 *( images.length + 1),
            // left: this.state.pos * -400
        };
        return (
            <div className="wrapper" onMouseOver={()=>clearInterval(this.$timer)} onMouseLeave={()=>this.play()}>
                <Sliders images={images} style={style}/>
                {this.props.dots ? <Dots turn={this.turn} images={images} pos={this.state.pos}/> : null}
                {this.props.arrows ? <Arrows turn={this.turn}/>: null}
            </div>
        )
    }
}


/*
let dots = null;
let arrows = null;
if (this.props.dots) {
    dots = <ul className="dots">
        {
            images.map((image, index)=>(

                <li className={"dot " + (index==this.state.pos?'active':'')} key={index} onClick={()=>this.state.turn(index-this.state.pos)}>{index+1}</li>
            ))
        }
    </ul>
}
if (this.props.arrows) {
    arrows = <div className="arrows">
        <span className="arrow arrow-left" onClick={()=>this.turn(-1)}>&lt;</span>
        <span className="arrow arrow-right" onClick={()=>this.turn(1)}>&gt;</span>
    </div>
}*/

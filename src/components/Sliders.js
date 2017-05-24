import React from 'react';
require('./Slider.less');

export default class Sliders extends React.Component {
    render() {
        let {images, style} = this.props;
        return (
            <ul className="sliders" style={style}>
                {
                    images.map((image, index) => (
                        <li className="slider" key={index}>
                            <img src={image.src} alt={image.alt}/>
                        </li>
                    ))
                }
                <li className="slider" key={images.length}>
                    <img src={images[0].src} alt={images[0].alt}/>
                </li>
            </ul>
        )
    }
}
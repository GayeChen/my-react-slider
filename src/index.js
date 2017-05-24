import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let images = [
    {src: require('./images/1.jpg'), alt: 'img1'},
    {src: require('./images/2.jpg'), alt: 'img2'},
    {src: require('./images/3.jpg'), alt: 'img3'},
    {src: require('./images/4.jpg'), alt: 'img4'},
];
ReactDOM.render(
    <App images={images}
            autoplay={true}
            interval={2}
            speed={1}
            dots={true}
            arrows={true}/>,
    document.querySelector('#root')
);
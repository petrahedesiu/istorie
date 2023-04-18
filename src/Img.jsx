import React from 'react';
import myImage from "./home_map.JPG";

class ImageScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollPosition = window.scrollY;
        const max = window.innerWidth;
        if (scrollPosition < max)
            this.setState({scrollPosition});
    }

    render() {
        const {scrollPosition} = this.state;
        var imageSize = 900 + scrollPosition; // Modify the image size based on the scroll position
        if (imageSize > window.innerWidth)
            imageSize = window.innerWidth;
        return (
            <div className="image-container">
                <img src={myImage} alt="My Image" className="my-image" style={{width: imageSize,
                    paddingLeft: Math.max(0, (window.innerWidth-imageSize)/2)}}/>
            </div>
        );
    }
}
export default ImageScroll;
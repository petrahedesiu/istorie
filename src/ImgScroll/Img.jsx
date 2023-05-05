import React from 'react';
import myImageMagellan from "../photos/worldmap.jpg";

class ImageScrollMagellan extends React.Component {
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
        var imageSize = 2 * window.innerWidth / 3 + scrollPosition / 1.5; // Modify the image size based on the scroll position
        if (imageSize > window.innerWidth)
            imageSize = window.innerWidth;
        return (
            <div className="image-container">
                <img src={myImageMagellan} alt="My Image" style={{width: imageSize}}/>
            </div>
        );
    }
}
export default ImageScrollMagellan;
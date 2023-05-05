import useSound from 'use-sound';
import React from "react";

export class PlaySound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            play: true
        };

        this.url = "https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg";
        this.audio = new Audio(this.url);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.audio.loop = true;
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
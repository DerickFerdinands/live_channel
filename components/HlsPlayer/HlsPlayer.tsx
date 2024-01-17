'use client'

import Hls from 'hls.js';
import {useEffect, useRef} from "react";


// @ts-ignore
const HLSPlayer = ({cdnUrl}) => {
    const videoRef = useRef(null);

    useEffect(() => {

        if (videoRef.current) {
            const hls = new Hls();
            hls.loadSource(cdnUrl);
            hls.attachMedia(videoRef.current);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                // @ts-ignore
                videoRef.current.play();
            });
        }
    }, []);

    return (
        <video className={"h-auto w-full max-h-full rounded-2xl"} ref={videoRef} controls/>

    );
};

export default HLSPlayer;

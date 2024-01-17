'use client'

import {CDNContext} from "@/contexts/cdn";
import {ChannelContext} from "@/contexts/Channels";
import {useState} from "react";

const Wrapper = ({children}) => {
    const [cdn, setCDN] = useState({}); // Initial CDN value
    const [channels, setChannels] = useState([]); // Initial CDN value
    return (
        <div>
            <ChannelContext.Provider value={{ channels, setChannels }}>
            <CDNContext.Provider value={{ cdn, setCDN }}>
            {children}
            </CDNContext.Provider>
            </ChannelContext.Provider>
        </div>
    );
};

export default Wrapper;

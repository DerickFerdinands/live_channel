'use client'

import HlsPlayer from "@/components/HlsPlayer/HlsPlayer";
import React, {useContext, useState} from 'react';
import {CDNContext} from "@/contexts/cdn";
import Image from "next/image";
import {Input} from "@/components/ui/input"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Separator} from "@/components/ui/separator"
import EmojiPicker, {Theme} from 'emoji-picker-react';
import {Button} from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {ChannelContext} from "@/contexts/Channels";
import Category from "@/components/CategoryCarousel/category";
import {ChevronLeftIcon} from "@radix-ui/react-icons";
import Link from "next/link";

const Page = () => {

    const {cdn, setCDN} = useContext(CDNContext);
    const {channels, setChannels} = useContext(ChannelContext);
    const [text, setText] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);

    const handleEmojiSelect = (emoji) => {
        setText((txt: string) => txt + emoji.emoji);
    };

    const tags = Array.from({length: 50}).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    )

    return (
        <>
            <div className={"h-screen max-h-screen "}>
                <div className={"flex justify-start"}>
                    <Link href={'/'}>
                    <Button className={"ms-10 mt-5"} variant="outline"> <ChevronLeftIcon className="h-4 w-4"/> Back To
                        Home </Button>
                    </Link>
                </div>
                <div style={{backgroundColor: '#0F0F0F'}} className={"flex relative gap-5 px-10 mt-5 h-4/5 w-full"}>
                    <div className={"w-3/4"}>
                        <HlsPlayer cdnUrl={cdn.cdn_url}/>
                    </div>


                    <div className={"w-1/4  h-full  border-2 rounded-2xl flex flex-col justify-start relative"}>
                        <div className={"border-b-2"}>
                            <h5 className="scroll-m-20 p-3 text-lg font-light tracking-tight">
                                Live Chat
                            </h5>
                        </div>
                        <ScrollArea className="h-full w-full rounded-md border">
                            <div className="p-4">
                                {tags.map((tag) => (
                                    <>
                                        <div key={tag} className="text-sm">
                                            {tag}
                                        </div>
                                        <Separator className="my-2"/>
                                    </>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className={"p-3 flex gap-3 justify-center items-center"}>
                            <Input onChange={(e) => {
                                setText(e.target.value)
                            }} value={text} type="text" placeholder="Chat..."/>
                            <h1 onClick={() => setShowEmoji((val) => !val)} className={"text-2xl cursor-pointer"}>😎</h1>
                            {/*     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                 enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="emoji">
                                <g>
                                    <g>
                                        <path fill="#F3B81A"
                                              d="M470.209,256c0,1.9-0.021,3.79-0.079,5.67c-1.421,55.103-23.54,106.69-62.66,145.803    c-40.45,40.46-94.25,62.74-151.47,62.74c-57.223,0-111.021-22.28-151.473-62.74C65.41,368.361,43.29,316.77,41.87,261.67    c-0.063-1.88-0.08-3.77-0.08-5.67c0-57.22,22.277-111.01,62.737-151.47C144.98,64.07,198.78,41.79,256,41.79    c57.22,0,111.02,22.28,151.47,62.74C447.93,144.99,470.209,198.78,470.209,256z"></path>
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path fill="#5E2B16"
                                                      d="M407.47,104.53C367.02,64.07,313.22,41.79,256,41.79c-57.223,0-111.021,22.28-151.473,62.74      C64.07,144.99,41.79,198.78,41.79,256c0,1.9,0.02,3.79,0.08,5.67c1.42,55.103,23.54,106.69,62.657,145.803      c40.45,40.46,94.25,62.74,151.473,62.74c57.22,0,111.02-22.28,151.47-62.74c39.12-39.109,61.239-90.7,62.66-145.803      c0.061-1.88,0.079-3.77,0.079-5.67C470.209,198.78,447.93,144.99,407.47,104.53z M256,460.213      c-94.603,0-174.38-64.662-197.473-152.11C54.13,291.47,51.79,274,51.79,256C51.79,143.4,143.4,51.79,256,51.79      c112.6,0,204.209,91.61,204.209,204.21c0,18-2.342,35.473-6.739,52.103C430.38,395.551,350.6,460.213,256,460.213z"></path>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path fill="#5E2B16"
                                                      d="M256,384.651c-40.753,0-78.529-19.065-98.586-49.755l8.371-5.474      c18.229,27.896,52.799,45.229,90.215,45.229s71.981-17.329,90.215-45.229l8.371,5.474      C334.529,365.586,296.754,384.651,256,384.651z"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g>
                                        <path fill="#5E2C17"
                                              d="M321.448,211.694c17.445,0,31.639,14.192,31.639,31.639h-10c0-11.932-9.707-21.639-21.639-21.639    c-11.931,0-21.638,9.707-21.638,21.639h-10C289.812,225.886,304.004,211.694,321.448,211.694z"></path>
                                    </g>
                                    <g>
                                        <path fill="#5E2C17"
                                              d="M190.551,211.694c17.444,0,31.639,14.192,31.639,31.639h-10c0-11.932-9.707-21.639-21.639-21.639    s-21.639,9.707-21.639,21.639h-10C158.912,225.886,173.105,211.694,190.551,211.694z"></path>
                                    </g>
                                </g>
                            </svg>*/}
                            <div style={{display: showEmoji ? 'block' : 'none'}}
                                 className={"absolute bottom-20 left-0"}>
                                <EmojiPicker onEmojiClick={handleEmojiSelect} theme={Theme.DARK}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full flex justify-start px-10 py-0 gap-3"}>
                    <div className={"bg-neutral-800 rounded-full p-2"}>
                        <Image
                            src={cdn.image_url}
                            alt={"Channel logo"}
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className={"flex flex-col justify-center"}>

                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            {cdn.name}
                        </h4>
                        <p className="leading-7 [&:not(:first-child)]:mt-0">
                            {cdn.category} | {cdn.sub_category}
                        </p>
                    </div>

                </div>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button style={{position: 'fixed', width: 'auto'}}
                                className={"fixed bottom-1 m-1 left-0 right-0 m-auto"} variant="outline">More
                            Channels</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full ">
                            <DrawerHeader className={"flex justify-center flex-col items-center"}>
                                <DrawerTitle>More Channels</DrawerTitle>
                                <DrawerDescription>Pick a channel</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0 flex flex-col items-center">
                                <div className=" w-3/4 scroll-m-0">
                                    {
                                        channels.map(((category, index) => <Category key={index} data={category}/>))
                                    }
                                </div>
                            </div>
                            <DrawerFooter>

                                <DrawerClose asChild>
                                    {/*<Button variant="outline">Cancel</Button>*/}
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

        </>

    );
};

export default Page;

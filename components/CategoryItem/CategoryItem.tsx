'use client'

import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import {Button} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import {useContext} from "react";
import {CDNContext} from "@/contexts/cdn";
import { useRouter } from 'next/navigation';

// @ts-ignore
const CategoryItem = ({channelData}) => {

    const router = useRouter();
    const { cdn, setCDN } = useContext(CDNContext);

    return (

        <div onClick={()=>{
            setCDN(channelData);


            router.push(`/live/${channelData.slug}`);
        }} className={"w-full h-64 flex flex-col justify-center items-center aspect-auto"}>
            {/*{cdn}*/}
            <div className={"h-2/3 w-full flex justify-center items-center relative"}>
                <Badge className={"absolute top-0 left-0"} variant="destructive">Live</Badge>
                <Image
                    src={channelData.image_url}
                    alt={"Channel logo"}
                    height={100}
                    width={100}
                />

            </div>
            <div className={"h-auto w-full"}>
                <Separator className="my-4" />
                <div className="flex gap-5 justify-around items-center flex-wrap lg:justify-start lg:gap-3">
                    <div className={"w-full"}>
                        <h1>{channelData.name}</h1>
                        <h5 className={"text-sm"}>{channelData.sub_category}</h5>
                    </div>
                    <div>
                        <Button  variant="outline">Watch Now</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryItem;

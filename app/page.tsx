'use client'

import React, {Provider, useContext} from 'react';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Category from "@/components/CategoryCarousel/category";
import {useEffect, useState} from "react";
import {CDNContext} from "@/contexts/cdn";
import {ChannelContext} from "@/contexts/Channels";


export default function Home() {

    const [data, setData] = useState([]);
    const { channels, setChannels } = useContext(ChannelContext);

    useEffect(() => {
        const fetchData = async () => {


            try {
                const response = await fetch('/api/test'); // Replace with your actual API route
                const fetchedData = await response.json();
                setChannels(fetchedData)
                setData(fetchedData);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  return (

    <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-24">
     <div className={"flex justify-between w-full"}>
       <Image
       src={"/logo.png"}
       alt={"logo"}
       width={100}
       height={50}
       />

         <Button variant="outline">Watch Now</Button>

     </div>
        {
            data.map(((category,index)=>  <Category key={index} data={category}/>))
        }

    </main>

  )
}

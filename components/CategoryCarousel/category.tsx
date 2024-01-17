import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import CategoryItem from "@/components/CategoryItem/CategoryItem";

// @ts-ignore
const Category = ({data}) => {
    return (
        <div className={"w-full flex flex-col gap-5"}>
            <h1 className={"ms-2"}>{data.categoryTitle}</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-full bor"
            >
                <CarouselContent >
                    {data.data.map((channel, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/12">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex  items-center justify-center p-6">
                                     <CategoryItem channelData={channel}/>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Category;

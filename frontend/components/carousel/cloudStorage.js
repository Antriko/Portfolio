"use client"
import { Carousel } from "flowbite-react";
import Image from 'next/image';

const CloudStorageCarousel = () => {
    return(
        <Carousel className="w-full" slide={0}>
            <Image src="/examples/cloudExample1.png" alt="..." width={400} height={400} />
            <Image src="/examples/cloudExample2.png" alt="..." width={400} height={400} />
        </Carousel>
    );
};
export default CloudStorageCarousel
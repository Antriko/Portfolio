"use client"
import { Carousel } from "flowbite-react";
import Image from 'next/image';

const MinecraftServerScannerCarousel = () => {
    return(
        <Carousel className="aspect-square w-full" slide={0}>
            <Image src="/examples/minecraftQueryExample1.png" alt="..." width={400} height={250} />
            <Image src="/examples/minecraftQueryExample2.png" alt="..." width={400} height={250} />
        </Carousel>
    );
};
export default MinecraftServerScannerCarousel
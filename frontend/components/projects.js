import Technologies from '@/components/technologies.js'
import CloudStorageCarousel from '@/components/carousel/cloudStorage.js'
import MinecraftServerScannerCarousel from '@/components/carousel/minecraftServerScanner.js'
import Link from 'next/link'

const Projects = () => {
    return(
        <div className="w-full bg-dark flex flex-col py-12" id="projects">
            {Technologies()}
            <div className="pt-12 flex flex-col-reverse md:flex-row justify-center mt-12 text-center md:text-left pb-12">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-4">
                    <div className="w-[85%] h-96 mb:mt-0">
                        <CloudStorageCarousel />
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 pl-0 md:pl-4">
                    <div className="w-full md:w-[85%] px-2 text-center md:text-start flex flex-col">
                        <div className="w-full text-3xl pb-2">
                            Cloud Storage
                        </div>
                        <div className="w-full text-base flex flex-col">
                            <div className="pb-1">
                                Final year project
                            </div>
                            <div className="pb-1">
                                Easily deployable into any server environment
                            </div>
                            <div className="pb-1">
                                Files are encrypted with AES-256 at rest and encrypted with HTTPS during transit
                            </div>
                            <div className="pb-1">
                               Dockerised MERN stack for scalability and efficiency
                            </div>
                            <div className="pb-1">
                                Easily configurable to users needs
                            </div>
                        </div>
                        <div className="pt-6 md:pt-4 mt-auto">
                            <Link href="https://cloud.antriko.co.uk" target="_blank" className="bg-light font-medium rounded-md text-black px-5 py-2.5 text-center">Demo</Link>
                        </div>
                        <div className="pt-6 md:pt-4 mt-auto">
                            <Link href="https://github.com/Antriko/cloud-storage" target="_blank" className="bg-light font-medium rounded-md text-black px-5 py-2.5 text-center">GitHub Link</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row-reverse justify-center text-center md:text-left">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-4">
                    <div className="w-[85%] h-96 mb:mt-0">
                        <MinecraftServerScannerCarousel />
                    </div>
                </div>
                <div className="w-full md:w-1/2 pr-0 md:pr-4 text-center md:text-end flex justify-end">
                    <div className="w-full md:w-[85%] px-2 text-center md:text-start flex flex-col">
                        <div className="text-3xl pb-2">
                            Minecraft Server Scanner
                        </div>
                        <div className="text-base flex flex-col">
                            <div className="pb-1">
                                Side project, scan through the internet for open port 25565 and query the server to collect data
                            </div>
                            <div className="pb-1">
                                Saves the data in a MongoDB database
                            </div>
                            <div className="pb-1">
                                Integrated the scanner into a discord bot for easy query of a server and accessibility to the database
                            </div>
                        </div>
                        <div className="pt-6 md:pt-4 mt-auto">
                            <Link href="https://github.com/Antriko/scanner" target="_blank" className="bg-light font-medium rounded-md text-black px-5 py-2.5 text-center">GitHub Link</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
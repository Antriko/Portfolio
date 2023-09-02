import Link from 'next/link'
const Nav = () => {
    return(
        <div className="w-full h-[5%] bg-black bg-opacity-50 overflow-hidden fixed top-0 left-0 flex justify-center items-center text-center z-50">
            <Link href="/#header" className="w-4/12 sm:w-2/12">
                Home
            </Link>
            <Link href="/#about" className="w-4/12 sm:w-2/12 border-x-2">
                About Me
            </Link>
            <Link href="/#projects" className="w-4/12 sm:w-2/12">
                Projects
            </Link>
        </div>
    );
};

export default Nav;
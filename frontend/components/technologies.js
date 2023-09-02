import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoMongodb, BiLogoPython, BiLogoDocker } from 'react-icons/bi'
import { DiMysql, DiLinux } from 'react-icons/di'

const Technologies = () => {
    var logoClass = "w-1/4 sm:w-24 mx-4 mb-4"
    var iconClass = "w-full h-full"
    return(
        <div className="w-full bg-dark flex flex-wrap justify-center text-center" id="technologies">
            <div className={logoClass}>
                <BiLogoHtml5 className={iconClass} />
                HTML
            </div>
            <div className={logoClass}>
                <BiLogoCss3 className={iconClass} />
                CSS
            </div>
            <div className={logoClass}>
                <BiLogoJavascript className={iconClass} />
                JavaScript
            </div>
            <div className={logoClass}>
                <BiLogoReact className={iconClass} />
                React
            </div>
            <div className={logoClass}>
                <BiLogoMongodb className={iconClass} />
                MongoDB
            </div>
            <div className={logoClass}>
                <BiLogoPython className={iconClass} />
                Python
            </div>
            <div className={logoClass}>
                <DiMysql className={iconClass} />
                MySQL
            </div>
            <div className={logoClass}>
                <BiLogoDocker className={iconClass} />
                Docker
            </div>
            <div className={logoClass}>
                <DiLinux className={iconClass} />
                Linux
            </div>

        </div>
    );
};

export default Technologies;
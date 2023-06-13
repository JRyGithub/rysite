import { FooterIcons } from "./resources/footerIcons";
import { useContext } from "react";

const Footer = () => {
    return (
        <footer className={`font-mono fixed bottom-0 left-0 w-full h-5vh bg-primary-900 text-primary-text flex flex-col items-center justify-center`}>
            <span className='mt-2' >Built with ❤️‍🔥 and these - </span>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
                {FooterIcons.map((img) => (
                    <a
                        key={img.href}
                        href={img.href}
                        className="flex h-8 justify-center p-1 pb-2 grayscale transition hover:grayscale-0 focus:grayscale-0"
                    >
                        <img alt={img.alt} src={img.src} className="object-contain" />
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;

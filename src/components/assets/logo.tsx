import type {ImgHTMLAttributes} from 'react';
import Image from "next/image";

type LogoProps = {
    width: number
    height: number
} & ImgHTMLAttributes<HTMLImageElement>;

const Logo = ({width, height, ...props}: LogoProps) => {
    return (
        <div>
            <Image
                src="/assets/svgs/logo.svg"
                alt="Logo"
                width={width}
                height={height}
                {...props}
            />
        </div>
    );
};

export default Logo;
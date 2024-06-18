import StyledComponentsRegistry from './utils/registry'
import './globals.css'
import {Metadata} from "next";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    )
}

export const metadata: Metadata = {
    icons: {
        icon: "assets/svgs/logoR.svg",
    },
};
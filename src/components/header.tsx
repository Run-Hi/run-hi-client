import Logo from "@/components/assets/logo"
import styled from "styled-components";
import font from "@/components/fonts/boldFont";
import Link from "next/link";
import Storage from "@/components/storage";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const Header = () => {
    const clearLocalStorage = () => {
        Storage.clear()
        window.location.href = "/"
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!!Storage.getItem("access_token")) {
            setIsLoggedIn(true)
        }
    }, [Storage])

    return <StyledHeader>
        <Logo
            width={130}
            height={40}
            onClick={() => window.location.href = "/"}
        />
        {isLoggedIn ?
            <StyledString onClick={clearLocalStorage}>로그아웃</StyledString> :
            <Link
                href={"https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=147422130144-3ujp0un0bemed62n2j9r03g2fad76num.apps.googleusercontent.com&response_type=token&redirect_uri=https://runhi.org/auth&scope=profile%20email&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow&ddm=0"}><StyledString>로그인 </StyledString></Link>
        }
    </StyledHeader>


}

export default Header;

const StyledHeader = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px 10px 30px;
    border-bottom: 1px solid lightgray;
`


const StyledString = styled.span`
    cursor: pointer;
    align-content: center;
    right: 30px;
    top: 20px;
    ${font.BOLD_H5};
    color: black;
`
import Logo from "@/components/assets/logo"
import styled from "styled-components";
import font from "@/components/fonts/boldFont";
import Link from "next/link";

const Header = () => {
    return <StyledHeader>
        <Logo
            width={130}
            height={40}
            onClick={() => window.location.href = "/"}
        />
        <StyledString>마이페이지</StyledString>
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
    align-content: center;
    right: 30px;
    top: 20px;
    ${font.BOLD_H5};
    color: white;
`
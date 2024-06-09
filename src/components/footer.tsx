import Header from "@/components/header";
import styled from "styled-components";
import inlineFont from "@/components/fonts/inlineFont";
import font from "@/components/fonts/inlineFont";

const Footer = () => {
    return <StyledFooter>
        <StyledString size="40">Copyright (c) runhi. All rights reserved.</StyledString>
    </StyledFooter>
}

export default Footer;

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: ghostwhite;
`


const StyledString = styled.span<{ size: string }>`
    
    color: ${props => props.color};
    ${font.INLINE_H4};
    font-size: ${props => props.size};
`
'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import List from "@/components/page/list";
import styled from "styled-components";

const Home = () => {
    return (
        <>
            <Header/>
            <Layout>
                <List/>
            </Layout>
            <Footer/>
        </>

    )
};

export default Home;

const Layout = styled.div`
    min-height: 100vh;
    height: 100%;
`
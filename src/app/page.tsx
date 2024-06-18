'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import styled from "styled-components";
import List from "@/page/list";

const Home = () => {
    return (
        <>
            <title>RUNHI</title>
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
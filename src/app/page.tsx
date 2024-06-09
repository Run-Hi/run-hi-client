'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/page/main";

const Home = () => {
    return <div style={{display: "flex", flexDirection: "column"}}>
        <Header />
        <Main />
        <Footer />
    </div>;
};

export default Home;
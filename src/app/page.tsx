'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import List from "@/components/page/list";

const Home = () => {
    return <div style={{display: "flex", flexDirection: "column"}}>
        <Header />
        <List />
        <Footer />
    </div>;
};

export default Home;
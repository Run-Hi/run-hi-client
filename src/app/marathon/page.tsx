'use client';

import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Marathon from "@/components/page/marathon";

const Page = () => {
    return (
        <div>
            <Header/>
            <Marathon/>
            <Footer/>
        </div>
    );
};

export default Page;
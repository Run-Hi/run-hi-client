'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Storage from "@/components/storage";
import Api from "@/components/api";

const AuthPage = () => {
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = params.get('access_token');

        const marathons = async () => await Api.post("/api/auth/login", {accessToken});
        marathons().then(
            e => {
                Storage.setItem("access_token", `Bearer ${e.data.accessToken}`);
                Storage.setItem("refresh_token", `Bearer ${e.data.refreshToken}`);

                window.location.replace("/")
            }
        ).catch(

        )
    }, []);

    return (
        <StyledAuthPageLayout>
            <StyledAuthPage>

            </StyledAuthPage>
        </StyledAuthPageLayout>
    );
};

export default AuthPage;

const StyledAuthPageLayout = styled.div`
    width: 100vw;
    height: 100vh;
`;

const StyledAuthPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
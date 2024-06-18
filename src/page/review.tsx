import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import pretendardFont from "@/components/fonts/pretendardFont";
import Api from "@/components/api";
import {number} from "prop-types";
import font from "@/components/fonts/pretendardFont";
import {usePathname} from "next/navigation";

type Review = {
    id: number,
    level: number,
    track: number,
    operate: number,
    water: number,
    souvenir: number,
    medal: number,
    title: string,
    pros: string,
    cons: string
}


const Review = () => {
    const pathname = usePathname().split("/")[2] as unknown as number

    const setup: Review = {
        id: pathname,
        level: 0,
        track: 0,
        operate: 0,
        water: 0,
        souvenir: 0,
        medal: 0,
        title: "",
        pros: "",
        cons: ""
    }

    useEffect(() => {
        const marathons = async () => await Api.get("/api/marathons/name/" + pathname);

        marathons().then(r => {
            setMarathonName(r.data)
        })
    }, []);

    const RuleInput = (e: any) => {
        if (e.target.value >= 0) {
            if (e.target.value > 100) {
                alert("최대 100까지 입력가능!");
                e.target.value = 100
            }
        } else {
            e.target.value = 0;
            alert("음수값을 입력할 수 없습니다.");
        }
    }

    const Submit = async () => {
        const marathons = async () => await Api.post("/api/reviews", review);
        marathons().then(
            e => window.location.replace("/")
        ).catch(

        )
    }

    const [marathonName, setMarathonName] = useState("로딩중...")
    const [review, setReview] = useState<Review>(setup)

    return (
        <ReviewLayout>
            <Title>리뷰하기 - {marathonName}</Title>
            <ScoreBar>
                <SemiTitle>점수를 매겨주세요!</SemiTitle>
                <BigNotice>* 0 ~ 100 사이의 수를 입력해주세요!</BigNotice>
                <Score>
                    <VerticalBar>
                        <OneScore>
                            <ScoreName>난이도: </ScoreName> <ScoreInput type={"number"} onInput={RuleInput}
                                                                     onChange={e => setReview({
                                                                         ...review,
                                                                         level: e.target.value as unknown as number
                                                                     })}/>
                            <SmallNotice>* 어려울수록 값을 크게 입력해주세요!</SmallNotice>
                        </OneScore>
                        <OneScore>
                            <ScoreName>주로: </ScoreName> <ScoreInput type={"number"} onInput={RuleInput}
                                                                    onChange={e => setReview({
                                                                        ...review,
                                                                        track: e.target.value as unknown as number
                                                                    })}/>
                        </OneScore>
                    </VerticalBar>
                    <VerticalBar>
                        <OneScore>
                            <ScoreName>운영: </ScoreName> <ScoreInput type={"number"} onInput={RuleInput}
                                                                    onChange={e => setReview({
                                                                        ...review,
                                                                        operate: e.target.value as unknown as number
                                                                    })}/>
                        </OneScore>
                        <OneScore>
                            <ScoreName>급수 포인트: </ScoreName> <ScoreInput type={"number"} onInput={RuleInput}
                                                                        onChange={e => setReview({
                                                                            ...review,
                                                                            water: e.target.value as unknown as number
                                                                        })}/>
                        </OneScore>
                    </VerticalBar>
                    <VerticalBar>
                        <OneScore>
                            <ScoreName>기념품 퀄리티: </ScoreName> <ScoreInput type={"number"} onInput={RuleInput}
                                                                         onChange={e => setReview({
                                                                             ...review,
                                                                             souvenir: e.target.value as unknown as number
                                                                         })}/>
                        </OneScore>
                        <OneScore>
                            <ScoreName>메달 퀄리티: </ScoreName> <ScoreInput type={"number"} onInput={RuleInput}
                                                                        onChange={e => setReview({
                                                                            ...review,
                                                                            medal: e.target.value as unknown as number
                                                                        })}/>
                        </OneScore>
                    </VerticalBar>
                </Score>
                <TitleBar>
                    <SemiTitle>한줄로 이 마라톤을 설명해주세요!</SemiTitle>
                    <TitleInput onChange={e => setReview({
                        ...review,
                        title: e.target.value
                    })}/>
                </TitleBar>
            </ScoreBar>
            <ProsAndConsBar>
                <SemiTitle>장단점에 대해서 자세히 설명해주세요!</SemiTitle>
                <ThirdTitle>장점</ThirdTitle>
                <ProsAndConsInput onChange={e => setReview({
                    ...review,
                    pros: e.target.value
                })}/>
                <ThirdTitle>단점</ThirdTitle>
                <ProsAndConsInput onChange={e => setReview({
                    ...review,
                    cons: e.target.value
                })}/>
            </ProsAndConsBar>
            <ReviewButton onClick={Submit}>제출하기!</ReviewButton>
        </ReviewLayout>

    );
};

const ReviewButton = styled.div`
    background-color: #FD51A7;
    color: #F0F0F0;
    ${font.PRETENDARD_H4};
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    margin-right: auto;
`

const ProsAndConsInput = styled.textarea`
    word-break: break-all;
    width: 90%;
    height: 150px;
    margin: 20px 5% 0;
    padding-left: 5px;
    border: none;
    background-color: #F0F0F0;
    ${font.PRETENDARD_H4};
`
const ThirdTitle = styled.span`
    ${font.PRETENDARD_H4};
    margin-left: 60px;
    margin-top: 20px;

`

const ProsAndConsBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;

`

const TitleBar = styled.div`
    margin: 10vh 0;
`

const ScoreInput = styled.input`
    width: 80px;
    height: 45px;
    ${pretendardFont.PRETENDARD_H3};
`
const ScoreName = styled.span`
    ${pretendardFont.PRETENDARD_H4}
`

const OneScore = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    position: relative;
`

const Score = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5vh 0;
    width: 100%;
    height: 20vh;
`

const VerticalBar = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TitleInput = styled.input`
    width: 90%;
    margin: 20px 5% 0;
    height: 100px;
    padding-left: 30px;
    border: none;
    background-color: #F0F0F0;
    ${font.PRETENDARD_H3};
`

const SmallNotice = styled.span`
    position: absolute;
    width: 30vw;
    bottom: -30px;
    ${pretendardFont.PRETENDARD_p2};
    font-weight: bold;
    color: #FB4FA5;
`

const BigNotice = styled.span`
    ${pretendardFont.PRETENDARD_H5};
    font-weight: bold;
    color: #FB4FA5;
`
const SemiTitle = styled.p`
    ${pretendardFont.PRETENDARD_H3};
    font-weight: bold;
    color: #999999
`
const ScoreBar = styled.div`
    width: 100%;

`

const Title = styled.p`
    ${pretendardFont.PRETENDARD_H1};
    font-weight: bold;
    margin: 20px 0;
`


const ReviewLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 40px;
    //background-color: pink;
`
export default Review;
import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import boldFont from "@/components/fonts/boldFont";
import font from "@/components/fonts/boldFont";
import Image from "next/image";
import pretendardFont from "@/components/fonts/pretendardFont";
import StarRate from "@/components/starRate";
import Api from "@/components/api";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";


type Review = {
    title: string,
    pros: string,
    cons: string,
    createdDateTime: Date,
    total: number
}

type Marathon = {
    name: string,
    location: string,
    imageUrl: string,
    isAccepting: boolean,
    conductDate: Date,
    totalReview: number,
    reviewCount: string,
    id: number,
    total: number,
    level: number,
    track: number,
    operate: number,
    waterStation: number,
    souvenir: number,
    medal: number,
    fee: number,
    applyUrl: string
}

const Marathon = () => {
    const router = useRouter()

    const setupReview: Review = {
        title: "로딩중...",
        pros: "pros",
        cons: "cons",
        createdDateTime: new Date(2006, 7, 4),
        total: 0
    }

    const setupMarathon: Marathon = {
        name: "로딩중...",
        location: "...",
        imageUrl: "",
        isAccepting: false,
        conductDate: new Date(2006, 7, 4),
        totalReview: 0,
        reviewCount: "0",
        id: 1,
        total: 0,
        level: 0,
        track: 0,
        operate: 0,
        waterStation: 0,
        souvenir: 0,
        medal: 0,
        fee: 0,
        applyUrl: "url"
    }

    const [reviews, setReviews] = useState([setupReview])
    const [marathon, setMarathons] = useState(setupMarathon)
    const pathname = usePathname().split("/")[2]

    useEffect(() => {
        const marathons = async () => await Api.get("/api/marathons/" + pathname)
        const reviews = async () => await Api.get("/api/reviews/" + pathname)

        marathons().then(r => {
            setMarathons(r.data)
        })

        reviews().then(r => {
            setReviews(r.data)
        })
    }, [])

    return (
        <MarathonLayout>
            <Info>
                <MarathonImage
                    backgroundImage={marathon.imageUrl}/>
                <Introduce>
                    <Title>{marathon.name}</Title>
                    <UnderLine/>
                    <IntroduceSentence>
                        <IntroduceContent><IntroduceContentGray>지역:</IntroduceContentGray><IntroduceContentBlack>
                            {marathon.location}</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>진행일:</IntroduceContentGray><IntroduceContentBlack>{`${new Date(marathon.conductDate).getFullYear()}년 ${new Date(marathon.conductDate).getMonth()}월 ${new Date(marathon.conductDate).getDay()}일`}</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>모집
                            기간:</IntroduceContentGray><IntroduceContentBlack>{`${new Date(marathon.conductDate).getFullYear()}년 ${new Date(marathon.conductDate).getMonth()}월 ${new Date(marathon.conductDate).getDay()}일`}</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>참가
                            비용:</IntroduceContentGray><IntroduceContentBlack>{marathon.fee}원</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>신청
                            주소:</IntroduceContentGray><Link style={{textDecorationLine: "none"}} href={marathon.applyUrl} target="_blank"><IntroduceContentButton>클릭하기!</IntroduceContentButton></Link>
                        </IntroduceContent>
                </IntroduceSentence>
                </Introduce>
            </Info>
            <TotalReviewBar>
                <TotalStarRate>
                    <TotalStarNumber>{(marathon.totalReview / 20).toFixed(1)}</TotalStarNumber>
                    <StarRate AvrRate={marathon.totalReview} height={30} width={29}/>
                    <ReviewCount>{marathon.reviewCount}개 리뷰</ReviewCount>
                </TotalStarRate>
                <DetailStarRate>
                    <VerticalRate>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>{(marathon.totalReview / 20).toFixed(1)}</DetailStarSpan>
                                <Image src={"/assets/svgs/level.svg"} alt={"star"} width={19} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>코스 난이도</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>{(marathon.track / 20).toFixed(1)}</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>주로</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>{(marathon.operate / 20).toFixed(1)}</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>운영</DetailStarSpan>
                        </DetailStar>
                    </VerticalRate>
                    <VerticalRate>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>{(marathon.waterStation / 20).toFixed(1)}</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>{(marathon.souvenir / 20).toFixed(1)}</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>기념품 퀄리티</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>{(marathon.medal / 20).toFixed(1)}</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>메달 퀄리티</DetailStarSpan>
                        </DetailStar>
                    </VerticalRate>
                </DetailStarRate>
            </TotalReviewBar>
            <SelectionBar>
                {/*<RoundFilter>*/}
                {/*    <FilterSpan>회차 선택하기</FilterSpan>*/}
                {/*    <Image src={"/assets/svgs/arrow.svg"} alt={"arrow"} width={20} height={20}/>*/}
                {/*</RoundFilter>*/}
                <AcceptingReview>
                    <ReviewMessage>이 마라톤에 참여한 경험이 있다면?</ReviewMessage>
                    <Link style={{textDecorationLine: "none"}} href={"/reviews/" + pathname}><ReviewButton>리뷰하기!</ReviewButton></ Link>
                </AcceptingReview>
            </SelectionBar>
            <DetailReview>
                {reviews.map(review => <ReviewCards key={review.title} {...review}/>)}
            </DetailReview>
        </MarathonLayout>
    );
};


const ReviewCards = (review: Review) => {
    return <ReviewCard>
        <ReviewStar>
            {(review.total / 20).toFixed(1)}
            <StarRate AvrRate={review.total} height={20} width={19}></StarRate>
        </ReviewStar>
        <ReviewText>
            <ReviewTitle>&quot;{review.title}&quot;</ReviewTitle>
            <ReviewInfo>{new Date(review.createdDateTime).getFullYear() + "." + new Date(review.createdDateTime).getMonth() + "." + new Date(review.createdDateTime).getDay() }</ReviewInfo>
            <BoldInfo>장점</BoldInfo>
            <ReviewContents>{review.pros}</ReviewContents>
            <BoldInfo>단점</BoldInfo>
            <ReviewContents>{review.cons}</ReviewContents>
        </ReviewText>
    </ReviewCard>
}

const BoldInfo = styled.span`
    ${boldFont.BOLD_p2};
    color: gray;
`

const ReviewContents = styled.span`
    ${pretendardFont.PRETENDARD_p2};
    font-weight: bold;

`

const ReviewInfo = styled.span`
    ${boldFont.BOLD_p3};
    color: #999999;

`
const ReviewTitle = styled.span`
    ${boldFont.BOLD_H4}

`
const ReviewText = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ReviewStar = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    ${font.BOLD_H3};
    padding-right: 3%;
`

const ReviewCard = styled.div`
    display: flex;
    padding: 5% 0;
    border-bottom: 1px solid #F0F0F0;
    justify-content: center;
`

const DetailReview = styled.div`
    width: 100%;
`

const StarRateDiv = styled.div`
    display: flex;
    align-items: center;
`
const DetailStarSpan = styled.span`
    ${boldFont.BOLD_p1};
`

const DetailStar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const VerticalRate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding-left: 10%;
`
const DetailStarRate = styled.div`
    display: flex;
    width: 60%;
    height: 80%;
    border-left: 1px solid #F0F0F0;
`
const ReviewCount = styled.span`
    ${pretendardFont.PRETENDARD_p2};
    color: #999999;
`
const TotalStarRate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    height: 100%;
    padding: 10px 0;
`

const TotalStarNumber = styled.span`
    ${boldFont.BOLD_H2}
`

const TotalReviewBar = styled.div`
    display: flex;
    height: 20vh;
    width: 90%;
    margin: 30px auto;
    padding: 0 6%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #F0F0F0;
`
const ReviewMessage = styled.span`
    color: #999999;
    ${pretendardFont.PRETENDARD_H5}
    margin-left: auto;
`

const AcceptingReview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 10px;
`

const ReviewButton = styled.div`
    background-color: #F0F0F0;
    color: #FD51A7;
    ${font.BOLD_H4};
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    margin-right: auto;
`
const RoundFilter = styled.div`
    display: flex;
    height: fit-content;
    width: fit-content;
    gap: 14px;
    padding: 6px 8px;
    align-items: center;
    color: #999999;
    border: 1px solid;
`

const FilterSpan = styled.span`
    align-content: center;
    ${font.BOLD_p2};
    color: #999999;
`

const SelectionBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    padding: 0 8vw;
    align-items: center;
`
const IntroduceSentence = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vh 0;
    gap: 18px;
`
const IntroduceContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
`

const IntroduceContentButton = styled.span`
    background-color: #F0F0F0;
    color: #FD51A7;
    ${font.BOLD_p2};
    width: fit-content;
    height: fit-content;
    padding: 5px;
    border-radius: 7px;
`

const IntroduceContentBlack = styled.span`
    ${font.BOLD_p1}
`

const IntroduceContentGray = styled.span`
    color: #999999;
    ${font.BOLD_p1}
`

const UnderLine = styled.div`
    width: 100%;
    border-bottom: 1px solid #999999;
`
const Title = styled.span`
    ${boldFont.BOLD_H1}
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 6%;
`

const Introduce = styled.div`
    width: 40vw;
`
const MarathonLayout = styled.div`
    padding: 3% 8%;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const MarathonImage = styled.div<{ backgroundImage: string }>`
    background-image: url(${props => props.backgroundImage});
    width: 30vw;
    height: 35vh;
    border-radius: 10px;
`

export default Marathon;
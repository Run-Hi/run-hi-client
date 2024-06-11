import React from 'react';
import styled from "styled-components";
import boldFont from "@/components/fonts/boldFont";
import font from "@/components/fonts/boldFont";
import Image from "next/image";
import pretendardFont from "@/components/fonts/pretendardFont";
import StarRate from "@/components/starRate";

const Marathon = () => {
    return (
        <MarathonLayout>
            <Info>
                <MarathonImage
                    backgroundImage="https://i.namu.wiki/i/KEnhvEdnXgS8mjGBDbkr38xCEOzhehdmPgOLRWVgCGYrxZIBT4ZFW4sWzSDX7kB_fCNKHxDy_ac8QZFVwDQoxg.webp"/>
                <Introduce>
                    <Title>젠이츠 마라톤</Title>
                    <UnderLine/>
                    <IntroduceSentence>
                        <IntroduceContent><IntroduceContentGray>지역:</IntroduceContentGray><IntroduceContentBlack>일본
                            오사카</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>진행일:</IntroduceContentGray><IntroduceContentBlack>2024년
                            10월 9일</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>모집 기간:</IntroduceContentGray><IntroduceContentBlack>2024년
                            10월 1일 ~ 8일</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>참가
                            비용:</IntroduceContentGray><IntroduceContentBlack>1,000엔</IntroduceContentBlack></IntroduceContent>
                        <IntroduceContent><IntroduceContentGray>신청 주소:</IntroduceContentGray><IntroduceContentButton>클릭하기!</IntroduceContentButton></IntroduceContent>
                    </IntroduceSentence>
                </Introduce>
            </Info>
            <SelectionBar>
                <RoundFilter>
                    <FilterSpan>회차 선택하기</FilterSpan>
                    <Image src={"/assets/svgs/arrow.svg"} alt={"arrow"} width={20} height={20}/>
                </RoundFilter>
                <AcceptingReview>
                    <ReviewMessage>이 마라톤에 참여한 경험이 있다면?</ReviewMessage>
                    <ReviewButton>리뷰하기!</ReviewButton>
                </AcceptingReview>
            </SelectionBar>
            <TotalReviewBar>
                <TotalStarRate>
                    <TotalStarNumber>3.9</TotalStarNumber>
                    <StarRate AvrRate={90} height={30} width={29}/>
                    <ReviewCount>1,293개 리뷰</ReviewCount>
                </TotalStarRate>
                <DetailStarRate>
                    <VerticalRate>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>4.1</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>4.1</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>4.1</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                    </VerticalRate>
                    <VerticalRate>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>4.1</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>4.1</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                        <DetailStar>
                            <StarRateDiv>
                                <DetailStarSpan>4.1</DetailStarSpan>
                                <Image src={"/assets/svgs/star.svg"} alt={"star"} width={20} height={19}/>
                            </StarRateDiv>
                            <DetailStarSpan>급수 포인트</DetailStarSpan>
                        </DetailStar>
                    </VerticalRate>
                </DetailStarRate>
            </TotalReviewBar>
            <DetailReview>
                <ReviewCard>
                    <ReviewStar>
                        1.0
                        <StarRate AvrRate={20} height={20} width={19}></StarRate>
                    </ReviewStar>
                    <ReviewText>
                        <ReviewTitle>"다른 회사 비판하지만 비판해도 될라나"</ReviewTitle>
                        <ReviewInfo>이창보 - 2024.06.01</ReviewInfo>
                        <BoldInfo>장점</BoldInfo>
                        <ReviewContents>대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.

                            모든 국민은 양심의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</ReviewContents>
                        <BoldInfo>단점</BoldInfo>
                        <ReviewContents>대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.

                            모든 국민은 양심의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</ReviewContents>
                    </ReviewText>
                </ReviewCard>
                <ReviewCard>
                    <ReviewStar>
                        1.0
                        <StarRate AvrRate={20} height={20} width={19}></StarRate>
                    </ReviewStar>
                    <ReviewText>
                        <ReviewTitle>"다른 회사 비판하지만 비판해도 될라나"</ReviewTitle>
                        <ReviewInfo>이창보 - 2024.06.01</ReviewInfo>
                        <BoldInfo>장점</BoldInfo>
                        <ReviewContents>대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.

                            모든 국민은 양심의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</ReviewContents>
                        <BoldInfo>단점</BoldInfo>
                        <ReviewContents>대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.

                            모든 국민은 양심의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</ReviewContents>
                    </ReviewText>
                </ReviewCard>
                <ReviewCard>
                    <ReviewStar>
                        1.0
                        <StarRate AvrRate={20} height={20} width={19}></StarRate>
                    </ReviewStar>
                    <ReviewText>
                        <ReviewTitle>"다른 회사 비판하지만 비판해도 될라나"</ReviewTitle>
                        <ReviewInfo>이창보 - 2024.06.01</ReviewInfo>
                        <BoldInfo>장점</BoldInfo>
                        <ReviewContents>대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.

                            모든 국민은 양심의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</ReviewContents>
                        <BoldInfo>단점</BoldInfo>
                        <ReviewContents>대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.

                            모든 국민은 양심의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.</ReviewContents>
                    </ReviewText>
                </ReviewCard>
            </DetailReview>
        </MarathonLayout>
    );
};

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
    margin: 0 auto;
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
    margin-left: auto;
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
    height: 14vh;
    padding: 0 8vw;
    align-items: center;
`
const IntroduceSentence = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vh 0;
    gap: 14px;
`
const IntroduceContent = styled.div`
`

const IntroduceContentButton = styled.span`
    background-color: #F0F0F0;
    color: #FD51A7;
    ${font.BOLD_H4};
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    margin-left: auto;
`

const IntroduceContentBlack = styled.span`
    ${font.BOLD_H4}
`

const IntroduceContentGray = styled.span`
    color: #999999;
    ${font.BOLD_H4}
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
import styled from "styled-components";
import Image from "next/image";
import font from "@/components/fonts/boldFont";
import pretendardFont from "@/components/fonts/pretendardFont";
import StarRate from "@/components/starRate";


const List = () => {
    return <StyledMainLayout>
        <StyledFilteringTitle>
            <StyledFilteringLogo>
                <Image src={"/assets/svgs/filter.svg"} alt={"filter"} width={40} height={40}/>
                <StyledFilterTitleSpan>필터링</StyledFilterTitleSpan>
            </StyledFilteringLogo>
            <StyledErrorButton>
                <Image src={"/assets/svgs/warning.svg"} alt={"warning"} width={20} height={20}/>
                <StyledWarningSpan>에러/개선사항 제보</StyledWarningSpan>
            </StyledErrorButton>
        </StyledFilteringTitle>
        <StyledFilteringBar>
            <StyledLocationButton>
                <Image src={"/assets/svgs/unChecked.svg"} alt={"unchecked"} width={18} height={18}/>
                <StyledAcceptingSpan>접수중</StyledAcceptingSpan>
            </StyledLocationButton>
            <StyledLocationFilter>
                <StyledFilterSpan>지역 선택하기</StyledFilterSpan>
                <Image src={"/assets/svgs/arrow.svg"} alt={"arrow"} width={20} height={20}/>
            </StyledLocationFilter>
            <StyledStarFilter>
                <Image src={"/assets/svgs/funnel.svg"} alt={"funnel"} width={18} height={18}/>
                <StyledFilterSpan>별점으로 필터링하기</StyledFilterSpan>
            </StyledStarFilter>
            <SearchingBar>
                <StyledInput type="text"/>
                <Image style={{position: "absolute", right: "12px", top: "14px"}} src={"/assets/svgs/search.svg"}
                       alt={"search"} width={20} height={20}/>
            </SearchingBar>
        </StyledFilteringBar>
        <CardContainer>
            <Card card={{
                imageUrl: "https://img4.yna.co.kr/etc/inner/KR/2019/04/17/AKR20190417165100063_01_i_P2.jpg",
                title: "",
                id: 1,
                isOpen: false,
                location: "a",
                star: 3.5,
                starCount: "500+"
            }}/>
            <Card card={{
                imageUrl: "https://img4.yna.co.kr/etc/inner/KR/2019/04/17/AKR20190417165100063_01_i_P2.jpg",
                title: "",
                id: 1,
                isOpen: false,
                location: "a",
                star: 3.5,
                starCount: "500+"
            }}/>
            <Card card={{
                imageUrl: "https://img4.yna.co.kr/etc/inner/KR/2019/04/17/AKR20190417165100063_01_i_P2.jpg",
                title: "",
                id: 1,
                isOpen: false,
                location: "a",
                star: 3.5,
                starCount: "500+"
            }}/>
            <Card card={{
                imageUrl: "https://img4.yna.co.kr/etc/inner/KR/2019/04/17/AKR20190417165100063_01_i_P2.jpg",
                title: "",
                id: 1,
                isOpen: false,
                location: "a",
                star: 3.5,
                starCount: "500+"
            }}/>
            <Card card={{
                imageUrl: "https://img4.yna.co.kr/etc/inner/KR/2019/04/17/AKR20190417165100063_01_i_P2.jpg",
                title: "",
                id: 1,
                isOpen: false,
                location: "a",
                star: 3.5,
                starCount: "500+"
            }}/>
            <Card card={{
                imageUrl: "https://img4.yna.co.kr/etc/inner/KR/2019/04/17/AKR20190417165100063_01_i_P2.jpg",
                title: "",
                id: 1,
                isOpen: false,
                location: "a",
                star: 3.5,
                starCount: "500+"
            }}/>

        </CardContainer>
    </StyledMainLayout>
}

type Card = {
    imageUrl: string,
    title: string,
    id: number,
    isOpen: boolean,
    location: string,
    star: number,
    starCount: string
}

type CardDto = {
    card: Card
}

const CardContainer = styled.div`
    width: 100%;
    justify-content: center;
    height: 70%;
    padding: 20px 100px;
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
`
const Card = (props: CardDto) => {
    return <StyledCard $imageUrl={props.card.imageUrl}>
        <CardBar>
            <CardBarTop>
                <CardBarTitle>기적의 마라톤</CardBarTitle>
                <CardBarSigning>접수중</CardBarSigning>
            </CardBarTop>
            <CardBarBottom>
                <CardPlace>경주</CardPlace>
                <StarContainer>
                    <StarRate AvrRate={67} height={19} width={20}/>
                    <StarValue>({props.card.starCount})</StarValue>
                </StarContainer>
            </CardBarBottom>

        </CardBar>

    </StyledCard>
}
const CardBarTitle = styled.span`
    ${font.BOLD_H4}
`

const CardBarSigning = styled.span`
    ${pretendardFont.PRETENDARD_p3}
    color: #FD51A7
`
const StarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`

const StarValue = styled.span`
    ${pretendardFont.PRETENDARD_p4};
    color: #959595;
    
`

const CardPlace = styled.span`
    ${pretendardFont.PRETENDARD_p3}
    color: #959595;
`

const CardBarTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardBarBottom = styled.div`
    display: flex;
    height: 20px;
    justify-content: space-between;
`

const CardBar = styled.div`
    background-color: white;
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`
const StyledCard = styled.div<{ $imageUrl: string }>`
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    width: 350px;
    height: 250px;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 2px 2px 0px rgba(95,95,95,0.5);
`
const StyledFilteringLogo = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    margin-left: 50px;
`
const StyledMainLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const StyledFilteringTitle = styled.div`
    height: 80px;
    width: 100%;
    justify-content: space-between;
    display: flex;
`

const StyledErrorButton = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
`

const SearchingBar = styled.div`
    margin-left: auto;
    position: relative;

`
const StyledInput = styled.input`
    height: 50px;
    width: 15vw;
    right: 10px;
    border-radius: 10px;
    border: 1px solid #999999;
    outline: none;
    padding-left: 5px;
    ${font.BOLD_H5}
`

const StyledLocationButton = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`
const StyledWarningSpan = styled.span`
    ${font.BOLD_p2}
    color: #FD51A7
`

const StyledAcceptingSpan = styled.span`
    align-items: center;
    padding-left: 5px;
    ${font.BOLD_p2}
    color: #999999
`

const StyledLocationFilter = styled.div`
    display: flex;
    height: fit-content;
    gap: 14px;
    padding: 6px 8px;
    align-items: center;
    color: #999999;
    border-bottom: 1px solid;
`

const StyledStarFilter = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    border: 1px solid;
    color: #999999;
    padding: 6px 10px;
`

const StyledFilteringBar = styled.div`
    width: 100%;
    height: 8%;
    padding: 0 5%;
    margin-bottom: 30px;

    gap: 46px;
    display: flex;
    align-items: center;
`

const StyledFilterSpan = styled.span`
    align-content: center;
    ${font.BOLD_p2};
    color: #999999;
`

const StyledFilterTitleSpan = styled.span`
    align-content: center;
    ${font.BOLD_H3};
`

const testData = [
    {
        "asdf": 100
    }
]


export default List
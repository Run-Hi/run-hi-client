import styled from "styled-components";
import Image from "next/image";
import font from "@/components/fonts/boldFont";
import pretendardFont from "@/components/fonts/pretendardFont";
import StarRate from "@/components/starRate";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import Api from "@/components/api";
import Link from "next/link";


const List = () => {
    const cardSetUp: MarathonCard[] = []
    const [location, setLocation] = useState('')
    const [accepting, setAccepting] = useState(false)
    const [filtering, setFiltering] = useState('')
    const [search, setSearch] = useState('')
    const [marathonList, setMarathonList] = useState(cardSetUp)

    const params = useSearchParams();


    useEffect(() => {
        const sendingParams = {accepting: accepting, location: location, filtering: filtering};
        const marathons = async () => await Api.get("/api/marathons", {params: sendingParams});

        marathons().then(r => {
            setMarathonList(r.data)
        })
    }, [location, accepting, filtering])

    const router = useRouter();

    const handleSearchChanged = () => {
        setAccepting(false)
        setLocation('전체')
        setFiltering("NONE")

        const marathons = async () => await Api.get("/api/marathons/search?name=" + search);

        marathons().then(r => {
            setMarathonList(r.data)
        })

    };

    return <StyledMainLayout>
        <StyledFilteringTitle>
            <StyledFilteringLogo>
                <Image src={"/assets/svgs/filter.svg"} alt={"filter"} width={40} height={40}/>
                <StyledFilterTitleSpan>필터링</StyledFilterTitleSpan>
            </StyledFilteringLogo>
            <StyledErrorButton>
                <Image src={"/assets/svgs/warning.svg"} alt={"warning"} width={20} height={20}/>
                <Link style={{textDecorationLine: "none"}} href="https://walla.my/v/DVDsODKEVVper4CZtBbp" target="_blank"><StyledWarningSpan>에러/개선사항 제보</StyledWarningSpan></Link>
            </StyledErrorButton>
        </StyledFilteringTitle>
        <StyledFilteringBar>
            <StyledLocationButton onClick={() => setAccepting(!accepting)}>
                {accepting ? <Image src={"/assets/svgs/checked.svg"} alt={"unchecked"} width={18} height={18}/> :
                    <Image src={"/assets/svgs/unChecked.svg"} alt={"unchecked"} width={18} height={18}/>}
                <StyledAcceptingSpan>접수중</StyledAcceptingSpan>
            </StyledLocationButton>
            <StyledLocationFilter value={location} onChange={e => {
                setLocation(e.target.value)
            }}>
                <option>전체</option>
                <option>서울</option>
                <option>부산</option>
                <option>대구</option>
                <option>인천</option>
                <option>대전</option>
                <option>광주</option>
                <option>울산</option>
                <option>강원</option>
                <option>경기</option>
                <option>경남</option>
                <option>경북</option>
                <option>전남</option>
                <option>전북</option>
                <option>제주</option>
                <option>충남</option>
                <option>충북</option>
            </StyledLocationFilter>
            <StyledStarFilter value={filtering} onChange={e => setFiltering(e.target.value)}>
                <option value="NONE">필터링 옵션</option>
                <option value="STAR_HIGH">별점 높은 순</option>
                <option value="STAR_LOW">별점 낮은 순</option>
                <option value="HARD">난이도 높은 순</option>
                <option value="EASY">난이도 낮은 순</option>
            </StyledStarFilter>
            <SearchingBar>
                <StyledInput type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearchChanged();
                    }
                }}/>
                <Image style={{position: "absolute", right: "12px", top: "14px"}} src={"/assets/svgs/search.svg"}
                       alt={"search"} width={20} height={20} onClick={handleSearchChanged}/>
            </SearchingBar>
        </StyledFilteringBar>
        <CardContainer>
            {marathonList.map(marathon =>
                <Card key={marathon.id} card={marathon}/>
            )}

        </CardContainer>
    </StyledMainLayout>
}

type MarathonCard = {
    name: string,
    location: string,
    imageUrl: string,
    isAccepting: boolean,
    totalReview: number,
    reviewCount: string
    id: number,
}

type CardDto = {
    card: MarathonCard
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
                <CardBarTitle>{props.card.name}</CardBarTitle>
                <CardBarSigning
                    accepting={props.card.isAccepting}>{props.card.isAccepting ? "접수중" : "마감"}</CardBarSigning>
            </CardBarTop>
            <CardBarBottom>
                <CardPlace>{props.card.location}</CardPlace>
                <StarContainer>
                    <StarRate AvrRate={props.card.totalReview} height={19} width={20}/>
                    <StarValue>({props.card.reviewCount})</StarValue>
                </StarContainer>
            </CardBarBottom>

        </CardBar>

    </StyledCard>
}
const CardBarTitle = styled.span`
    ${font.BOLD_H4}
`

const CardBarSigning = styled.span<{ accepting: boolean }>`
    ${pretendardFont.PRETENDARD_p3};
    color: ${props => props.accepting ? "#FD51A7" : "#999999"}
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
    box-shadow: 0 2px 2px 0 rgba(95, 95, 95, 0.5);
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

const StyledLocationFilter = styled.select`
    height: 40px;
    width: 120px;
    border: none;
    gap: 14px;
    color: #999999;
    border-bottom: 1px solid;
    ${font.BOLD_p3};
    padding: 0 8px;
`

const StyledStarFilter = styled.select`
    height: 40px;
    width: 150px;
    gap: 14px;
    padding-left: 35px;
    color: #999999;
    border: 1px solid;
    ${font.BOLD_p3};

    appearance: none;
    background-image: url("/assets/svgs/funnel.svg");
    background-repeat: no-repeat;
    background-size: 26px 26px;
    background-position: 6px;

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

const StyledFilterTitleSpan = styled.span`
    align-content: center;
    ${font.BOLD_H3};
`

export default List
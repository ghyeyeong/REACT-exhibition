//Exhibition.jsx
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExhibitionCard from '../components/ExhibitionCard';

function Exhibition({ savedExhibitions, setSavedExhibitions
}) {
    //전시 data
    const exhibitions = [
        {
            id: 1,
            title: "빛이 머무는 시간",
            category: "MEDIA ART",
            place: "스페이스 한강",
            date: "2026.09.01 - 2026.11.30",
            desc: "빛과 색의 변화를 통해 시간의 흐름을 표현한 미디어아트 전시입니다.",
            price: 18000
        },
        {
            id: 2,
            title: "도시의 온도",
            category: "PHOTOGRAPHY",
            place: "성수 포토갤러리",
            date: "2026.08.20 - 2026.10.25",
            desc: "서울의 골목과 사람들의 일상을 기록한 도시 사진전입니다.",
            price: 15000
        },
        {
            id: 3,
            title: "조용한 숲",
            category: "ILLUSTRATION",
            place: "서촌 아트라운지",
            date: "2026.09.10 - 2026.12.14",
            desc: "자연과 쉼을 주제로 한 일러스트 작품을 소개하는 전시입니다.",
            price: 12000
        },
        {
            id: 4,
            title: "파동의 공간",
            category: "MEDIA ART",
            place: "서울 아트랩",
            date: "2026.09.15 - 2027.01.10",
            desc: "소리와 움직임을 시각적으로 표현한 인터랙티브 전시입니다.",
            price: 20000
        }
    ]

    return (
        <main>
            <h2>현재전시</h2>
            <p>관심 있는 분야의 전시를 찾아보세요.</p>

            <Tabs>
                <TabList>
                    <Tab>전체</Tab>
                    <Tab>미디어아트</Tab>
                    <Tab>사진</Tab>
                    <Tab>일러스트</Tab>
                </TabList>

                {/* 전체 */}
                <TabPanel>
                    <div className="exhibition-list">
                        {
                            exhibitions.map((item) => (
                                <ExhibitionCard
                                    key={item.id}
                                    exhibition={item}
                                    savedExhibitions={savedExhibitions}
                                    setSavedExhibitions={setSavedExhibitions}
                                />
                            ))
                        }
                    </div>
                </TabPanel>

                {/* 미디어아트 */}
                <TabPanel>
                    <div className="exhibition-list">
                        {
                            exhibitions
                                .filter((item) => item.category === "MEDIA ART")
                                .map((item) => (
                                    <ExhibitionCard
                                        key={item.id}
                                        exhibition={item}
                                        savedExhibitions={savedExhibitions}
                                        setSavedExhibitions={setSavedExhibitions}
                                    />
                                ))
                        }
                    </div>
                </TabPanel>

                {/* 사진 */}
                <TabPanel>
                    <div className="exhibition-list">
                        {
                            exhibitions
                                .filter((item) => item.category === "PHOTOGRAPHY")
                                .map((item) => (
                                    <ExhibitionCard
                                        key={item.id}
                                        exhibition={item}
                                        savedExhibitions={savedExhibitions}
                                        setSavedExhibitions={setSavedExhibitions}
                                    />
                                ))
                        }
                    </div>
                </TabPanel>

                {/* 일러스트 */}
                <TabPanel>
                    <div className="exhibition-list">
                        {
                            exhibitions
                                .filter((item) => item.category === "ILLUSTRATION")
                                .map((item) => (
                                    <ExhibitionCard
                                        key={item.id}
                                        exhibition={item}
                                        savedExhibitions={savedExhibitions}
                                        setSavedExhibitions={setSavedExhibitions}
                                    />
                                ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </main>

    )


}



export default Exhibition
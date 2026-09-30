import React from 'react'

function Mypage({
    savedExhibitions,
    setSavedExhibitions
}) {


    // 관심 전시 삭제
    const deleteExhibition = (id) => {
        const newList = savedExhibitions.filter(
            (item) => item.id !== id
        )
        setSavedExhibitions(newList)
    }

    return (
        <main>
            <h2>MY PAGE</h2>
            <p>
                관심 있는 전시를 확인해보세요.
            </p>
            {/* 관심 전시가 없는 경우 */}
            {
                savedExhibitions.length === 0 ? (
                    <div className="empty-box">
                        <h3>관심 전시가 없습니다.</h3>
                        <p>
                            관심 있는 전시를 등록해보세요.
                        </p>
                    </div>

                ) : (

                    /* 관심 전시가 있는 경우 */
                    <div className="my-list">
                        {
                            savedExhibitions.map((item) => (
                                <div
                                    className="my-card"
                                    key={item.id}
                                >
                                    <span className="category">
                                        {item.category}
                                    </span>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>
                                        {item.place}
                                    </p>
                                    <p>
                                        {item.date}
                                    </p>
                                    <strong>
                                        {item.price.toLocaleString()}원
                                    </strong>
                                    <button
                                        onClick={() =>
                                            deleteExhibition(item.id)
                                        }
                                    >
                                        삭제
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </main>
    )
}

export default Mypage
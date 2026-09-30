import React from 'react'

function ExhibitionCard({ exhibition, savedExhibitions, setSavedExhibitions }) {

    //현재 전시가 관심 전시에 등록되어있는지 확인
    //some() -> 배열안에서 내가 찾는 값이 하나라도 있는지 확인하는 배열메소드 -> true/false
    const saved = savedExhibitions.some(
        (item) => item.id === exhibition.id
    )

    //관심전시 등록
    const btnSave = () => {

        //이미 등록되어있다면 삭제
        if (saved) {
            const newList = savedExhibitions.filter(
                (item) => item.id !== exhibition.id
            )
            setSavedExhibitions(newList)
        } else {
            setSavedExhibitions([
                ...savedExhibitions,
                exhibition
            ])
        }

    }

    return (
        <div className='exhibition-card'>
            <p className='category'>{exhibition.category}</p>
            <h3>{exhibition.title}</h3>
            <p className='place'>{exhibition.place}</p>
            <p className='date'>{exhibition.date}</p>
            <p className="desc">{exhibition.desc}</p>
            <p className='price'>{exhibition.price.toLocaleString()}원</p>

            <button onClick={btnSave}>
                {
                    saved ? "관심전시해제" : "관심전시등록"
                }
            </button>
        </div>
    )
}

export default ExhibitionCard
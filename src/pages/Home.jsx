import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className='home'>
            <section className="hero">
                <div className="hero-content">
                    <span className='hero-category'>
                        EXHIBITION CURATION
                    </span>
                    <h2>오늘 어떤 전시를 <br />만나고 싶은가요?</h2>
                    <p>사진, 미디어아트, 일러스트까지 <br />지금 주목할 만한 전시를 만나보세요.</p>
                    <Link to='/exhibition' className='hero-btn'>현재 전시보기</Link>
                </div>
            </section>

        </main>
    )
}

export default Home
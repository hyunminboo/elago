import React from 'react'
import './styles/FixedTopBtn.scss'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
const FixedTopBtn = () => {
    const scrollTo = useSmoothScroll()
    return (
        <div className='FixedTopBtn'>
            <button
            className='top-btn'
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo('hero')
                }}
            >올라가기</button>

            <a href="#" className='logo-btn' >
                ELG
            </a>
        </div>
    )
}

export default FixedTopBtn
import React, { useState } from 'react'
import styles from './index.module.less'
import { useEffect } from 'react'
let timer=null;
export default function Pull({ children,onLoad ,finished,setFinished}) {//插槽
    const [startY, setStartY] = useState(0)
    const [moveY, setMoveY] = useState(0)
    const [distance, setDistance] = useState(0)
    const [translateY, setTranslateY] = useState(0)
    const [curState,setCurState]=useState('下拉刷新')
    
    const max=250
    const middle=100;
    
    const onTouchStart = (e) => {
        const startY = e.touches[0].clientY
        setStartY(startY)
        //console.log(e.touches[0].clientY)
    }
    const onTouchMove = (e) => {

        const moveY = e.touches[0].clientY
        if (moveY < startY) {
            return
        }
        setMoveY(moveY)
        setDistance(moveY - startY)
        //console.log(e.touches[0].clientY)
        if(distance>middle){
            setCurState('释放刷新')
        }
        if(distance>max){
            return 
        }
        setTranslateY(distance**0.8)
        
    }
    const onTouchEnd=()=>{
        if(distance>100){
            timer= setInterval(()=>{
            setTranslateY((pre)=>pre-5)
        },20)
        setCurState('加载中...')
        onLoad()
        }
        setDistance(0)
       
    }
    useEffect(()=>{

        if(translateY<=40){
            clearInterval(timer)
        }
    },[translateY])

    useEffect(()=>{
        if(finished){
            setTranslateY(0)
            setFinished(false)
        }
    },[finished])
    return (
        <div className={styles['pull-wrapper']}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{
                transform: `translateY(${translateY}px)`
            }}
        >
            <div className={styles['pull-header']}>
                <p className={styles['pull-header-title'] } >
                    {curState}
                </p>
            </div>
            {children}
        </div>
    )
}

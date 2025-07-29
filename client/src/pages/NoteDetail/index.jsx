import React from 'react'
import styles from './index.module.less'
import { ArrowLeft } from '@react-vant/icons';
import { useEffect,useState} from 'react'
import axios from '@/api'
import { useSearchParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
export default function NoteDetail() {
    // get /findNoteDetailById
    const [searchParams]= useSearchParams()
    const id = searchParams.get('id')
    const [noteDetail,setNoteDetail]=useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/findNoteDetailById?id=${id}`).then(
            res => {
                setNoteDetail(res.data)
                //console.log(res.data)
            }
        )
    }, [])
    return (
        <div className={styles['note-detail']}>
            <div className={styles['back']} onClick={()=>navigate(-1)}>
                <ArrowLeft fontSize={24} />
            </div>

            <div className={styles['note-img']}>
                <img src={noteDetail.note_img} alt="" />
            </div>
            <div className={styles['note-content']}>
                <div className={styles['tab']}>
                    <span className={styles['note_type']}>{noteDetail.note_type}</span>
                    <span className={styles['author']}>{noteDetail.nickname}</span>
                </div>
                <p className={styles['title']}>{noteDetail.note_title}</p>
                <div className={styles['content']} dangerouslySetInnerHTML={{ __html: noteDetail.note_content }} />
            </div>
        </div>
    )
}
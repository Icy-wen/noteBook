import {BrowserRouter ,Routes,Route,Navigate,useRoutes} from 'react-router'
import React from 'react'
const Login=React.lazy(()=>import('../pages/Login'))
const NoteClass=React.lazy(()=>import('../pages/NoteClass'))
const Register=React.lazy(()=>import('../pages/Register'))
const NoteList=React.lazy(()=>import('../pages/NoteList'))
const NoteDetail=React.lazy(()=>import('../pages/NoteDetail'))
const NotePublish=React.lazy(()=>import('../pages/NotePublish'))

const routes=[
    {
        path:'/',
        element:<Navigate to='/noteClass'/>
    },
    {
        path:'/login',
        element:<Login/>
    },{
        path:'/noteClass',
        element:<NoteClass/>
    },{
        path:'/register',
        element:<Register/>
    },{
        path:'/noteList',
        element:<NoteList/>
    },{
        path:'/noteDetail',
        element:<NoteDetail/>
    },{
        path:'/notePublish',
        element:<NotePublish/>
    }
]

function WrapperRoutes(){
    //useRoutes 不能被抛出
    let ele=useRoutes(routes)
    return ele
    
}
export default function WrapperRouter(){
    return (
        <BrowserRouter>
            <WrapperRoutes/>
        </BrowserRouter>
    )
}

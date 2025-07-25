import {BrowserRouter ,Routes,Route,Navigate,useRoutes} from 'react-router'
import React from 'react'
const Login=React.lazy(()=>import('../pages/Login'))
const NoteClass=React.lazy(()=>import('../pages/NoteClass'))
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

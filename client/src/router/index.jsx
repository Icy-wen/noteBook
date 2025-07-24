import {BrowserRouter ,Routes,Route,Navigate,useRoutes} from 'react-router'
import React from 'react'
const Login=React.lazy(()=>import('../pages/Login'))
const routes=[
    {
        path:'/',
        element:<Navigate to='/noteClass'/>
    },
    {
        path:'/login',
        element:<Login/>
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import App from './App.jsx'
import 'lib-flexible/flexible.js'
// 导入Toaster组件
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* 添加Toaster组件 */}
    <Toaster />
  </StrictMode>,
)

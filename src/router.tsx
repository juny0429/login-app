import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import Login from './pages/login/Login'

interface RouterElement {
    id: number // 페이지 아이디 (반복문용 고유값)
    path: string // 페이지 경로
    label: string // 사이드바에 표시할 페이지 이름
    element: React.ReactNode // 페이지 엘리먼트
    withAuth?: boolean // 인증이 필요한 페이지 여부
  }

  const routerData: RouterElement[] = [
    {
      id: 0,
      path: '/login',
      label: 'Login',
      element: <Login />,
      withAuth: false,
    }
  ]
  
 export const routers:RemixRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);   
  
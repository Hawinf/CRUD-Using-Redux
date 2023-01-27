import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { handleCheckToken } from "../redux/actions/loginAction"

export const ProtectedRoute = () => {
  const state = useSelector((rootReducers) => rootReducers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleCheckToken())
  },[state.loginReducer.isLogin])

  if(state.loginReducer.loading) {
    return('loading....')
  }

  return state.loginReducer.isLogin ? <Outlet /> : <Navigate to='/login' />
}


  


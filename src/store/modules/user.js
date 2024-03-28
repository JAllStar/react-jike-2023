import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'
import { setToken as _setToken, getToken} from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload

      _setToken(action.payload)
    }
  } 
})

const { setToken } = userStore.actions

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)  // loginForm: body -- {mobile: xx, code: xx}
    dispatch(setToken(res.data.token))
  }
}




export { fetchLogin, setToken }

export default userStore.reducer

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'




export const signingUp = createAsyncThunk('user/signingUp', async (newUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:5000/api/users/Register',newUser)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }
})

export const signingIn = createAsyncThunk('user/signingIn', async (user,{rejectWithValue,dispatch})=>{
    try {
          //dispatch(clearErrors())
        const {data} = await axios.post('http://localhost:5000/api/users/Login',user)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }

})

export const AllDoctors= createAsyncThunk('user/AllDoctors', async (_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('http://localhost:5000/api/users/')
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }

})


export const getdoctorinfobyid= createAsyncThunk('user/getdoctorinfobyid', async (idDoctor,{rejectWithValue})=>{
    try {
        const {data} = await axios.get(`http://localhost:5000/api/users/Doctorprofile/${idDoctor}`)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }

})
export const updatedoctorprofile= createAsyncThunk('user/updatedoctorprofile', async (updatedUser,{rejectWithValue})=>{
    try {
        const {data} = await axios.put(`http://localhost:5000/api/users/${updatedUser._id}`,updatedUser)

        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message)
    }

})

















 const UserSlice = createSlice({
    name:'user',
    initialState:{
        isLoading: false,
        isAuth: Boolean(localStorage.getItem('isAuth')),
        user : JSON.parse(localStorage.getItem('user')),
        token : localStorage.getItem('token'),
        RegisterErrors: null,
        LoginErrors : null,
        msg:null,
        users:[],
        doctorUser:{},
        
    },

    reducers:{
        logOut : (state)=>{
            state.user = {}
            state.isAuth = false
            state.token = null
            localStorage.clear()
        },
        clearErrors : (state)=>{
          state.LoginErrors= null
          state.RegisterErrors = null
        },
 

        
    },
    extraReducers:{
        [signingUp.pending]: (state)=>{
            state.isLoading = true
        },
        [signingUp.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.msg = payload.msg
        },
        [signingUp.rejected] : (state,{type,payload})=>{
            state.RegisterErrors = payload
        },
        [signingIn.pending]: (state)=>{
            state.isLoading = true
        },


        [signingIn.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.user = payload.isfound
            state.token= payload.token
            state.isAuth = true
            localStorage.setItem('token', payload.token )
            localStorage.setItem('user', JSON.stringify(payload.isfound) )
            localStorage.setItem('isAuth', true)
        },
        [signingIn.rejected] : (state,{type,payload})=>{
            state.LoginErrors = payload
        },
        [AllDoctors.pending]: (state)=>{
            state.isLoading = true
            
        },


        [AllDoctors.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.users= payload


            

        },
        [AllDoctors.rejected] : (state,{type,payload})=>{
            state.LoginErrors = payload
        },


        [getdoctorinfobyid.pending]: (state)=>{
            state.isLoading = true
            
        },


        [getdoctorinfobyid.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.doctorUser= payload.data

            
        },
        [getdoctorinfobyid.rejected] : (state,{type,payload})=>{
            state.LoginErrors = payload
        },
        [updatedoctorprofile.pending]: (state)=>{
            state.isLoading = true
        },
        [updatedoctorprofile.fulfilled]: (state,action)=>{
            state.isLoading = false

            state.user = state.users.map(user=> (user._id == action.payload._id)? {...user,...action.payload} : user )

        },
        [updatedoctorprofile.rejected]: (state,action)=>{
            state.Errors = action.payload
        },

















    }








}) 

export default UserSlice.reducer
export const  {logOut,clearErrors} = UserSlice.actions
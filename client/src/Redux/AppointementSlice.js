import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const config={headers : {token:localStorage.getItem('token')}}


export const AddAppointement= createAsyncThunk('appointement/AddAppointement', async (newAppointement,{rejectWithValue})=>{
    try {
          //dispatch(clearErrors())
        const {data} = await axios.post('http://localhost:5000/api/appointements/',newAppointement,config)
        
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message )
    }

})


export const Allmyappointement= createAsyncThunk('appointement/Allmyappointement', async (_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('http://localhost:5000/api/appointements/allmyappointements',config)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message? error.response.data.message : error.response.data.errors )
    }

})





export const getmyappbypatient= createAsyncThunk('appointement/getmyappbypatient', async (_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('http://localhost:5000/api/appointements/allmyappointementsbyPtient',config)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message )
    }

})



export const getmyappbyDoctor= createAsyncThunk('appointement/getmyappbyDoctor', async (_,{rejectWithValue})=>{
    try {
        const {data} = await axios.get('http://localhost:5000/api/appointements/allmyappointementsbyDoctor',config)
        return data
    } catch (error) {
       return rejectWithValue(error.response.data.message )
    }

})

export const UpdatingApp = createAsyncThunk('appointement/UpdatingApp', async(updatedapp,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.put(`http://localhost:5000/api/appointements/${updatedapp._id}`,updatedapp,config)
        dispatch(getmyappbyDoctor())
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})
export const DeletingApp = createAsyncThunk('appointement/DeletingAPP', async(id,{rejectWithValue,dispatch})=>{
    try {
        const {data} = await axios.delete(`http://localhost:5000/api/appointements/${id}`,config)
        dispatch(getmyappbyDoctor())
        dispatch(getmyappbypatient())
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})



const AppointementSlice = createSlice({
    name:'appointement',
    initialState:{
        isLoading: false,
        Errors : null,
        msg:null,
        appointements:[],
        appointement:{},
        appPatient:[],
        appDoctor:[]
    },

    reducers:{},
    extraReducers:{
        [AddAppointement.pending]: (state)=>{
            state.isLoading = true
        },
        [AddAppointement.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.appointement = payload
        },
        [AddAppointement.rejected] : (state,{type,payload})=>{
            state.Errors = payload
        },    
        
        [Allmyappointement.pending]: (state)=>{
            state.isLoading = true
            
        },


        [Allmyappointement.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.appointements= payload


            

        },
        [Allmyappointement.rejected] : (state,{type,payload})=>{
            state.Errors = payload
        },
        [getmyappbypatient.pending]: (state)=>{
            state.isLoading = true
            
        },


        [getmyappbypatient.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.appPatient= payload


            

        },
        [getmyappbypatient.rejected] : (state,{type,payload})=>{
            state.Errors = payload
        },
        [getmyappbyDoctor.pending]: (state)=>{
            state.isLoading = true
            
        },


        [getmyappbyDoctor.fulfilled]: (state, {type,payload})=>{
            state.isLoading = false
            state.appDoctor= payload


            

        },
        [getmyappbyDoctor.rejected] : (state,{type,payload})=>{
            state.Errors = payload
        },


        [UpdatingApp.pending]: (state)=>{
            state.isLoading = true
        },
        [UpdatingApp.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.appointement = state.appDoctor.map(app=> (app._id == action.payload._id)? {...app,...action.payload} : app )
        },
        [UpdatingApp.rejected]: (state,action)=>{
            state.Errors = action.payload
        },
 

        [DeletingApp.pending]: (state)=>{
            state.isLoading = true
        },
        [DeletingApp.fulfilled]: (state,action)=>{
            state.isLoading = false
            state.msg = action.payload.msg
            state.appointement= state.appDoctor.filter(app=> app._id !== action.payload.deletedApp._id )
        },
        [DeletingApp.rejected]: (state,action)=>{
            state.Errors = action.payload
        },








    }
}) 

export default AppointementSlice.reducer

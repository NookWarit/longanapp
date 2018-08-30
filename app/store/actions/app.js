import Axios from "axios";
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const SET_WEBVIEW = 'SET_WEBVIEW'
export const TOGGLE_WATER ='TOGGLE_WATER'

export const toggleDrawer = data => ({
    type:TOGGLE_DRAWER,
    payload:data
})
export const setWebview = data => ({
    type:SET_WEBVIEW,
    payload:data
})
export const toggleWater = data => async dispatch =>{
    let waterStatus = await Axios.post(`${config.server.api}/api/toggleWater`,{
        status : data 
    })
    dispatch(setWaterStatus(waterStatus.data))
}

const setWaterStatus = data => ({
    type:TOGGLE_WATER,
    payload:data
})


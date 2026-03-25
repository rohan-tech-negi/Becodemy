import mongoose from "mongoose"

import {driver, createAstraUri} from "stargate-mongoose"

export const connectDb = async ()=>{
    try{
        const uri = createAstraUri(
            process.env.ASTRA_DB_API_ENDPOINT!
        )
    }catch(error){
        console.log(error)
    }
}

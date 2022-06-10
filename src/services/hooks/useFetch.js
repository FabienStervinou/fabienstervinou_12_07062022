import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"

export default function useFetch(url){
    const { userId } = useParams()
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    const baseURL = "http://localhost:3000/"

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(`${baseURL}` + url)
                    setData(response.data.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}

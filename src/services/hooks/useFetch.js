import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"

/**
 * Custom hooks useFetch
 * @param {String} dataType
 * @param {String} service default null
 * @returns 
*/
export default function useFetch(dataType, service = null){
    const { userId } = useParams()
    const [ data,setData ] = useState(null)
    const [ error,setError ] = useState(null)
    const [ loading,setLoading ] = useState(false)

    const baseURL = `http://localhost:3000/user/${userId}`

    useEffect(() => {
        (
            async function() {
                try {
                    setLoading(true)
                    const response = await axios.get(`${baseURL}/${dataType}`)

                    // TODO: Make app running with mocked data
                    if (process.env.REACT_APP_USE_MOKED_DATA) {
                        console.log('%cuseMockedData', 'background-color:purple; padding: 5px; color:white;')
                    }
                    // Manage data by dataType path
                    const cleanData = retrieveData(response, dataType, service)
                    setData(cleanData)
                } catch(err) {
                    console.error(err)
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [])

    return { data, error, loading }
}

/**
  * Return the good data format
 * @param {Json} response 
 * @param {String} path 
 * @param {String} service default null
 * @returns
*/
function retrieveData (response, path, service = null) {
    switch (path) {
        case '':
            if (service === "stat") {
                console.log('tester log response.data.data.keyData :', response.data.data.keyData)
                return response.data.data.keyData
            }
            return response.data.data

        case 'activity':
            return response.data.data.sessions

        case 'average-sessions':
            return response.data.data.sessions

        case 'performance':
            return response.data.data
    
        default:
            break;
    }
}

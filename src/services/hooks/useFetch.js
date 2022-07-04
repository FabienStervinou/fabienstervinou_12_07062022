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
                        // console.log('%cuseMockedData', 'background-color:purple; padding: 5px; color:white;')
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
    }, [dataType, service, baseURL])

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
                return response.data.data.keyData
            }

            if (service === "score") {
                let scoreData = response.data.data
                let res = [
                    {name: 'score', value: scoreData.score ? scoreData.score : scoreData.todayScore},
                    {name: 'antiScore', value: 1 - (scoreData.score ? scoreData.score : scoreData.todayScore)}
                ]
                return res
            }
            return response.data.data

        case 'activity':
            return response.data.data.sessions

        case 'average-sessions':
            let sessions = response.data.data.sessions
            const SESSION_FRENCH = ['L','M','M','J','V','S','D']
            for (let i = 0; i < sessions.length; i++) {
                const element = sessions[i];
                element.day = SESSION_FRENCH[i]
            }

            // Duplicate first and late data to match design
            let res = [...sessions]
            res.unshift({'day': '', 'sessionLength': sessions[0].sessionLength})
            res.push({'day': '', 'sessionLength': sessions[sessions.length - 1].sessionLength})

            return res

        case 'performance':
            let performance = response.data.data
            const ACTIVITY_FRENCH = [
                'Cardio',
                'Energie',
                'Endurance',
                'Force',
                'Vitesse',
                'Intensité'
            ]
            for (let i = 0; i < performance.data.length; i++) {
                const element = performance.data[i];
                element.kind = ACTIVITY_FRENCH[i]
            }
            return performance.data.reverse()
    
        default:
            break;
    }
}

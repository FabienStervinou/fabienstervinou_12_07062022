import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import PropTypes from "prop-types"

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
                    if (process.env.REACT_APP_ENV === 'dev') {
                        const {
                            USER_MAIN_DATA,
                            USER_ACTIVITY,
                            USER_AVERAGE_SESSIONS,
                            USER_PERFORMANCE
                        } = require('../mocks/data')

                        const response = {data: {data: {}}}

                        switch (dataType) {
                            case '':
                                response.data.data = USER_MAIN_DATA.find(element => element.id === parseInt(userId, 10))
                                break

                            case 'activity':
                                response.data.data = USER_ACTIVITY.find(element => element.userId === parseInt(userId, 10))
                                break

                            case 'average-sessions':
                                response.data.data = USER_AVERAGE_SESSIONS.find(element => element.userId === parseInt(userId, 10))
                                break

                            case 'performance':
                                response.data.data = USER_PERFORMANCE.find(element => element.userId === parseInt(userId, 10))
                                break
                        
                            default:
                                break;
                        }
                        const cleanData = retrieveData(response, dataType, service)
                        if (cleanData === undefined) {
                            throw new Error('Undefined data')
                        }
                        setData(cleanData)
                    } else {
                        const response = await axios.get(`${baseURL}/${dataType}`)

                        // Manage data by dataType path
                        const cleanData = retrieveData(response, dataType, service)
                        if (cleanData === undefined) {
                            throw new Error('Undefined data')
                        }
                        setData(cleanData)
                    }
                } catch(err) {
                    console.error(err)
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [dataType, service, baseURL, userId])

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
            let activityData = response.data.data.sessions

            for (let i = 0; i < activityData.length; i++) {
                const data = activityData[i];
                data.index = i + 1
            }

            return activityData

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

retrieveData.propTypes = {
    response: PropTypes.shape({
        data: PropTypes.shape({
            data: PropTypes.object
        })
    }),
    path: PropTypes.string.isRequired,
    service: PropTypes.string
}
useFetch.propTypes = {
    dataType: PropTypes.oneOf(['', 'activity', 'average-sessions', 'performance']),
    service: PropTypes.string
}

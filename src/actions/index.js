import axios from '../api/axios-data'

export const fetchMessages = () => async (dispatch) => {
    await axios.get('/message.json')
        .then(res => {
            const data = Object.entries(res.data).map(([key, val]) => {
                return val
            });
            dispatch({
                type: "FETCH_MESSAGES",
                payload: data
            })
        })
}

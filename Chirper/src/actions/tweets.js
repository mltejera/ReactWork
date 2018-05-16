import { saveLikeToggle } from '../utils/api'


export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

function toggleTweet({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet(info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Errpr in handleToggleTweet: ', e)
                dispatch(toggleTweet(info))
                alert('there was an error liking the tweet. try again')

            })
    }
}
import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'
const GithubContext = React.createContext()

// Provider,  Consumer - GithubContext.Provider

// GithubProvider is a seperate component
const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)
  const [loading, setLading] = useState(false)

  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then((data) => {
        let {
          rate: { remaining },
        } = data.data
        setRequests(remaining)
        if (remaining === 0) {
          // throw error
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(checkRequest, [])
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }

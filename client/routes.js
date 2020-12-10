import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Transaction from './Transaction'
import {me, updateSocialUsername} from './userActions'

const Routes = () => {
  const [data, setData] = useState({
    userData: null,
    transactionData: null,
    loading: true
  })

  // useEffect for user
  useEffect(() => {
    const findData = async () => {
      try {
        let resData = await me()
        setData({
          userData: resData.user,
          transactionData: resData.transactions,
          loading: false
        })
      } catch (err) {
        console.error(err)
      }
    }
    setTimeout(() => {
      findData()
    }, 2000)
  }, [])

  // conditional render for landing v transaction v home v landing
  return data.loading ? (
    <div className="App">
      <header className="App-header">
        <video
          src="/images/background.mp4"
          id="background"
          playsInline
          muted
          autoPlay
          loop
          style={{pointerEvents: 'none'}}
        />
        <div id="overlay" />
        <div id="loadContainer">
          <video
            src="/images/loader.mp4"
            id="loadIcon"
            playsInline
            muted
            autoPlay
            loop
            style={{pointerEvents: 'none'}}
          />
          <img id="loadJar" src="/images/loadJar.png" />
        </div>
      </header>
    </div>
  ) : (
    <Switch>
      {window.location.href.split('/')[3].split('?')[0] ===
      'send-transaction' ? (
        data.userData ? (
          <Route>
            <Transaction
              user={data.userData}
              recipient={window.location.href.split('?')[1].split('=')[1]}
              link={window.location.href.split('?')[2].split('=')[1]}
            />
          </Route>
        ) : (
          <Landing />
        )
      ) : window.location.href.split('/')[3].split('?')[0] ===
      'updateSocialUsername' ? (
        <div>
          {updateSocialUsername(
            window.location.href.split('?')[1],
            window.location.href.split('?')[2]
          ).then(() => {
            window.location.replace('http://localhost:5000')
          })}
        </div>
      ) : data.userData && data.userData.id ? (
        <Route>
          <Home user={data.userData} transactions={data.transactionData} />
        </Route>
      ) : (
        <Route>
          <Landing />
        </Route>
      )}
    </Switch>
  )
}

export default withRouter(Routes)

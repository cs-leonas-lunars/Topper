import React, {useState, useEffect} from 'react'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Transaction from './Transaction'
import {loadBlockchainData} from './loadData'
import {me} from './userActions'

const Routes = () => {
  const [data, setData] = useState({
    userData: null,
    transactionData: null,
    accountData: null,
    loading: true
  })

  // useEffect for user
  useEffect(() => {
    const findData = async () => {
      let resData = await me()
      let accountData = await loadBlockchainData()
      setData({
        userData: resData.user,
        transactionData: resData.transactions,
        accountData,
        loading: false
      })
    }
    findData()
  }, [])

  // conditional render for landing v transaction v home v landing
  return data.loading ? (
    <div className="App">
      <header className="App-header">
        <img id="background" src="/images/topperBackground.gif" />
        <div id="overlay" />
        <div id="loadContainer">
          <img id="loadIcon" src="/images/loadGif.gif" />
          <img id="loadJar" src="/images/loadJar.png" />
        </div>
      </header>
    </div>
  ) : (
    <Switch>
      {window.location.href.split('/')[3].split('?')[0] ===
      'send-transaction' ? (
        <Route>
          <Transaction
            user={data.userData}
            recipient={window.location.href.split('?')[1].split('=')[1]}
            link={window.location.href.split('?')[2].split('=')[1]}
          />
        </Route>
      ) : data.userData && data.userData.id ? (
        <Route>
          <Home user={data.userData} transactions={data.transactionData} />
        </Route>
      ) : (
        <Route>
          <Landing account={data.accountData.account} />
        </Route>
      )}
    </Switch>
  )
}

export default withRouter(Routes)

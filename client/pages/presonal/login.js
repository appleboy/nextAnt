import React from 'react'
import LoginForm from '../../src/features/login'
import { GlobalBlock } from '../../src/components/layout'
import LogoutForm from '../../src/features/logout'

export default props => {
  return (
    <GlobalBlock.Consumer>
      {result => {
        if (!process.browser) {
          return <div />
        }
        const { loginState, handleLoginEvent } = result
        if (loginState.state.loggedIn === false) {
          return <LoginForm handleLogin={handleLoginEvent.handleLogin} />
        } else {
          return <LogoutForm handleLogout={handleLoginEvent.handleLogout} />
        }
      }}
    </GlobalBlock.Consumer>
  )
}

import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { adopt } from 'react-adopt'

export const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
export const userAllQuery = gql`
  query userAllQuery {
    userAllQuery {
      _id
      email
      password
    }
  }
`

export const signup = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`

export const logout = gql`
  mutation logout {
    logout {
      token
    }
  }
`

const loginAction = ({ render }) => (
  <Mutation mutation={login}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

const signupAction = ({ render }) => (
  <Mutation mutation={signup}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

const logoutAction = ({ render }) => (
  <Mutation mutation={logout}>
    {(mutation, result) => render({ mutation, result })}
  </Mutation>
)

export const ActionContainer = adopt({
  signupAction,
  loginAction,
  logoutAction
})
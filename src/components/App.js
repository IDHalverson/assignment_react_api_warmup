import React from 'react'
import JumbotronFluid from './elements/JumbotronFluid'
import UserList from './UserList'
import UserForm from './UserForm'

const App = ({users, isFetching, error, onAddUser}) => (
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations in React Applications"
    />
    <UserList
      users={users}
      isFetching={isFetching}
    />
    <br />
    <UserForm
      onSubmit={onAddUser}
      error={error}
    />
  </div>
)

export default App

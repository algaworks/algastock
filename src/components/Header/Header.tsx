import React from 'react'
import './Header.css'
import { RootState } from '../../redux'
import { connect, useDispatch } from 'react-redux'
import { Product } from '../../shared/Table/Table.mockdata'
import { User } from '../../services/Authentication.service'
import { useHistory } from 'react-router-dom'
import { logout } from '../../redux/Authentication/Authentication.actions'
import Swal from 'sweetalert2'

declare interface HeaderProps {
  title: string
  firstProduct: Product
  profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const isLoggedIn = !!props.profile?._id

  const askToLogout = () => {
    Swal
      .fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#09f',
        cancelButtonColor: '#d33'
      })
      .then(({ value }) => value && dispatch(logout()))
  }

  const handleLoginLogout = () => {
    isLoggedIn
      ? askToLogout()
      : history.push('/login')
  }

  return <header className="AppHeader">
    <h1>{ props.title }</h1>
    <div>
      <span onClick={handleLoginLogout}>
        {
          isLoggedIn ? 'Logout' : 'Login'
        }
      </span>
    </div>
  </header>
}

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[0],
  profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header)
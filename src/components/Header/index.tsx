import { HeaderContainer } from './styles'
import hourglass from '../../assets/hourglass.png'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={hourglass} alt="" />
      <nav>
        <NavLink title="Trainer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="History" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

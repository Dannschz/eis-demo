import { NavLink } from 'react-router-dom'
import backPageIcon from '../../../img/backPage1.svg'
import './back.global.scss'

type BBLP = {
  to: string
}

function BackButtonLink({ to }: BBLP) {
  return (
    <div className="backIcon">
      <NavLink className="backPageIcon" to={to}>
        <img src={backPageIcon} alt="" />
      </NavLink>
    </div>
  )
}

export default BackButtonLink

/* eslint-disable react/prop-types */
import React from 'react'
import './button.global.scss'

type UsefulButtonProps = {
  img?: string
  fontSize?: number
  color: string
  width?: number
  disabled?: boolean
  handleClick: () => void
}

const UsefulButton: React.FC<UsefulButtonProps> = ({
  children,
  img = '',
  fontSize = 1,
  color,
  width = 100,
  disabled = false,
  handleClick = () => null
}) => {
  /* const ubclasses = CSS({
    width: units.pct(width),
  });

  const classes = CSS({
    backgroundColor: 'whitesmoke',
    color,
    fontSize: units.em(fontSize),
    paddingTop: units.em(fontSize * 0.6),
    paddingBottom: units.em(fontSize * 0.6),
    border: [color, units.px(4), 'solid'],
    onHover: {
      backgroundColor: color,
      color: 'whitesmoke',
    },
  }); */

  return (
    <div className={`usefulButton`}>
      <button
        className={`buttonBody ${img ? 'withIcon' : 'withoutIcon'}`}
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        {img && <img src={img} alt={img} />}
        <p className="btnText">{children}</p>
      </button>
    </div>
  )
}

export default UsefulButton

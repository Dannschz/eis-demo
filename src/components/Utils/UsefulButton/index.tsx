/* eslint-disable react/prop-types */
import { ButtonStyled } from './styled'
import './button.scss'

type UsefulButtonProps = {
  children: React.ReactNode
  img?: string
  fontSize?: number
  color: string
  width?: number
  disabled?: boolean
  handleClick: () => void
}

function UsefulButton({
  children,
  img = '',
  fontSize = 1,
  color,
  width = 100,
  disabled = false,
  handleClick = () => null
}: UsefulButtonProps) {
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
      <ButtonStyled
        className={`buttonBody ${img ? 'withIcon' : 'withoutIcon'}`}
        type='button'
        onClick={handleClick}
        disabled={disabled}
        color={color}
        fontSize={fontSize}
        width={width}
      >
        {img && <img src={img} alt={img} />}
        <p className='btnText'>{children}</p>
      </ButtonStyled>
    </div>
  )
}

export default UsefulButton

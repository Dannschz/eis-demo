import { useHistory } from 'react-router-dom';
import backPageIcon from '../../../img/backPage1.svg';
import './back.global.scss';

function BackButtonLink() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="backIcon">
      <button className="backPageIcon" type="button" onClick={handleClick}>
        <img src={backPageIcon} alt="" />
      </button>
    </div>
  );
}

export default BackButtonLink;

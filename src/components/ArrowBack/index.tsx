import './style.css';
import { Link } from 'react-router-dom';

export default function ArrowBack(props: any) {
  const { path } = props;

  return (
    <div className="arrow-back">
      <Link to={path}>
        <i className="material-icons">arrow_back</i>
      </Link>
    </div>
  );
}

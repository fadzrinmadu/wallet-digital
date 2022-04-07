import './style.css';
import { Link } from 'react-router-dom';

interface ArrowBackProps {
  path: string;
}

export default function ArrowBack(props: ArrowBackProps) {
  const { path } = props;

  return (
    <div className="arrow-back">
      <Link to={path}>
        <i className="material-icons">arrow_back</i>
      </Link>
    </div>
  );
}

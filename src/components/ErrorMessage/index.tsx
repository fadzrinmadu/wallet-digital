import './style.css';

interface ErrorMessageProps {
  type: 'success' | 'error';
  message: string;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const { type, message } = props;

  return (
    <div className={`message ${type === 'success' ? 'message-success' : 'message-error'}`}>
      {message}
    </div>
  );
}

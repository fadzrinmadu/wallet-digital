import './style.css';

interface DataFormSelectType {
  id: string;
  name: string;
  accountNo: string;
}

interface FormSelectProps {
  text: string;
  field: string;
  data: DataFormSelectType[];
  value?: string;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormSelect(props: FormSelectProps) {
  const { text, field, data, value, errorMessage, onChange } = props;

  return (
    <div className={`form-input ${errorMessage && 'is-invalid'}`}>
      <label htmlFor={field}>{text}</label>
      <div className="custom-select">
        <select id={field} value={value} onChange={onChange}>
          <option>-- Select Payee --</option>
          {data.length && data.map((item: DataFormSelectType) => (
            <option key={item.id} value={item.accountNo}>{item.name}</option>
          ))}
        </select>
        {errorMessage && (
          <span className="error-message">{errorMessage}</span>
        )}
      </div>
    </div>
  );
}

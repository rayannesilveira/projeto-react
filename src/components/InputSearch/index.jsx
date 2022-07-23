import './styles.css';

export const InputSearch = ({searchValue, handleChange}) => (
  <input 
  className='input'
  onChange={handleChange}
  value={searchValue}
/>
);
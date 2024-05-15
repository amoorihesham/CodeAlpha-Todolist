import { useNavigate } from 'react-router-dom';
import { BTNProps } from '../../utils/types';

const BTN = ({ title, outline, color, to }: BTNProps) => {
  const navigate = useNavigate();

  if (outline) {
    return (
      <button
        className='btn'
        style={{ border: `1px solid ${color}`, backgroundColor: 'transparent', cursor: 'pointer', padding: '6px 12px', borderRadius: '.2rem' }}
        onClick={() => (to ? navigate(to) : alert('test'))}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        className='btn'
        style={{ backgroundColor: color, border: `1px solid ${color}`, color: 'white', cursor: 'pointer', marginRight: '5px', padding: '6px 12px', borderRadius: '.2rem' }}
        onClick={() => (to ? navigate(to) : alert('test'))}
      >
        {title}
      </button>
    );
  }
};

export default BTN;

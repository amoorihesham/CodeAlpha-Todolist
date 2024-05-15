import './style.css';
const LoadingSkeleton: React.FC = () => {
  return (
    <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span className='loader'></span>
    </div>
  );
};

export default LoadingSkeleton;

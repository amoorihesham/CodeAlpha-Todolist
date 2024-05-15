import BTN from '../BTN/BTN';

const TopNav = () => {
  return (
    <div className='top-nav'>
      <BTN
        title='Home'
        color='#4caf50'
        to='/'
      />
      <BTN
        title='Create'
        outline={true}
        color='#4caf50'
        to='/create'
      />
    </div>
  );
};
export default TopNav;

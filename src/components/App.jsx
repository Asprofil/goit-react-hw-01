import './App.css'
import Profile from './Profile.jsx'
import userData from '../userData.json'
import transactions from '../transactions.json';
import TransactionHistory from './TransactionHistory.jsx'
import FriendList from './FriendList.jsx';
import friends from "../friends.json";


function App() {

  return (
    <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <p className='spacer'></p>
      <FriendList friends={friends} />
      <p className='spacer'></p>
<TransactionHistory items={transactions} />
      </>
  )
}

export default App

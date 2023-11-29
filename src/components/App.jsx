import Profile  from "./Profile/Profile.jsx";
import Statistics from "./Statistics/Statistics.jsx"
import FriendList from "./FriendList/FriendList.jsx"
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx"
import user from '../data/user.json'
import stats from '../data/data.json'
import friends from '../data/friends.json'
import transactions from'../data/transactions.json'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
<Profile
username={user.username}
avatar={user.avatar}
tag={user.tag}
location={user.location}
stats={user.stats}
></Profile> 


<Statistics title="Upload stats" stats={stats}/>

<FriendList data={friends}/>

<TransactionHistory items={transactions}/>

    </div>

    
  );
};

console.log(Profile);


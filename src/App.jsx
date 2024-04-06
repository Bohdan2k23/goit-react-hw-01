import "./App.css";
import FriendList from "./components/friend-list/FriendList";
import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import friendsData from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/transaction-history/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

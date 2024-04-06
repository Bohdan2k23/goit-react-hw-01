import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";
export default function FriendList({ friends }) {
  return (
    <ul className="flex gap-20 list-none">
      {friends.map((el) => (
        <li key={el.id}>
          <FriendListItem {...el} />
        </li>
      ))}
    </ul>
  );
}

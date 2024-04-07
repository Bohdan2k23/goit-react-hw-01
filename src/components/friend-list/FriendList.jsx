import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";
export default function FriendList({ friends }) {
  return (
    <ul className="flex-center gap-20 list-none">
      {friends.map((el) => (
        <li className={css.frienditem} key={el.id}>
          <FriendListItem {...el} />
        </li>
      ))}
    </ul>
  );
}

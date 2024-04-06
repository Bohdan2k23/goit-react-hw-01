import css from "./FriendList.module.css";
export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? "text-green" : "text-red"}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

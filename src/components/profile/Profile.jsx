import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <div>
        <img className={css.photo} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="list-none flex-center gap-20">
        <li className="flex-col">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="flex-col">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="flex-col">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

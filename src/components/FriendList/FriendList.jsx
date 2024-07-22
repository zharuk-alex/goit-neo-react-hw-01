import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.positive : css.negative;
  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default ({ friends }) => {
  return (
    <ul className={css.row}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

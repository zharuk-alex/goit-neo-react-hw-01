import css from "./FriendListItem.module.css";

export default ({ avatar, name, isOnline }) => {
  return (
    <div className={css["list-item"]}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={isOnline ? css.positive : css.negative}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

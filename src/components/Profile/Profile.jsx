import css from "./Profile.module.css";

export default ({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = {},
}) => {
  return (
    <div className={css.card}>
      <div className={css["card-body"]}>
        <img className={css["card-img"]} src={image} alt="User avatar" />
        <p className={css["card-title"]}>{name}</p>
        <p className={css["card-subtitle"]}>{tag}</p>
        <p className={css["card-subtitle"]}>{location}</p>
      </div>
      <ul className={css["card-footer"]}>
        {Object.keys(stats).map((key) => (
          <li key={key} className={css["stat-item"]}>
            <p className={css["stat-title"]}>{key}</p>
            <p className={css["stat-value"]}>{stats[key]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

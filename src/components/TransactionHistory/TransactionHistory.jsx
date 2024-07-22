import css from "./TransactionHistory.module.css";

export default ({ headers = ["type", "amount", "currency"], items = [] }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          {headers.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, ...item }, index) => (
          <tr key={id} className={index % 2 === 0 ? css.odd : css.even}>
            {headers.map((th) => (
              <td key={`${id}_${th}`}>{item?.[th]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

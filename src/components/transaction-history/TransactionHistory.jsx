import React from "react";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headItem}>Type</th>
          <th className={css.headItem}>Amount</th>
          <th className={css.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={css.bodyItem}>{item.type}</td>
            <td className={css.bodyItem}>{item.amount}</td>
            <td className={css.bodyItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import css from "./TransactionHistory.module.css"
export default function TransactionHistoryItem({id, type, amount, currency}) {
    return (
        <tr className={css.item} key={id}>
      <td className={css.info}>{type}</td> 
      <td className={css.info}>{amount}</td>
      <td className={css.info}>{currency}</td>
    </tr>
    )
}
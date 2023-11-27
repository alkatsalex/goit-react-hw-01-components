import css from "./TransactionHistory.module.css"
export default function TransactionHistoryItem({prop}) {
    return prop.map(({id, type, amount, currency}) => (
        <tr className={css.item} key={id}>
      <td className={css.info}>{type}</td> 
      <td className={css.info}>{amount}</td>
      <td className={css.info}>{currency}</td>
    </tr>
    ))
}
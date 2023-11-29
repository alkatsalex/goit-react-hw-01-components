import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem"
import css from "./TransactionHistory.module.css"
export default function TransactionHistory({items}) {
    return (
        <table className={css.transaction_history}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.t_body}>
    {items.map(item => (
      <TransactionHistoryItem prop={item}
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}/>
    ))}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
}
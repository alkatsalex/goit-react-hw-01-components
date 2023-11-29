import PropTypes from "prop-types";
import css from "./Statistics.module.css"

function Item({id, label, percentage}) {
    return (
     <li className={css.item} key={id}>
       <span className={css.type}>{label} </span>
       <span>{percentage}%</span>
     </li>
)

}

export default function Statistics({title, stats}) {
    return (
        <section className={css.statistics}>
  {title && <h2 className="title">{title}</h2>}

  <ul className={css.stat_list}>
    {stats.map(stat => (
      <Item props={stat}
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}/>
    ))}

  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
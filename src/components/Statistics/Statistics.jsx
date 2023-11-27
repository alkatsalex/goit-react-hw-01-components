import css from "./Statistics.module.css"

function Item({props}) {
    return props.map(({id, label, percentage})=> (
     <li className={css.item} key={id}>
       <span className={css.type}>{label} </span>
       <span>{percentage}%</span>
     </li>
))

}

export default function Statistics({title, stats}) {
    return (
        <section className={css.statistics}>
  {title && <h2 className="title">{title}</h2>}

  <ul className={css.stat_list}>
<Item props={stats}/>
  </ul>
</section>
    )
}
import clsx from "clsx";
import css from "./FriendList.module.css"

export default function FriendListItem({id, avatar, name, isOnline}) {
   return (
<li className={css.item} key={id}>
  <span className={clsx(isOnline ? css.isOnline : css.isOffline)} ></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
   )
}
import FriendListItem from "./FriendListItem"
import css from "./FriendList.module.css"




export default function FriendList ({data}){
    return (
<ul className={css.friendsList}>
<FriendListItem users={data}/>
</ul>
)}
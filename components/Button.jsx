import ShopIcon from '../public/icons/shop.svg'
import SearchIcon from '../public/icons/search.svg'

export default function MainButton({text, withIcon, disabled, explore}){
    return(
    <button className="mainBtn" type="submit" disabled={disabled}>
        {withIcon && explore ? <SearchIcon/> : <ShopIcon/>}
        {text}
    </button>
    )
}
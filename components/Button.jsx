import ShopIcon from '../public/icons/shop.svg'
import SearchIcon from '../public/icons/search.svg'
import Image from 'next/image'

export default function MainButton({text, withIcon, disabled, explore, onClick, isLoadding}){
    return(
    <button className="mainBtn" type="submit" disabled={disabled} onClick={onClick}>
        {withIcon && explore ? <SearchIcon/> : <ShopIcon/>}
        {text}
            {isLoadding && 'Loadding...'}
            <Image src="/images/spinner-loop.gif" width={20} height={20}/>
    </button>
    )
}
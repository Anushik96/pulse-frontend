import ArrowIcon from '../public/icons/rightArrow.svg'

export default function LinkButton({text, disabled}){
    return(
    <button className="linkBtn" type="submit" disabled={disabled}>
        {text}
        <ArrowIcon/>
    </button>
    )
}
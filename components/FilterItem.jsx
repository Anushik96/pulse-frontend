

export default function FilterItem({type, label, name}){
    return(
        <div>
            <label className={`custom-${type}`}>
                <input type={type} name={name} />
                <span className="checkmark"></span>
                    <p>{label}</p>
            </label>
        </div>
    )
}
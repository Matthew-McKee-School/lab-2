import type { ResortListing } from "../data/data"
export default function ResortListingCard(props : ResortListing){
    return (
        <div className="ResortListingCard">
            <img src = {props.pic} alt='' width = '150px'/>
            <h3>{props.country}</h3>
            <p>{props.location}</p>
            {props.rating > 4.0 && (<p className="OverFour">{props.rating}★</p>)}
            {props.rating <= 4.0 && (<p className="UnderFour">{props.rating}★</p>)}
            <p>${props.price}/night</p>
        </div>
    )
}
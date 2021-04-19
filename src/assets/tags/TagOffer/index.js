import { Icon } from '@iconify/react';
import starIcon from '@iconify/icons-akar-icons/star'
import './style.css'


export default function Offer () {
    return(
        <span className="Tag Offer">
            <Icon icon={starIcon}/> Oferta
        </span>
    )
}
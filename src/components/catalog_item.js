import {useNavigate} from "react-router";


export const CatalogItem = ({icon, type, title, id}) => {
    const navigate = useNavigate()

    return(
        <div className={`catalogs__item ${type}`} onClick={() => navigate(`/details/${id}`)}>
            <img src={icon} alt=""/>
            <p>{title}</p>
        </div>
    )
}
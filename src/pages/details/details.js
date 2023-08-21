import {useNavigate, useParams} from "react-router";
import {data} from "../../components/data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useContext, useEffect} from "react";
import {AllContext} from "../../utils/context";


export const Details = () =>{
    const params = useParams()
    const navigate = useNavigate()
    const {setGridShow, lang} = useContext(AllContext)
    const item = lang[params.id]
    window.scrollTo(0,0)
    useEffect(() => {
        setGridShow(false)
    }, [])

    return(
        <div className={'details'}>
            <h2 onClick={() => navigate(-1)}>
                <ArrowBackIosIcon/>
                {item.mainType}
            </h2>
            {
                item.list?.map((el, i) => {
                    if (el.subMenu){
                        if (typeof el.subMenu === "string"){
                            return (
                                <div key={i + 'a'} className={'flex'}>
                                    <div>
                                        <h4>{el.title}</h4>
                                        {el.subMenu && <p>{el.subMenu}</p>}
                                    </div>
                                    <b>{el.price} ֏</b>
                                </div>
                            )
                        }else{
                            return (
                                <div key={i + 'b'}>
                                    <h4 className={'flex'}>{el.title}
                                        {el.price && <b>{el.price} ֏</b>}
                                    </h4>
                                    <ul>
                                        {
                                            el.subMenu?.map((el, i) => (
                                                <li key={i} className={'flex'}>
                                                    <div>
                                                        <h5>{el.name}</h5>
                                                        {el.info && <p>{el.info}</p>}
                                                    </div>
                                                    <b>{el.price} ֏</b>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    }
                    else {
                        return (
                            <div key={i + 'c'} className={'flex'}>
                                <div>
                                    <h4>{el.title}</h4>
                                    {el.subMenu && <p>{el.subMenu}</p>}
                                </div>
                                {el.price && <b>{el.price} ֏</b>}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
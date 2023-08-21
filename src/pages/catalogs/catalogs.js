import {data} from "../../components/data";
import {CatalogItem} from "../../components/catalog_item";
import {useContext, useEffect} from "react";
import {AllContext} from "../../utils/context";
import {useParams} from "react-router";


export const Catalogs = () => {
    const params = useParams()
    const {grid, setGridShow, setLang, lang} = useContext(AllContext)
    const title = {
        am: 'Մենյու',
        ru: 'Меню',
        en: 'Menu',
    }

    useEffect(() => {
        setLang(data[params.lang])
        setGridShow(true)
    }, [])

    return(
        <>
            <h1>{title[params.lang]}</h1>
            <div className={`catalogs ${grid && 'doGrid'}`}>
                {
                    lang.map((el, i) => (
                        <CatalogItem key={i} id={i} icon={el.icon} type={el.mainType} title={el.mainType} />
                    ))
                }
            </div>
        </>
    )
}
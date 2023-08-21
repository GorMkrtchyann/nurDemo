import {Images} from "../../images/images";
import {useNavigate} from "react-router";


export const Language = () => {
    const navigate = useNavigate()

    return(
        <div className={'language'}>
            <div className={'language__texts'}>
                <p>Ընտրեք լեզուն</p>
                <p>Выберите язык</p>
                <p>Select the language</p>
            </div>

            <div className={'language__icons'}>
                <img src={Images.armenian} alt="armenian" onClick={() => navigate('/catalogs/am')}/>
                <img src={Images.russian} alt="russian" onClick={() => navigate('/catalogs/ru')}/>
                <img src={Images.english} alt="english" onClick={() => navigate('/catalogs/en')}/>
            </div>

            <img className={'decor'} src={Images.logo} alt="logo"/>
        </div>
    )
}
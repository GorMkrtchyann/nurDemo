import {Images} from "../../images/images";
import MenuIcon from '@mui/icons-material/Menu';
import {Grid} from "../../components/grid";
import {useNavigate, useParams} from "react-router";
import {useContext} from "react";
import {AllContext} from "../../utils/context";
import LanguageIcon from '@mui/icons-material/Language';

export const Menu = () => {
    const navigate = useNavigate()
    const {gridShow} = useContext(AllContext)

    return(
        <div className={"menu"}>
            <div className={'container'}>
                <div className={'logo'} onClick={() => navigate('/')}>
                    <img src={Images.logo} alt="logo"/>
                    <p>Նուռ / Nur</p>
                </div>
                {
                    gridShow && <Grid/>
                }
                <LanguageIcon onClick={() => navigate('/')}/>
            </div>
        </div>
    )
}
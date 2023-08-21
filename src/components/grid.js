import WindowIcon from '@mui/icons-material/Window';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import {useContext} from "react";
import {AllContext} from "../utils/context";

export const Grid = () => {
    const {setGrid} = useContext(AllContext)

    return(
        <div className={'grid'}>
            <WindowIcon onClick={() => setGrid(true)}/>
            <ViewAgendaIcon onClick={() => setGrid(false)}/>
        </div>
    )
}
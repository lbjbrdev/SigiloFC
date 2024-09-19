import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdOutlinePlace } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

import { IEvent } from '../../models/Event';

import { useCardController } from './useController';

import * as S from './styles';

interface IProps {
    event: IEvent;
};

export function Card(props: IProps) {
    const controller = useCardController(props?.event);

    return (
        <>
            <S.Container isPast={controller?.hasEventPassed} onClick={controller.handleNavigateFromMoreInformation}>
                <S.Place>
                    <MdOutlinePlace size={25} />
                    {props?.event?.place}
                </S.Place>
                
                <S.DateAndHour>
                    <RiCalendarScheduleLine size={25} />
                    {controller.formattedDate} a partir de {controller.formattedTime}
                </S.DateAndHour>

                <S.MoreInformation>
                    <BsInfoCircle size={25} />
                    Clique para saber mais
                </S.MoreInformation>
            </S.Container>
        </>
    );
}
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import { anaEvents, gustavoEvents } from "../../mocks/events";

import MiotoLogo from '../../assets/miotoLogo.svg';
import AnaLogo from '../../assets/anaLogo.svg';

import * as S from './styles';

export function Artist() {
    const { name } = useParams();

    const events = name === 'Gustavo Mioto' ? gustavoEvents : anaEvents

    return (
        <>
            <Header imageChildren={name === 'Gustavo Mioto' ? MiotoLogo : AnaLogo} />

            <S.Container>
                /* <S.Text>Agenda de {name}</S.Text>

                {events.map(item => <Card event={item} />)}
            </S.Container>
        </>
    )
}
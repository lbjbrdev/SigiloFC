import { useNavigate } from "react-router-dom";

import { Artist } from "../../components/Artist";
import { Header } from "../../components/Header";

import Mioto from '../../assets/mioto.svg';
import Ana from '../../assets/ana.svg';


import * as S from './styles';

export function Home() {
    const naviagte = useNavigate();

    return (
        <>
            <Header title='Seja Bem Vindo ao Sigilo F.C' />

            <S.Container>
                <S.Title>Selecione um artista para conferir a agenda:</S.Title>
                <Artist picutre={Ana} onClick={() => naviagte('/artist/Ana Castela')} />
                <Artist picutre={Mioto} onClick={() => naviagte('/artist/Gustavo Mioto')} />
            </S.Container>
        </>
    );
}
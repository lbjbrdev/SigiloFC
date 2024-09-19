import * as S from './styles';

interface IProps {
    picutre: string;
    onClick?: () => void;
}

export function Artist(props: IProps) {
    return (
        <S.Container>
            <S.Image src={props?.picutre} onClick={props?.onClick} />
        </S.Container>
    );
};
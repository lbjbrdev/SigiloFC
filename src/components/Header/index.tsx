import * as S from './styles';

interface IProps {
    title?: string;
    imageChildren?: string; 
}

export function Header(props: IProps) {
    return (
        <S.Container>
            {props?.title}
            {props?.imageChildren && (
                <S.ImageChildren src={props.imageChildren} />
            )}
        </S.Container>
    );
}
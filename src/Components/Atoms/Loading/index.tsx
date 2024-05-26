import * as S from "./styles";
import Load from "/assets/imgs/escudo.svg";

export function Loading() {
  return (
    <S.Wrapper>
      <S.WrapperImg>
        <S.ImgLoad src={"/assets/svg/load.svg"} alt="Loagin" />
        <span>Carregando...</span>
      </S.WrapperImg>
    </S.Wrapper>
  );
}

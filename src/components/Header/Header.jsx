import { HeaderStyled, NavLinkStyled } from './Header.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
            <NavLinkStyled to="/favorites">Your favorites</NavLinkStyled>
        </HeaderStyled>
    );
}

export default Header;
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterBar>
            <Navigation>
                <NavLink to="/impressum">Impressum</NavLink>
                <NavLink to="/datenschutz">Datenschutz</NavLink>
            </Navigation>

            <About>
                Remake von{' '}
                <Domain href="https://hotspotornot.de" target="_blank">
                    hotspotornot.de
                </Domain>{' '}
                im Rahmen meines Abschlussprojektes bei Neue Fische. Die Köpfe
                hinter "Hotspot or not?" -{' '}
                <Domain href="https://seb.astian.eu/" target="_blank">
                    Sebastian
                </Domain>
                ,{' '}
                <Domain href="https://julianblohm.vercel.app/" target="_blank">
                    Julian
                </Domain>
                {' '}und{' '}
                <Domain href="https://jonas.re/" target="_blank">
                    Jonas
                </Domain>
                .
            </About>
        </FooterBar>
    )
}

const FooterBar = styled.footer`
    background: var(--silver);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
`

const Navigation = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 80%;
`

const About = styled.p`
    width: 100%;
    margin-top: 20px;
    color: var(--gray);
    text-align: center;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--blue);
`

const Domain = styled.a`
    text-decoration: none;
    color: var(--blue);
`

export default Footer

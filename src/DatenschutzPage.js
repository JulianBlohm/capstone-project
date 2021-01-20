import { useEffect } from 'react'
import styled from 'styled-components/macro'
import { VirusRedIcon } from './lib/Icons'
import scrollUp from './lib/scrollUp'

function DatenschutzPage() {
    useEffect(() => scrollUp(), [])

    return (
        <PageGrid>
            <Intro>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <Heading>Datenschutz</Heading>
            </Intro>
            <Information>
                <Text>
                    Die Nutzung unserer Seite ist ohne eine Angabe von
                    personenbezogenen Daten möglich. Für die Nutzung einzelner
                    Services unserer Seite können sich hierfür abweichende
                    Regelungen ergeben, die in diesem Falle nachstehend
                    gesondert erläutert werden. Ihre personenbezogenen Daten
                    (z.B. Name, Anschrift, E-Mail, Telefonnummer, u.ä.) werden
                    von uns nur gemäß den Bestimmungen des deutschen
                    Datenschutzrechts verarbeitet. Daten sind dann
                    personenbezogen, wenn sie eindeutig einer bestimmten
                    natürlichen Person zugeordnet werden können. Die rechtlichen
                    Grundlagen des Datenschutzes finden Sie im
                    Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz
                    (TMG). Nachstehende Regelungen informieren Sie insoweit über
                    die Art, den Umfang und Zweck der Erhebung, die Nutzung und
                    die Verarbeitung von personenbezogenen Daten durch den
                    Anbieter.
                </Text>
                <TextHeading>Angaben gem. § 5 TMG:</TextHeading>
                <Text>
                    Julian Blohm
                    <br />
                    Kaemmererufer 12f
                    <br />
                    22303 Hamburg
                    <br />
                    E-Mail:
                    <Link href="mailto:service@hotspotornot.de">
                        {' '}
                        service@hotspotornot.de
                    </Link>
                </Text>
                <Text>
                    Wir weisen darauf hin, dass die internetbasierte
                    Datenübertragung Sicherheitslücken aufweist, ein lückenloser
                    Schutz vor Zugriffen durch Dritte somit unmöglich ist.
                </Text>
                <TextHeading>Serverdaten</TextHeading>
                <Text>
                    Aus technischen Gründen werden u.a. folgende Daten, die Ihr
                    Internet-Browser an uns bzw. an unseren Webspace-Provider
                    übermittelt, erfasst (sogenannte Serverlogfiles):
                </Text>
                <List>
                    <li>- Browsertyp und -version</li>
                    <li>- verwendetes Betriebssystem</li>
                    <li>
                        - Webseite, von der aus Sie uns besuchen (Referrer URL)
                    </li>
                    <li>- Webseite, die Sie besuchen</li>
                    <li>- Datum und Uhrzeit Ihres Zugriffs</li>
                    <li>- Ihre Internet Protokoll (IP)-Adresse.</li>
                </List>
                <Text>
                    Diese anonymen Daten werden getrennt von Ihren eventuell
                    angegebenen personenbezogenen Daten gespeichert und lassen
                    so keine Rückschlüsse auf eine bestimmte Person zu. Sie
                    werden zu statistischen Zwecken ausgewertet, um unseren
                    Internetauftritt und unsere Angebote optimieren zu können.
                </Text>
                <TextHeading>Kontaktmöglichkeit</TextHeading>
                <Text>
                    Wir bieten Ihnen auf unserer Seite die Möglichkeit, mit uns
                    per E-Mail und/oder über ein Kontaktformular in Verbindung
                    zu treten. In diesem Fall werden die vom Nutzer gemachten
                    Angaben zum Zwecke der Bearbeitung seiner Kontaktaufnahme
                    gespeichert. Eine Weitergabe an Dritte erfolgt nicht. Ein
                    Abgleich der so erhobenen Daten mit Daten, die
                    möglicherweise durch andere Komponenten unserer Seite
                    erhoben werden, erfolgt ebenfalls nicht.
                </Text>
            </Information>
        </PageGrid>
    )
}

const PageGrid = styled.div`
    display: grid;
`

const Heading = styled.h1`
    margin-bottom: 25px;
    font-size: 2rem;
    line-height: 1.4;
`

const Intro = styled.div`
    padding: 0 30px;
    background: var(--silver);
`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 50px;
`

const Logo = styled(VirusRedIcon)`
    width: 120px;
`

const Information = styled.article`
    padding: 25px 30px 100px 30px;
`

const TextHeading = styled.h4`
    font-size: 1.5rem;
    margin-top: 50px;
`

const Text = styled.p`
    font-size: 1rem;
    margin: 20px 0 20px 0;
    color: var(--gray);
`

const Link = styled.a`
    text-decoration: none;
    color: var(--blue);
`

const List = styled.ul`
    list-style: none;
    color: var(--gray);
`

export default DatenschutzPage

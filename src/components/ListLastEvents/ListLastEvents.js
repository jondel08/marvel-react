import { Card, Container, Header, Button, Icon } from 'semantic-ui-react';
import useFetch from '../../hooks/useFetch';
import LastEvents from '../LastEvents/LastEvents';
import "./ListLastEvents.scss";
import './ListLastEvents.scss';

export default function ListLastEvents() {
    const lastEventsFetch = useFetch(`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&Limit=5`)
    //console.log(process.env.REACT_APP_URL_BASE);
    return (
        <div className="container-list-last-events">
            <Header size="large">Últimos eventos</Header>

            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    <p>Los eventos 1...</p>
                    <p>Los eventos 2...</p>
                    <p>Los eventos 3...</p>
                    <p>Los eventos 4...</p>
                    <p>Los eventos 5...</p>
                    <p>Los eventos 6...</p>
                    <p>Los eventos 7...</p>
                    <p>Los eventos  8...</p>
                    <p>Los eventos  9...</p>
                    <p>Los eventos 10...</p>
                    <LastEvents lastEventsFetch={lastEventsFetch} />
                </Card.Group>
                {/* <Card>
                    <Card.Content>
                        <Button animated as="a" target="_blank" color="black">
                            <Button.Content visible>Ver evento</Button.Content>
                            <Button.Content hidden></Button.Content>
                            <Icon name="arrow right" />
                        </Button>
                    </Card.Content>
                </Card> */}
            </Container>
        </div>
    );
}

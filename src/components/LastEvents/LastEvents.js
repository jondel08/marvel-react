import { CardContent } from '@mui/material';
import { Card, Icon, Image, Dimmer, Loader, Button } from 'semantic-ui-react'


export default function LastEvents({ LastEventsFetch }) {
    const { loading, result } = LastEventsFetch || {};

    if (loading || !result)
         return (
            <div></div>
    //         <Dimmer active inverted>
    //            {<Loader inverted>Loading...</Loader>}
    //         </Dimmer>
    );

    const { results } = result.data;

    return results.map((event, index) => (
        <Card key={index} className="last-event">
            <Image 
            src={`${event.thumbnail.path}.${event.thumbnail.extension}`} 
            wrapped ui={false}
            />
            <Card.Content>
                <Card.Header>{event.title}</Card.Header>
                <Card.Meta>
                    <span>
                        <Icon name="book"/>
                        {event.comics.avalaible} Comics
                    </span>
                </Card.Meta>
                <Card.Description>{event.description}</Card.Description>
            </Card.Content>
            <CardContent>
                <Button animated as="a" href={event.urls[0].url} target="_blank" color="black">
                    <Button.Content visible>Ver evento</Button.Content>
                    <Button.Content hidden></Button.Content>
                    <Icon name="arrow right"/>
                </Button>
            </CardContent>
        </Card>
    ))
};

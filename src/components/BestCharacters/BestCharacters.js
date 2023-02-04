import { Header, Button, Grid, Image, Segment } from "semantic-ui-react";
import Container from "../Container";
import * as React from "react";
import marvelImage from "../../img/marvel.png";
import "./BestCharacters.scss";

export default function BestCharacters() {
  return (
      <Container>
        <div className="best-characters">
          <Header as="h1">
            Los mejores personajes de Marvel de los que todos hablan
          </Header>
          <Grid>
            <Grid columns={2} divided="vertically">
              <Grid.Row>
                <Grid.Column>
                  <Header as="h4">Disfruta del mejor contenido</Header>
                  <Button className="button">Ver todos los personajes</Button>
                </Grid.Column>
                <Grid.Column className="image-container">
                  <Image src={marvelImage} alt="Marvel APP" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid>
        </div>
      </Container>
  );
}

import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {View} from './view';
import {Sidebar} from "./sidebar";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import "./styles/home.css"

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subredditEmpty: true,
      subreddits: '',
    }
  }

  componentDidMount() {
    // const subreddits = await getUserSubreddits().then((listings) => {
    //   const [...rest] = listings;
    //   return rest;
    // }).catch((err) => {
    //   console.log(err);
    // });
    // await this.setState({subredditEmpty: false, subreddits: subreddits});

  }

  render() {

    return (
      <div className="main">
        <Container fluid style={{padding: '0 0 0 0'}}>
        <Row noGutters={true}>
          <DndProvider backend={HTML5Backend}>          
            <Col lg={2}>  
              <Sidebar 
                // subredditList={this.state.subreddits} 
                // subredditEmpty={this.state.subredditEmpty}
              />
            </Col>
            <Col lg={10}>
              <View />
            </Col>
          </DndProvider>
        </Row>          
      </Container>
      </div>
    )
  }
}

export default Homepage;
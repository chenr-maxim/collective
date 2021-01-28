import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
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
      <>
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
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at tempor commodo. Augue lacus viverra vitae congue. Dis parturient montes nascetur ridiculus mus. Dui faucibus in ornare quam viverra. Sit amet mattis vulputate enim nulla aliquet porttitor. Diam quis enim lobortis scelerisque fermentum. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Velit dignissim sodales ut eu sem integer vitae. Eu sem integer vitae justo eget magna fermentum iaculis. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Aliquam malesuada bibendum arcu vitae. Mauris nunc congue nisi vitae. Lobortis scelerisque fermentum dui faucibus in. Vitae sapien pellentesque habitant morbi tristique senectus et. Sed vulputate odio ut enim blandit volutpat maecenas.

  Sed velit dignissim sodales ut eu. Ullamcorper velit sed ullamcorper morbi tincidunt. Donec enim diam vulputate ut pharetra sit. Netus et malesuada fames ac. Tortor consequat id porta nibh venenatis cras. Pulvinar elementum integer enim neque volutpat. Lectus proin nibh nisl condimentum id venenatis a condimentum. Neque laoreet suspendisse interdum consectetur libero. Tempus quam pellentesque nec nam. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Scelerisque eu ultrices vitae auctor eu.

  Amet cursus sit amet dictum sit amet. At urna condimentum mattis pellentesque id nibh tortor id. Dui sapien eget mi proin. A pellentesque sit amet porttitor eget dolor morbi non. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Faucibus in ornare quam viverra orci sagittis. Ultrices neque ornare aenean euismod. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Turpis massa sed elementum tempus egestas sed sed risus pretium. Pretium fusce id velit ut tortor. Leo duis ut diam quam nulla porttitor massa id neque. In hac habitasse platea dictumst vestibulum. Sit amet consectetur adipiscing elit ut aliquam purus sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Pellentesque adipiscing commodo elit at. Netus et malesuada fames ac turpis egestas integer.

  Elit sed vulputate mi sit amet. Purus gravida quis blandit turpis cursus in hac habitasse platea. Consequat semper viverra nam libero justo. Aliquet bibendum enim facilisis gravida neque convallis a. Velit egestas dui id ornare arcu odio ut sem. Amet mauris commodo quis imperdiet massa tincidunt nunc. Duis at tellus at urna condimentum mattis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Nisl pretium fusce id velit ut. Egestas purus viverra accumsan in nisl nisi scelerisque. Scelerisque eu ultrices vitae auctor eu. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor.

  Congue eu consequat ac felis donec et. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Tellus elementum sagittis vitae et leo. Volutpat lacus laoreet non curabitur. Quis imperdiet massa tincidunt nunc. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Pharetra massa massa ultricies mi quis hendrerit. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Elementum facilisis leo vel fringilla. Nisl pretium fusce id velit ut tortor pretium viverra. Justo laoreet sit amet cursus sit amet dictum sit. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Et malesuada fames ac turpis. At quis risus sed vulputate odio ut enim blandit.
              </div>
            </Col>
          </DndProvider>
        </Row>
      </Container>
      </>
    )
  }
}

export default Homepage;
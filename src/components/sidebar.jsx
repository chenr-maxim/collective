import React from "react";

const sortArray = (array) => {
  array.sort(function(a, b) {
    var subredditA = (a.display_name);
    var subredditB = (b.display_name);
    return (subredditA < subredditB ) ? -1 : ( subredditA > subredditB ) ? 1 : 0;
  });
}

export const Sidebar = ({subredditEmpty, subredditList}) => {
  if(!subredditEmpty) {
    sortArray(subredditList);
  }

  return (
    <div>
    <h4> side bar </h4>
    {
      !subredditEmpty ? 
        subredditList.map(function(item, i) {
          return <div key={i}>{item.url}</div>
        })
      : null
    }
    </div>
  )
};

// export class Sidebar extends React.Component {
//   constructor(props) {
//     super(props);

//     console.log(props);

//     this.state = {
//       subredditEmpty: false,
//       ...props
//     }
//   }
  
//   render() {
//     console.log(this.state);
    // return (
    //   <>
    //   <h4> side bar </h4>
    //   {
    //     !this.state.subredditEmpty ?
    //     this.state.subredditList.map(function(item, i) {
    //       return <li key={i}>{item.url}</li>
    //     })
    //     : null
    //   }
      
//       </>
//     )
//   }
// }

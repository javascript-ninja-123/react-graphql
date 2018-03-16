import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

 class SongList extends Component {

   renderSongList = () => {
     if(!this.props.data.songs){
       return 'loading'
     }
     else{
       console.log(this.props.data.songs)
       return this.props.data.songs.map((value,index) => {
         return(
           <li key={index}>
             {value.title}
           </li>
         )
       })
     }
   }


  render() {
    return (
      <div>
        <ul>
          {this.renderSongList()}
        </ul>
      </div>
    );
  }
}

const query = gql
`{
  songs{
    title
    }
  }
`


export default graphql(query)(SongList)

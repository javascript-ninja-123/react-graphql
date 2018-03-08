import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import { Icon } from 'semantic-ui-react'
import query from '../../queries/fetchSongs';
import mutation from '../../queries/deleteSong';

class SongList extends Component {


  onClick = id => {
    this.props.mutate({
      variables:{
        id
      },
      refetchQueries:[{ query}]
    })
  }

  renderSongs = () => {
    const {songs} =this.props.data;
    if(songs === undefined || songs.length <=0){
      return <h2>Loading</h2>
    }
    return songs.map(({title,id}) => {
      return(
        <Link to={{
          pathname:`/detail/${id}`
        }}><li key={id}>
          <p>{title}</p>
           <Icon  name='close' onClick={() => this.onClick(id)}/>
        </li></Link>
      )
    })
  }
  render() {
    return (
      <div className='SongList'>
        <Link to='/create'>Add a song</Link>
        <ul>
          {this.renderSongs()}
        </ul>
      </div>
    );
  }
}




export default graphql(mutation)(
graphql(query)(SongList)
);

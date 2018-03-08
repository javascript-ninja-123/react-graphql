import React,{Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {graphql} from 'react-apollo';
import query from '../../queries/fetchSong'

class SongDetail extends Component {

     loadSong = () => {
      const {song} = this.props.data
      if(!song)return 'loading'
      return (
        <div>
          title:{song.title}
        </div>
      )
    }

    render() {
        return (
            <div className="SongDetail">
              <Link to='/'>Back</Link>
              {this.loadSong()}
              <Form>
                <Form.Field>
                  <label>Write a song</label>
                  <input placeholder='Write a song'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </div>
        );
    }
}

export default graphql(query,{
  options:(props) => ({variables:{id:props.match.params.id}})
})(SongDetail);

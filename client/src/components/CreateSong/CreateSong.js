import React,{Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Link,withRouter} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import query from '../../queries/fetchSongs';

 class CreatSong extends Component {

    state = {
      title:''
    }

    onChange = (e,text)=> this.setState({[text]:e.target.value})
    onSubmit = () => {
      this.props.mutate({
        variables:{
          title:this.state.title
        },
        refetchQueries:[{ query}]
      })
      .then(() => this.setState({title:''}))
      .then(() => this.props.history.push('/'))
    }
    render() {
        return (
            <div className="CreatSong">
            <Button onClick={()=> this.props.history.goBack()}>Back</Button>
            <h3>Create a new Song</h3>
            <Form onSubmit={this.onSubmit}>
              <Form.Field>
              <label>Song Title</label>
              <input
              placeholder='Song Title'
              value={this.state.title}
              onChange={e => this.onChange(e,'title')}
               />
              </Form.Field>
              <Button type='submit'>Submit</Button>
              </Form>
            </div>
        );
    }
}

const mutation = gql`
  mutation AddSong($title:String){
    addSong(title:$title){
      title
    }
  }
`;

export default graphql(mutation)(CreatSong);

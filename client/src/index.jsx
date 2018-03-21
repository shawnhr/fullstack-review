import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
   this.getRepos = this.getRepos.bind(this);
  }
  
  getRepos(){
    $.ajax({
      url: '/repos',
      type: 'GET',
      success: (repos) => { 
        console.log('get request success: ', repos),
        this.setState({repos: repos})
      },
      error: (err) => console.log('get request failed: ', err)
    })
  }
  componentDidMount() {
    
    this.getRepos();
  }


  search (term) {
    console.log(`${term} was searched==================`);
    var that = this;
    // TODO
    $.ajax({
      type: "POST",
      url: '/repos',
      data: JSON.stringify({term:term}),
      contentType: 'application/json',
      
      success: function(data){
        that.getRepos();
      },
      error: function(err){
        console.log('error', err)
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
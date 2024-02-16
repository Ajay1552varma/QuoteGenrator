import './App.css';
import React from 'react'
import axios from 'axios';




class App extends React.Component{

  state={
    advice:''
  }

    componentDidMount(){
        this.fetchData();
    }

    fetchData=()=>{
        axios.get('	https://api.adviceslip.com/advice')
        .then((responce)=>{
            //console.log(responce.data.slip.advice);
            // we can destructre like this also
            const {advice}=responce.data.slip;
            console.log(advice);
            this.setState({advice});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return(
            <div className='app'>
                <div className='card'>
                  <h1 className='heading'>{this.state.advice}</h1>
                  <button className='button' onClick={this.fetchData}>
                    <span>Motivate ME!</span>
                  </button>
                </div>
            </div>
        )
    }
}

export default App;

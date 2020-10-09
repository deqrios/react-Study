import React from "react";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    //count : 0
    isLoading : true,
    movies : []
  };

  /*add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  componentDidMount() { //  컴포넌트와 페이지가 마운트 됐을 때 (렌더링이 먼저 됨.)
    console.log("Component Rendered!");
  }

  componentDidUpdate() {  //  업데이트시 렌더링 되고 컴포넌트가 업데이트 된걸 볼 수있음.
    console.log("Just Updated.");
  }

  componentWillUnmount() {    //  컴포넌트가 종료될 때 실행.
    console.log("Good Bye...");
  }
  */

  /*getMovies = async ()=> {
    const movies = await fetch("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  }*/

  componentDidMount() {
    //this.getMovies();

    const movies = fetch("https://yts-proxy.now.sh/list_movies.json")
    .then(response => response.json())  //    위에 .json을 grab함. 
    .then(data => this.setState({movies, isLoading : false}))
  }

  

  render() {
    /*console.log("Rendering");
    return (
      <div>
      <h1>I'm a Class Component.{this.state.count}</h1>
      <button onClick={this.add}>Plus</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
    */
   const {isLoading} = this.state;
   return(
   <div>{isLoading ? "Loading..." : "I'm ready!" }</div>
   );
  }
}

export default App;
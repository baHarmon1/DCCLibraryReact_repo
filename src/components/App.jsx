import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "This is the first book title", author: "This is the first author"},
            {title: "This is the second book", author: 'the second author'},
            {title: "This is the third book", author: 'the third author'}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar/>
                <div className="row">
                    <div className="col-md-4">
                        {/* {Button here to move to the previous book} */}
                    </div>
                    <div className="col-md-4">
                        {/* {display book with cover} */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/* {Button here to move to the next book} */}
                    </div>                
                </div>
            </div>
        )
    }
}

export default App;
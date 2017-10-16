/**
 * Created by shahab on 7/21/17.
 */


// const sum = require('./sum');
// import sum from './sum';
// import './image_viewer';


// const total = sum(10,5);
// console.log(total);
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello';

class  Shahab extends Component {
    render(){
        return (
          <div>
              hello khodka boilderplate
              <Hello />
          </div>
        );
    }

}


ReactDOM.render(<Shahab />, document.querySelector('.container'));


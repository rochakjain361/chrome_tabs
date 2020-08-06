import React, {Component} from 'react';
import './App.css';
/*These components can be added from other js files too.*/
const Component1 = (props) => <div>
  My Component 1<br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus erat id condimentum scelerisque. Sed imperdiet facilisis erat et semper. Sed posuere ipsum at lacus hendrerit porttitor. Integer placerat lectus non ultricies luctus. Duis sed tristique magna. Sed id neque nisi. Ut pulvinar sapien a orci finibus vehicula. Sed fringilla posuere sodales. Aenean posuere leo est, maximus placerat est viverra ut. Maecenas a mauris ac risus tincidunt vestibulum eu lacinia urna. Donec at tempor lacus.

Nunc id imperdiet ipsum. Praesent convallis ligula vel orci luctus vestibulum. Aliquam erat volutpat. Sed at sagittis quam. Sed gravida tincidunt laoreet. Vivamus sed sem viverra, faucibus metus ac, egestas nibh. In nulla justo, tristique et hendrerit in, vestibulum in arcu. Aenean condimentum ligula ut elit placerat consectetur. Cras finibus id arcu a placerat. Quisque augue lectus, convallis ac ultricies nec, mattis non urna. Pellentesque hendrerit purus eget convallis volutpat. In vitae imperdiet quam. Donec interdum dui in odio rutrum interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed eget lorem sit amet libero dapibus auctor ac ut nulla. Pellentesque eget pretium metus. Nulla neque lacus, vehicula sed pretium ac, tincidunt id mauris. Proin ultrices sagittis urna, ut aliquam purus fringilla ac. Vivamus quis purus dapibus, commodo dui ac, dapibus orci. Sed sed magna dictum, placerat ligula at, porttitor lorem. Donec eros lectus, feugiat eu mi quis, finibus placerat ex. Curabitur vitae sem ut nisi egestas scelerisque sed eu nibh. Aenean at dolor et elit porttitor ornare. Nulla luctus ante eget ligula elementum, in venenatis nisl fermentum. Ut interdum lobortis risus, at porta augue tempor porta. Donec ultrices nunc nulla, eu dictum tellus rhoncus sit amet. Sed tristique finibus dui ut auctor. Mauris dignissim risus nunc, sed tincidunt est tincidunt sed. Praesent vehicula massa id pharetra suscipit.

Vestibulum venenatis purus non nunc auctor, sed gravida mauris molestie. Praesent venenatis in massa at tempus. Nunc a maximus dolor, in rhoncus nulla. Suspendisse feugiat mi eget mi eleifend eleifend nec sed augue. Mauris elementum ipsum vel lectus bibendum sagittis. Duis maximus, diam id imperdiet euismod, diam nulla faucibus felis, egestas tristique mauris urna pharetra lectus. Mauris placerat leo dui, id blandit justo feugiat consectetur. Phasellus lorem est, porta at accumsan in, dignissim bibendum dolor. Etiam posuere dapibus aliquam. Sed fermentum nulla neque, a pharetra magna ultricies ut. Morbi justo neque, tincidunt vitae risus ac, aliquam fermentum neque. Cras aliquet felis a leo fermentum, ut molestie leo sodales. Nullam justo urna, finibus in turpis sed, finibus iaculis metus. Proin consequat ac nunc vitae faucibus. Donec id arcu eget elit commodo ultricies nec eget lacus.

Aliquam vulputate faucibus blandit. Aliquam at consequat mauris. Praesent sodales odio nec velit efficitur hendrerit ac a nunc. In et mi augue. Mauris pellentesque elit sed auctor pulvinar. Pellentesque vel facilisis turpis, ac rutrum arcu. Maecenas id magna ut felis ultricies hendrerit.
  </div>
const Component2 = (props) => <div>My Component 2<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus erat id condimentum scelerisque. Sed imperdiet facilisis erat et semper. Sed posuere ipsum at lacus hendrerit porttitor. Integer placerat lectus non ultricies luctus. Duis sed tristique magna. Sed id neque nisi. Ut pulvinar sapien a orci finibus vehicula. Sed fringilla posuere sodales. Aenean posuere leo est, maximus placerat est viverra ut. Maecenas a mauris ac risus tincidunt vestibulum eu lacinia urna. Donec at tempor lacus.

Nunc id imperdiet ipsum. Praesent convallis ligula vel orci luctus vestibulum. Aliquam erat volutpat. Sed at sagittis quam. Sed gravida tincidunt laoreet. Vivamus sed sem viverra, faucibus metus ac, egestas nibh. In nulla justo, tristique et hendrerit in, vestibulum in arcu. Aenean condimentum ligula ut elit placerat consectetur. Cras finibus id arcu a placerat. Quisque augue lectus, convallis ac ultricies nec, mattis non urna. Pellentesque hendrerit purus eget convallis volutpat. In vitae imperdiet quam. Donec interdum dui in odio rutrum interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed eget lorem sit amet libero dapibus auctor ac ut nulla. Pellentesque eget pretium metus. Nulla neque lacus, vehicula sed pretium ac, tincidunt id mauris. Proin ultrices sagittis urna, ut aliquam purus fringilla ac. Vivamus quis purus dapibus, commodo dui ac, dapibus orci. Sed sed magna dictum, placerat ligula at, porttitor lorem. Donec eros lectus, feugiat eu mi quis, finibus placerat ex. Curabitur vitae sem ut nisi egestas scelerisque sed eu nibh. Aenean at dolor et elit porttitor ornare. Nulla luctus ante eget ligula elementum, in venenatis nisl fermentum. Ut interdum lobortis risus, at porta augue tempor porta. Donec ultrices nunc nulla, eu dictum tellus rhoncus sit amet. Sed tristique finibus dui ut auctor. Mauris dignissim risus nunc, sed tincidunt est tincidunt sed. Praesent vehicula massa id pharetra suscipit.

Vestibulum venenatis purus non nunc auctor, sed gravida mauris molestie. Praesent venenatis in massa at tempus. Nunc a maximus dolor, in rhoncus nulla. Suspendisse feugiat mi eget mi eleifend eleifend nec sed augue. Mauris elementum ipsum vel lectus bibendum sagittis. Duis maximus, diam id imperdiet euismod, diam nulla faucibus felis, egestas tristique mauris urna pharetra lectus. Mauris placerat leo dui, id blandit justo feugiat consectetur. Phasellus lorem est, porta at accumsan in, dignissim bibendum dolor. Etiam posuere dapibus aliquam. Sed fermentum nulla neque, a pharetra magna ultricies ut. Morbi justo neque, tincidunt vitae risus ac, aliquam fermentum neque. Cras aliquet felis a leo fermentum, ut molestie leo sodales. Nullam justo urna, finibus in turpis sed, finibus iaculis metus. Proin consequat ac nunc vitae faucibus. Donec id arcu eget elit commodo ultricies nec eget lacus.

Aliquam vulputate faucibus blandit. Aliquam at consequat mauris. Praesent sodales odio nec velit efficitur hendrerit ac a nunc. In et mi augue. Mauris pellentesque elit sed auctor pulvinar. Pellentesque vel facilisis turpis, ac rutrum arcu. Maecenas id magna ut felis ultricies hendrerit.</div>
const Component3 = (props) => <div>My Component 3 <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus erat id condimentum scelerisque. Sed imperdiet facilisis erat et semper. Sed posuere ipsum at lacus hendrerit porttitor. Integer placerat lectus non ultricies luctus. Duis sed tristique magna. Sed id neque nisi. Ut pulvinar sapien a orci finibus vehicula. Sed fringilla posuere sodales. Aenean posuere leo est, maximus placerat est viverra ut. Maecenas a mauris ac risus tincidunt vestibulum eu lacinia urna. Donec at tempor lacus.

Nunc id imperdiet ipsum. Praesent convallis ligula vel orci luctus vestibulum. Aliquam erat volutpat. Sed at sagittis quam. Sed gravida tincidunt laoreet. Vivamus sed sem viverra, faucibus metus ac, egestas nibh. In nulla justo, tristique et hendrerit in, vestibulum in arcu. Aenean condimentum ligula ut elit placerat consectetur. Cras finibus id arcu a placerat. Quisque augue lectus, convallis ac ultricies nec, mattis non urna. Pellentesque hendrerit purus eget convallis volutpat. In vitae imperdiet quam. Donec interdum dui in odio rutrum interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed eget lorem sit amet libero dapibus auctor ac ut nulla. Pellentesque eget pretium metus. Nulla neque lacus, vehicula sed pretium ac, tincidunt id mauris. Proin ultrices sagittis urna, ut aliquam purus fringilla ac. Vivamus quis purus dapibus, commodo dui ac, dapibus orci. Sed sed magna dictum, placerat ligula at, porttitor lorem. Donec eros lectus, feugiat eu mi quis, finibus placerat ex. Curabitur vitae sem ut nisi egestas scelerisque sed eu nibh. Aenean at dolor et elit porttitor ornare. Nulla luctus ante eget ligula elementum, in venenatis nisl fermentum. Ut interdum lobortis risus, at porta augue tempor porta. Donec ultrices nunc nulla, eu dictum tellus rhoncus sit amet. Sed tristique finibus dui ut auctor. Mauris dignissim risus nunc, sed tincidunt est tincidunt sed. Praesent vehicula massa id pharetra suscipit.

Vestibulum venenatis purus non nunc auctor, sed gravida mauris molestie. Praesent venenatis in massa at tempus. Nunc a maximus dolor, in rhoncus nulla. Suspendisse feugiat mi eget mi eleifend eleifend nec sed augue. Mauris elementum ipsum vel lectus bibendum sagittis. Duis maximus, diam id imperdiet euismod, diam nulla faucibus felis, egestas tristique mauris urna pharetra lectus. Mauris placerat leo dui, id blandit justo feugiat consectetur. Phasellus lorem est, porta at accumsan in, dignissim bibendum dolor. Etiam posuere dapibus aliquam. Sed fermentum nulla neque, a pharetra magna ultricies ut. Morbi justo neque, tincidunt vitae risus ac, aliquam fermentum neque. Cras aliquet felis a leo fermentum, ut molestie leo sodales. Nullam justo urna, finibus in turpis sed, finibus iaculis metus. Proin consequat ac nunc vitae faucibus. Donec id arcu eget elit commodo ultricies nec eget lacus.

Aliquam vulputate faucibus blandit. Aliquam at consequat mauris. Praesent sodales odio nec velit efficitur hendrerit ac a nunc. In et mi augue. Mauris pellentesque elit sed auctor pulvinar. Pellentesque vel facilisis turpis, ac rutrum arcu. Maecenas id magna ut felis ultricies hendrerit.</div>
const Component4 = (props) => <div>My Component 4<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus erat id condimentum scelerisque. Sed imperdiet facilisis erat et semper. Sed posuere ipsum at lacus hendrerit porttitor. Integer placerat lectus non ultricies luctus. Duis sed tristique magna. Sed id neque nisi. Ut pulvinar sapien a orci finibus vehicula. Sed fringilla posuere sodales. Aenean posuere leo est, maximus placerat est viverra ut. Maecenas a mauris ac risus tincidunt vestibulum eu lacinia urna. Donec at tempor lacus.

Nunc id imperdiet ipsum. Praesent convallis ligula vel orci luctus vestibulum. Aliquam erat volutpat. Sed at sagittis quam. Sed gravida tincidunt laoreet. Vivamus sed sem viverra, faucibus metus ac, egestas nibh. In nulla justo, tristique et hendrerit in, vestibulum in arcu. Aenean condimentum ligula ut elit placerat consectetur. Cras finibus id arcu a placerat. Quisque augue lectus, convallis ac ultricies nec, mattis non urna. Pellentesque hendrerit purus eget convallis volutpat. In vitae imperdiet quam. Donec interdum dui in odio rutrum interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed eget lorem sit amet libero dapibus auctor ac ut nulla. Pellentesque eget pretium metus. Nulla neque lacus, vehicula sed pretium ac, tincidunt id mauris. Proin ultrices sagittis urna, ut aliquam purus fringilla ac. Vivamus quis purus dapibus, commodo dui ac, dapibus orci. Sed sed magna dictum, placerat ligula at, porttitor lorem. Donec eros lectus, feugiat eu mi quis, finibus placerat ex. Curabitur vitae sem ut nisi egestas scelerisque sed eu nibh. Aenean at dolor et elit porttitor ornare. Nulla luctus ante eget ligula elementum, in venenatis nisl fermentum. Ut interdum lobortis risus, at porta augue tempor porta. Donec ultrices nunc nulla, eu dictum tellus rhoncus sit amet. Sed tristique finibus dui ut auctor. Mauris dignissim risus nunc, sed tincidunt est tincidunt sed. Praesent vehicula massa id pharetra suscipit.

Vestibulum venenatis purus non nunc auctor, sed gravida mauris molestie. Praesent venenatis in massa at tempus. Nunc a maximus dolor, in rhoncus nulla. Suspendisse feugiat mi eget mi eleifend eleifend nec sed augue. Mauris elementum ipsum vel lectus bibendum sagittis. Duis maximus, diam id imperdiet euismod, diam nulla faucibus felis, egestas tristique mauris urna pharetra lectus. Mauris placerat leo dui, id blandit justo feugiat consectetur. Phasellus lorem est, porta at accumsan in, dignissim bibendum dolor. Etiam posuere dapibus aliquam. Sed fermentum nulla neque, a pharetra magna ultricies ut. Morbi justo neque, tincidunt vitae risus ac, aliquam fermentum neque. Cras aliquet felis a leo fermentum, ut molestie leo sodales. Nullam justo urna, finibus in turpis sed, finibus iaculis metus. Proin consequat ac nunc vitae faucibus. Donec id arcu eget elit commodo ultricies nec eget lacus.

Aliquam vulputate faucibus blandit. Aliquam at consequat mauris. Praesent sodales odio nec velit efficitur hendrerit ac a nunc. In et mi augue. Mauris pellentesque elit sed auctor pulvinar. Pellentesque vel facilisis turpis, ac rutrum arcu. Maecenas id magna ut felis ultricies hendrerit.</div>
const Component5 = (props) => <div>My Component 5 <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus erat id condimentum scelerisque. Sed imperdiet facilisis erat et semper. Sed posuere ipsum at lacus hendrerit porttitor. Integer placerat lectus non ultricies luctus. Duis sed tristique magna. Sed id neque nisi. Ut pulvinar sapien a orci finibus vehicula. Sed fringilla posuere sodales. Aenean posuere leo est, maximus placerat est viverra ut. Maecenas a mauris ac risus tincidunt vestibulum eu lacinia urna. Donec at tempor lacus.

Nunc id imperdiet ipsum. Praesent convallis ligula vel orci luctus vestibulum. Aliquam erat volutpat. Sed at sagittis quam. Sed gravida tincidunt laoreet. Vivamus sed sem viverra, faucibus metus ac, egestas nibh. In nulla justo, tristique et hendrerit in, vestibulum in arcu. Aenean condimentum ligula ut elit placerat consectetur. Cras finibus id arcu a placerat. Quisque augue lectus, convallis ac ultricies nec, mattis non urna. Pellentesque hendrerit purus eget convallis volutpat. In vitae imperdiet quam. Donec interdum dui in odio rutrum interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed eget lorem sit amet libero dapibus auctor ac ut nulla. Pellentesque eget pretium metus. Nulla neque lacus, vehicula sed pretium ac, tincidunt id mauris. Proin ultrices sagittis urna, ut aliquam purus fringilla ac. Vivamus quis purus dapibus, commodo dui ac, dapibus orci. Sed sed magna dictum, placerat ligula at, porttitor lorem. Donec eros lectus, feugiat eu mi quis, finibus placerat ex. Curabitur vitae sem ut nisi egestas scelerisque sed eu nibh. Aenean at dolor et elit porttitor ornare. Nulla luctus ante eget ligula elementum, in venenatis nisl fermentum. Ut interdum lobortis risus, at porta augue tempor porta. Donec ultrices nunc nulla, eu dictum tellus rhoncus sit amet. Sed tristique finibus dui ut auctor. Mauris dignissim risus nunc, sed tincidunt est tincidunt sed. Praesent vehicula massa id pharetra suscipit.

Vestibulum venenatis purus non nunc auctor, sed gravida mauris molestie. Praesent venenatis in massa at tempus. Nunc a maximus dolor, in rhoncus nulla. Suspendisse feugiat mi eget mi eleifend eleifend nec sed augue. Mauris elementum ipsum vel lectus bibendum sagittis. Duis maximus, diam id imperdiet euismod, diam nulla faucibus felis, egestas tristique mauris urna pharetra lectus. Mauris placerat leo dui, id blandit justo feugiat consectetur. Phasellus lorem est, porta at accumsan in, dignissim bibendum dolor. Etiam posuere dapibus aliquam. Sed fermentum nulla neque, a pharetra magna ultricies ut. Morbi justo neque, tincidunt vitae risus ac, aliquam fermentum neque. Cras aliquet felis a leo fermentum, ut molestie leo sodales. Nullam justo urna, finibus in turpis sed, finibus iaculis metus. Proin consequat ac nunc vitae faucibus. Donec id arcu eget elit commodo ultricies nec eget lacus.

Aliquam vulputate faucibus blandit. Aliquam at consequat mauris. Praesent sodales odio nec velit efficitur hendrerit ac a nunc. In et mi augue. Mauris pellentesque elit sed auctor pulvinar. Pellentesque vel facilisis turpis, ac rutrum arcu. Maecenas id magna ut felis ultricies hendrerit.</div>
const Component6 = (props) => <div>My Component 6</div>
const Component7 = (props) => <div>My Component 7</div>
const Component8 = (props) => <div>My Component 8</div>
const Component9 = (props) => <div>My Component 9</div>
const Component10 = (props) => <div>My Component 10</div>
const Component11 = (props) => <div>My Component 11</div>
const Component12 = (props) => <div>My Component 12</div>
const Component13 = (props) => <div>My Component 13</div>
const Component14 = (props) => <div>My Component 14</div>
const Component15 = (props) => <div>My Component 15</div>
const Component16 = (props) => <div>My Component 16</div>
const Component17 = (props) => <div>My Component 17</div>


const components = {
  1: <Component1/>,
  2: <Component2/>,
  3: <Component3/>,
  4: <Component4/>,
  5: <Component5/>,
  6: <Component6/>,
  7: <Component7/>,
  8: <Component8/>,
  9: <Component9/>,
  10: <Component10/>,
  11: <Component11/>,
  12: <Component12/>,
  13: <Component13/>,
  14: <Component14/>,
  15: <Component15/>,
  16: <Component16/>,
  17: <Component17/>,
}

const component_heading = {
  1: "Event 1",
  2: "Event 2",
  3: "Event 3",
  4: "Event 4",
  5: "Event 5",
  6: "Event 6",
  7: "Event 7",
  8: "Event 8",
  9: "Event 9",
  10: "Event 10",
  11: "Event 11",
  12: "Event 12",
  13: "Event 13",
  14: "Event 14",
  15: "Event 15",
  16: "Event 16",
  17: "Event 17"
}

class App extends Component{

  constructor(props){
    super(props);
    this.state = { 
      activeItems: [],
      activeTab: 0,  
    }
  }

  deleteItemClick(itemId){
    let array = this.state.activeItems
    const index = array.indexOf(itemId)
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({
      activeItems: array
    })    
    if(itemId == this.state.activeTab){
      if(this.state.activeItems.length == 0){
        this.setState({
          activeTab: 0
        })
      }
      else{
        this.setState({
          activeTab: this.state.activeItems[0]
        })
      }
    }
  }

  handleItemClick(itemId){
    if(this.state.activeItems.includes(itemId)){
      this.setState({
        activeTab: itemId
      })
    }
    else{
      this.setState({
        activeTab: itemId,
        activeItems: [...this.state.activeItems, itemId]
      })
    }
    console.log(this.state.activeItems)
  }

  render(){
    var paddingRight = (window.innerWidth - (300 + 110.5*this.state.activeItems.length))/this.state.activeItems.length
    console.log(paddingRight)
    var pRight;
    var maxWidth;
    if(paddingRight < 0 && paddingRight > -40){
      pRight = 40 + paddingRight
    }
    else if(paddingRight < -40 && paddingRight > -50){
      maxWidth = paddingRight
      pRight = 0
    }
    else{
      pRight = 40
      maxWidth = 120
    }
    console.log(window.innerWidth)
    return (
      <div className="App">
        <div class="header">
          <div class="leftbox">
          Event Viewer
          </div>
          <div class="rightbox">
          <ul>
          {this.state.activeItems.map( item => {
            if(item == this.state.activeTab){
              return(<li class="active tab" style={{maxWidth: maxWidth}}>
              <a>
              <div class="leftTab" style={{paddingRight: pRight}}>
                {component_heading[item]}  
                </div>
              <div class="rightTab" onClick={() => this.deleteItemClick(item)}>
              &#10006;
              </div>
              </a>
            </li>)
            }
            else{
              return(<li class="tab" style={{maxWidth: maxWidth}}>
              <a>
                <div class="leftTab" style={{paddingRight: pRight}} onClick={() => this.handleItemClick(item)}>
                {component_heading[item]}  
                </div>
                <div class="rightTab" onClick={() => this.deleteItemClick(item)}>
            &#10006;
            </div>
              </a>
            </li>
            )
            }
            })}
          </ul>
          </div>
        </div>
        <div class="sidenav">
        <li onClick={() => this.handleItemClick(1)}>Item 1</li>
        <li onClick={() => this.handleItemClick(2)}>Item 2</li>
        <li onClick={() => this.handleItemClick(3)}>Item 3</li>
        <li onClick={() => this.handleItemClick(4)}>Item 4</li>
        <li onClick={() => this.handleItemClick(5)}>Item 5</li>
        <li onClick={() => this.handleItemClick(6)}>Item 6</li>
        <li onClick={() => this.handleItemClick(7)}>Item 7</li>
        <li onClick={() => this.handleItemClick(8)}>Item 8</li>
        <li onClick={() => this.handleItemClick(9)}>Item 9</li>
        <li onClick={() => this.handleItemClick(10)}>Item 10</li>
        <li onClick={() => this.handleItemClick(11)}>Item 11</li>
        <li onClick={() => this.handleItemClick(12)}>Item 12</li>
        <li onClick={() => this.handleItemClick(13)}>Item 13</li>
        <li onClick={() => this.handleItemClick(14)}>Item 14</li>
        <li onClick={() => this.handleItemClick(15)}>Item 15</li>
        <li onClick={() => this.handleItemClick(16)}>Item 16</li>
        <li onClick={() => this.handleItemClick(17)}>Item 17</li>
        <li onClick={() => this.handleItemClick(1)}>Item 1</li>
        <li onClick={() => this.handleItemClick(2)}>Item 2</li>
        <li onClick={() => this.handleItemClick(3)}>Item 3</li>
        <li onClick={() => this.handleItemClick(4)}>Item 4</li>
        <li onClick={() => this.handleItemClick(5)}>Item 5</li>
        <li onClick={() => this.handleItemClick(6)}>Item 6</li>
        <li onClick={() => this.handleItemClick(7)}>Item 7</li>
        <li onClick={() => this.handleItemClick(8)}>Item 8</li>
        <li onClick={() => this.handleItemClick(9)}>Item 9</li>
        <li onClick={() => this.handleItemClick(10)}>Item 10</li>
        <li onClick={() => this.handleItemClick(11)}>Item 11</li>
        <li onClick={() => this.handleItemClick(12)}>Item 12</li>
        <li onClick={() => this.handleItemClick(13)}>Item 13</li>
        <li onClick={() => this.handleItemClick(14)}>Item 14</li>
        <li onClick={() => this.handleItemClick(15)}>Item 15</li>
        <li onClick={() => this.handleItemClick(16)}>Item 16</li>
        <li onClick={() => this.handleItemClick(17)}>Item 17</li>
  
  </div>
  
  <div class="main">
    {components[this.state.activeTab]}
    </div>
      </div>
    );
  }
}


export default App;

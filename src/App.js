import React, { Component, lazy } from 'react';
import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'

// code splitting (using async component)
// import AsyncComponent from './components/AsyncComponent';

// code splitting (Route-based code splitting)
const Page2 = lazy(() => import('./components/Page2'));
const Page3 = lazy(() => import('./components/Page3'));

class App extends Component {

  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = async (route) => {
    // No code splitting
    // this.setState({route: route})

    // With code splitting (without the component)
    // import works thanks to webpack
    // Use Page.default because i do export default into them
    // if(route === 'page1')
    //   this.setState({ route: route })
    // if(route === 'page2'){
    //   const Page2 = await import('./components/Page2');
    //   this.setState({ route: route, component: Page2.default });
    // }
    // if(route === 'page3'){
    //   const Page3 = await import('./components/Page3');
    //   this.setState({ route: route, component: Page3.default })
    // }

    // Code splitting (with the component)
    this.setState({route: route})
  }

  render() {
    const {route} = this.state;
    // if(route === 'page1') 
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // if(route === 'page2') 
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // if(route === 'page3') 
    //   return <Page3 onRouteChange={this.onRouteChange} />

    // Code splitting (without the component)
    // if(route === 'page1') 
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // else
    //   return <this.state.component onRouteChange={this.onRouteChange} />

    // Code splitting (with the component)
    // if(route === 'page1') 
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // if(route === 'page2'){
    //   const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // }
    // if(route === 'page3'){
    //   const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }

    // code splitting (Route-based code splitting)
    if(route === 'page1') 
      return <Page1 onRouteChange={this.onRouteChange} />
    if(route === 'page2') 
      return <Page2 onRouteChange={this.onRouteChange} />
    if(route === 'page3') 
      return <Page3 onRouteChange={this.onRouteChange} />
  }
}

export default App;

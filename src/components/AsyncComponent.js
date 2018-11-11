import React, {Component} from 'react';

// importComponent: page2 or page3
export default function asyncComponent(importComponent){
	class AsyncComponent extends Component {
		
		constructor(props){
			super();
			this.state = {
				component: null
			}
		}

		async componentDidMount(){
			const component = await importComponent();
			// Use component.default because i do export default into them
			this.setState({
				component: component.default
			})
		}

		render() {
			const Component = this.state.component;
			return Component ? <Component {...this.props} /> : null;
		}
	}

	return AsyncComponent;
}
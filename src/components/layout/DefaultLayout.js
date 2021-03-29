import React from 'react';
import Header from './Header';
import Footer from './Footer';


const DefaultLayout = ({ children } = {}) => {
	// console.log(children);

	// maybe MetaDecorator here
	return (
		<>
			<Header>header </Header>
				{children}
				<div>SIDEBAR</div>
			<Footer> footer</Footer>
		</>
	);
};

export default DefaultLayout;

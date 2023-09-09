import React, { useState } from 'react';

function Example() {
const [click,SetClick] = React.useState('World');

SetClick('Astha');
return (
	<h1>Hello {click}</h1>
);
}

export default Example;

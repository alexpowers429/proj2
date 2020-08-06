import React, { Component } from 'react';
class Refine extends Component {
	render() {
		return (
			<div className='refine'>
				<h1>New Contact</h1>
			
					<label htmlFor='name'>Name:</label>
					<br />
					<input type='text' id='name' />
					<br />
					<label htmlFor='email'>Email:</label>
					<br />
					<input type='text' id='email' />
					<br />
					<label htmlFor='image'>Image:</label>
					<br />
					<input type='text' id='image' />
					<br />
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default NewContact;

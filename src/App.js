import { FlipCard, MyAccordion } from "component-library-react-12";

function App() {
	return (
		<div className='App'>
			<FlipCard />
			<MyAccordion
				label='Test name'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores repudiandae quas.'
        color="red"
			/>
		</div>
	);
}

export default App;

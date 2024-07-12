import { h } from 'preact';
import style from './style.css';
import { count } from '../../index';

function Home() {
	return (
		<div class={style.home}>
			<h1>Welcome to Tecto Stress</h1>
			<section>
				<Resource
					title="Import data"
					description="Import data to perform the stress inversion"
					link="/importData"
				/>
				<Resource
					title="Visualize data"
					description=""
					link="/"
				/>
				<Resource
					title="Automatic stress inversion"
					description="Perform automatic stress inversion"
					link="/autoStressInv"
				/>
				<Resource
					title="Interactive stress inversion"
					description="gnagngnagna"
					link="/"
				/>
				<Resource
					title="Visualize the results"
					description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
					link="/"
				/>
				<Resource
					title="Export the results"
					description="To learn more about Preact-CLI, read through the ReadMe & Wiki"
					link="/"
				/>
				
			</section>
		</div>
	);
};

interface ResourceProps {
	title: string;
	description: string;
	link: string;
}

function Resource(props: ResourceProps) {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;

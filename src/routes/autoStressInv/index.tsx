import { h, createRef, RefObject, Component } from 'preact'
import style from './style.css'
import { allDataFiles } from '../../index';

export default class AutoStressInv extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
	}

	private run() {
		allDataFiles.forEach( file => {
			console.log(file.name+":")
			file.arrayBuffer().then(arrayBuffer => {
				let buffer = new TextDecoder().decode(arrayBuffer)
				console.log(buffer)
			})
		})
	}

	render(props) {
		return (
			<div>
				<h1>Automatic stress inversion using {allDataFiles.length} data files</h1>
				<p>
					<button className="btn btn-warning" onClick={() => {this.run()}}>Run</button> 
				</p>

			</div>
		);
	}
}

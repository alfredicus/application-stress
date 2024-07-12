import { h, createRef, RefObject, Component } from 'preact'
import style from './style.css'
import { allDataFiles } from '../../index';

export default class ImportData extends Component {

	input: RefObject<any> = undefined
	filenames: RefObject<any> = undefined

	constructor() {
		super()
		this.input = createRef()
		this.filenames = createRef()
	}
	
	componentDidMount() {
		for (const file of allDataFiles) {
			this.filenames.current.value += file.name + "\n"
		}
	}

	render(props) {
		return (
			<div>
				<h1>Import data</h1>

				<div class={style.gridContainer}>

					<div class={style.item1}>
						<input id="upload" multiple type="file" style="visibility: hidden" ref={this.input} onChange={() => {
							for (const file of this.input.current.files) {
								allDataFiles.push(file)
								this.filenames.current.value += file.name + "\n"
							}
						}} />
						<p>
							<button className="btn btn-warning" onClick={() => { 
								this.input.current.click()
							}}>Upload...</button>
						</p>
					</div>

					<div class={style.item2}>
					</div>
					<div class={style.item3}>
						<textarea rows={25} cols={33} disabled={true} ref={this.filenames} />
					</div>
					<div class={style.item4}>
						<textarea rows={25} cols={33} disabled={true} />
					</div>
					{/* <div class={style.item5}>Footer</div> */}
				</div>

				{/* <table>
					<tr>
						<th>Filename</th>
						<th>Format</th>
						<th>Size</th>
					</tr>
					<tr>
						<td>Alfreds Futterkiste</td>
						<td>Maria Anders</td>
						<td>Germany</td>
					</tr>
					<tr>
						<td>Centro comercial Moctezuma</td>
						<td>Francisco Chang</td>
						<td>Mexico</td>
					</tr>
				</table> */}

			</div>
		);
	}
}

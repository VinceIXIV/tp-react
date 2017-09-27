import React from 'react';
import '../styles/index.scss';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

export default class TableComp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			matiere: '',
			note: '',
			notes : [{matiere: "maths", note: "13"},
				{matiere:"francais",note: "15"},
				{matiere:"physique",note: "6"},
				{matiere:"sport",note: "20"}]
		}

		this._handleMatiere = this.handleMatiere.bind(this);
		this._handleNote = this.handleNote.bind(this);
		this._handleSubmit = this.handleSubmit.bind(this);
	}

	handleMatiere(event) {
		this.setState({ matiere: event.target.value });
	}
	handleNote(event) {
		this.setState({ note: event.target.value });
	}
	handleSubmit(){

		this.state.notes.push( {matiere: this.state.matiere, note:this.state.note});
		this.setState(null);
		this.setState({matiere: '',note:''});
	}

	render() {
		bool = false;
		
		const list = this.state.notes.map(n => <TableRow displayRowCheckbox={bool} >
			<TableRowColumn>{n.matiere}</TableRowColumn>
			<TableRowColumn>{n.note}</TableRowColumn>
		</TableRow>);
		return (
			<div>
					<Table displaySelectAll={bool}>
						<TableHeader>
							<TableHeaderColumn>Matières</TableHeaderColumn>
							<TableHeaderColumn>Notes</TableHeaderColumn>
						</TableHeader>
						<TableBody>
							{list}
							<TableRow>
								<TableRowColumn> <TextField id="a" onChange={this._handleMatiere} value = {this.state.matiere} /></TableRowColumn>
								<TableRowColumn> <TextField id="b" onChange = {this._handleNote} value = {this.state.note}  /></TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
					<FloatingActionButton onClick={this._handleSubmit}>
						<ContentAdd />
					</FloatingActionButton>
			</div>
		)
	}
}

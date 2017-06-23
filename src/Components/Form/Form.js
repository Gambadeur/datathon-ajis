import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const handicapType = [
  <MenuItem key={1} value={1} primaryText="auditifs" />,
  <MenuItem key={2} value={2} primaryText="moteur" />,
  <MenuItem key={3} value={3} primaryText="handicap psychique" />,
  <MenuItem key={4} value={4} primaryText="handicap mental" />,
  <MenuItem key={5} value={5} primaryText="maladie invalidante" />,
  <MenuItem key={6} value={6} primaryText="maladie multi-handicap" />,
  <MenuItem key={7} value={7} primaryText="maladie visuels" />,
  <MenuItem key={8} value={8} primaryText="handicap mentales" />,
];

const categorieSp = [
  <MenuItem key={1} value={1} primaryText="Agriculteurs et exploitants" />,
  <MenuItem key={2} value={2} primaryText="artisans, commerçants et chefs d’entreprise" />,
  <MenuItem key={3} value={3} primaryText="cadres et professions intellectuelles supérieures" />,
  <MenuItem key={4} value={4} primaryText="professions intermédiaires" />,
  <MenuItem key={5} value={5} primaryText="employés" />,
  <MenuItem key={6} value={6} primaryText="ouvriers" />,
];

const genre = [
  <MenuItem key={1} value={1} primaryText="Homme" />,
  <MenuItem key={2} value={2} primaryText="Femme" />,
];

const stylePaper = {
  height: 100,
  width: 900,
  margin: 20,
  display: 'flex',
  justifyContent: "space-around"
};


/**
 * `SelectField` supports a floating label with the `floatingLabelText` property.
 * This can be fixed in place with the `floatingLabelFixed` property,
 * and can be customised with the `floatingLabelText` property.
 */
export default class Form extends Component {
  state = {
    value: null,
    value2: null,
    value3: null
  };

  handleChange = (event, index, value) => this.setState({
    value
  });

  handleChange2 = (event, index, value2) => this.setState({
    value2
  });

  handleChange3 = (event, index, value3) => this.setState({
    value3
  });

  render() {
    return (
      <Paper style={stylePaper} zDepth={3} >
        <SelectField
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Type d'handicap"
        >
          {handicapType}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value2}
          onChange={this.handleChange2}
          floatingLabelText="Catégorie socio-professionel"
        >
          {categorieSp}
        </SelectField>
        <br />
        <SelectField
          value={this.state.value3}
          onChange={this.handleChange3}
          floatingLabelText="Genre"
        >
          {genre}
        </SelectField>
      </Paper>
    );
  }
}
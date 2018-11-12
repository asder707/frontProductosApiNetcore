import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';


const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
}

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
      input: {
        display: 'none',
    },
    
});

class Cliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            rut:'',
            nombre:'',
            apellido:'',
            tipocliente:'',
            estado:'',
            nombrecomponente:'Ingreso Cliente',
        };
    }

    handleClick = () => {

        if( this.state.id !== '' && 
            this.state.rut !== '' &&
            this.state.nombre !== '' &&
            this.state.apellido !== '' &&
            this.state.tipocliente !== '' &&
            this.state.estado !== ''){

            axios.post('http://localhost:4000/app/cliente/crear', {
                'id': this.state.id,
                'rut': this.state.rut,
                'nombre': this.state.nombre,
                'apellido': this.state.apellido,
                'tipocliente': this.state.tipocliente,
                'estado': this.state.estado
            }, config)
                .then((result) => {
                    if (result.status === 200){
                            window.location.href = "/app/cliente";
                    }else{
                        alert(result.data.mensaje);
                    }
            })
            .catch((err) => {
                alert(err);
            })
        }else{
            alert('Debe llenar los campos');
        }
    }

    render () {
        const { classes } = this.props;
        return (
            <div>
            <center>
                <br/>
                <br/>
                <TextField
                    id="id"
                    label="id"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.id}
                    onChange={e => this.setState({ id: e.target.value })}
                />
                <br/>
                <TextField
                    id="rut"
                    label="rut"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.rut}
                    onChange={e => this.setState({ rut: e.target.value })}
                />
                <br/>
                <TextField
                    id="nombre"
                    label="nombre"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.nombre}
                    onChange={e => this.setState({ nombre: e.target.value })}
                />
                <br/>
                <TextField
                    id="apellido"
                    label="apellido"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.apellido}
                    onChange={e => this.setState({ apellido: e.target.value })}
                />
                <br/>
                <TextField
                    id="tipocliente"
                    label="tipocliente"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.tipocliente}
                    onChange={e => this.setState({ tipocliente: e.target.value })}
                />
                <br/>
                <TextField
                    id="estado"
                    label="estado"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.estado}
                    onChange={e => this.setState({ estado: e.target.value })}
                />
                <br/>
                <Button  
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleClick}
                >
                Guardar
                </Button >
                </center>
            </div>
        );
    }
}

Cliente.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cliente);
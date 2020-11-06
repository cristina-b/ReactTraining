import React, { useReducer } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainbox: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        width: '100%',
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const initialState = {
    name: '',
    type: '',
    status: '',
    entrance: '',
    conversionrates: '',
    data: ''
}

function createData(id, name, type, status, entrance, convRates, date) {
    return { id, name, type, status, entrance, convRates, date };
}

function reducer(state, action) {
    const { type, payload } = action
    return { ...state, [type]: payload }
}

const AddCampaign = ({ setCampaignList }) => {

    const history = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, type, status, entrance, conversionrates, enddate } = state
    const classes = useStyles();
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setCampaignList([createData(30, state.name, state.type, state.status, state.entrance, state.conversionrates, state.enddate)])
        history.push('/')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.mainbox}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add new Campaign
                </Typography>
                <form className={classes.form} noValidate>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            onChange={e => dispatch({ type: "name", payload: e.target.value })}
                            value={name}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            data-testid='input-name'
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="campaign-type-label">Type</InputLabel>
                        <Select
                            labelId="campaign-type-label"
                            id="campaign-type"
                            value={type}
                            onChange={e => dispatch({ type: "type", payload: e.target.value })}
                            label="Type"
                            data-testid='select-type'
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='1'>Email marketing</MenuItem>
                            <MenuItem value='2'>Seasonal push</MenuItem>
                            <MenuItem value='3'>Product launch</MenuItem>
                            <MenuItem value='4'>Brand awareness</MenuItem>
                            <MenuItem value='5'>Rebranding</MenuItem>
                            <MenuItem value='6'>Brand launch</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="campaign-status-label">Status</InputLabel>
                        <Select
                            labelId="campaign-status-label"
                            id="campaign-status"
                            value={status}
                            onChange={e => dispatch({ type: "status", payload: e.target.value })}
                            label="Status"
                            data-testid='select-status'
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='1'>Not started</MenuItem>
                            <MenuItem value='2'>Ongoing</MenuItem>
                            <MenuItem value='3'>Finished</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            onChange={e => dispatch({ type: "entrance", payload: e.target.value })}
                            value={entrance}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="entrance"
                            label="Entrance"
                            name="entrance"
                            autoComplete="entrance"
                            autoFocus
                            data-testid='input-entrance'
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            onChange={e => dispatch({ type: "conversionrates", payload: e.target.value })}
                            value={conversionrates}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="conversionrates"
                            label="Conversion Rates"
                            name="conversionrates"
                            autoComplete="conversionrates"
                            autoFocus
                            data-testid='input-conversionrates'
                        />
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <TextField
                            onChange={e => dispatch({ type: "enddate", payload: e.target.value })}
                            value={enddate}
                            id="enddate"
                            label="End date"
                            type="date"
                            defaultValue="2021-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            data-testid='input-enddate'
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={handleOnSubmit}>
                        Add Campaign
          </Button>
                </form>
            </div>
        </Container>
    );
}

export default AddCampaign
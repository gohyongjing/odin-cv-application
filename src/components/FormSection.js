import React, { Component, useState } from 'react';

import FormPreview from './FormPreview';
/*
class FormSection extends Component {
    constructor(props) {
        super(props);
        const fields = {};
        for (const field of props.fields) {
            fields[field.id] = {label: field.label,
                                value: ""};
        }
        this.state = {editing: true,
                    fields};
    }

    onEdit = (e) => {        
        const newFields = {...this.state.fields}
        newFields[e.target.id].value = e.target.value;
        this.setState({fields: newFields});
    }

    onToggle = (e) => {
        this.setState({editing: !this.state.editing})
    }

    render() {
        return (
            <div className="form-section">
                <h1>{this.props['section-name']}</h1>
                {
                    this.state.editing
                        ? this.props['fields'].map((field) => {
                            return (
                            <div key={field.id}>
                                <label htmlFor={field.id}>{field.label}</label>
                                <input id={field.id} type={field.type} value={this.state.fields[field.id].value} onChange={this.onEdit}></input>
                            </div>
                            )
                        })
                        : <FormPreview fields={this.state.fields}/>
                }
                <input type='button'
                        value={this.state.editing ? 'Submit' : 'Edit'}
                        onClick={this.onToggle}>        
                </input>
            </div>
        );
    }
}
*/

const FormSection = (props) => {

    const [editing, setEditing] = useState(true);

    const initialInputs = {};
    for (const field of props.fields) {
        initialInputs[field.id] = {
            label: field.label,
            value: ""
        };
    }
    const [inputs, setInputs] = useState(initialInputs);

    const onEdit = (e) => {        
        const newInputs = {...inputs}
        newInputs[e.target.id].value = e.target.value;
        setInputs(newInputs);
    }

    const onToggle = (e) => {
        setEditing(!editing);
    }

    return (
        <div className="form-section">
            <h1>{props['section-name']}</h1>
            {
                editing
                    ? props.fields.map((field) => {
                        return (
                            <div key={field.id}>
                                <label htmlFor={field.id}>
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    value={inputs[field.id].value}
                                    onChange={onEdit}
                                />
                            </div>
                        )
                    })
                    : <FormPreview fields={inputs} />
            }
            <input type='button'
                value={editing ? 'Submit' : 'Edit'}
                onClick={onToggle}>
            </input>
        </div>
    );
};

export default FormSection;
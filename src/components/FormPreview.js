import React, {Component} from 'react';

class FormPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const fields = this.props.fields;

        return (
            <div className="form-preview">
                {
                    Object.keys(fields).map((id) => {
                        return (
                            <div key={id}>
                                <div>{fields[id].label}{fields[id].value}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default FormPreview;
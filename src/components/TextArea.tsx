import * as React from 'react'

export interface TextAreaProps extends React.Props<any> {
    showTextSummaryProp: any,
    text: string
}

export default class TextArea extends React.Component<TextAreaProps, any> {
    private showTextSummary = (e) => {
        this.props.showTextSummaryProp(e.target.value)
    };
    
    private style = {
        width: "100%",
        height: 125,
        borderWidth: 2,
        borderColor: '#666',
        borderRadius: 5
    };
    
    render () {
        return (
            <div style={{margin: 15}}>
                <textarea type="text" onChange={this.showTextSummary} value={this.props.text} style={this.style}/>
            </div>
        );
    }
}


import * as React from "react";
import * as mobx from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";

@observer
export default class MainBody extends React.Component {
    constructor(props) {
        super(props);
    }
    @mobx.observable
    private name: string = "Jason Zhu";
    private counter: number = 0;

    public Rename() {
        let names = ["Jason", "Kino", "Const", "Sam"];
        this.counter = (this.counter + 1) % 4;
        this.name = names[this.counter];
    }

    render() {
        return (
            <Container>
                <div style={{ color: "#333", fontSize: "24px", marginBottom: 20 }}>This is React main body, my name is <Highlight>{this.name}</Highlight>.</div>
                <button onClick={this.Rename.bind(this)}>Rename</button>
            </Container>
        );
    }
}

let Container = styled.div`
    width: 1000px;
    min-height: 500px;
    margin: auto;
    padding:20px;
    background-color: #fff;
`;
let Highlight = styled.span`
    color: red;
    font-weight: bold;
`;
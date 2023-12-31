import { define, PropOptions, props, WithComponent, withComponent } from "skatejs";

export const Component = withComponent();

export type Props = {
    myArray: string[];
    myBoolean: boolean;
};
export type State = Props;

export class MyComponent extends Component<Props, State> {
    static readonly is = "my-cmp";
    static readonly props = {
        myArray: props.array,
        myBoolean: props.boolean,
    };
    myBoolean = false;
    myArray: string[] = [];
    private someNonPublicApiProp = "Who are you?";

    private readonly button = document.createElement("button");

    render() {
        this.button.textContent = "Hello World";
        return this.appendChild(this.button);
    }
    connected() {
        this.button.addEventListener("click", this._changeState);
    }
    disconnected() {
        this.button.removeEventListener("click", this._changeState);
    }

    private readonly _changeState = (event: MouseEvent) => {
        // as Props casting is needed as there is absolutely no way how to differently create
        // type definitions for setter and getter
        // tslint:disable-next-line no-object-literal-type-assertion
        this.state = { myBoolean: true } as State;
        // or just directly
        this.myBoolean = true;

        console.log(this.props); // { myArray: [], myBoolean: true }

        // tslint:disable-next-line no-object-literal-type-assertion
        this.state = { myArray: ["hello"] } as State;
        // or just directly
        this.myArray = ["hello"];

        console.log(this.props); // { myArray: ['hello'], myBoolean: true }

        // this will not trigger re-render
        this.someNonPublicApiProp = "Im David";
    };
}

export default define(MyComponent);

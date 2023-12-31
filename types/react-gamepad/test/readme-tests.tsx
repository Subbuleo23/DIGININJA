// https://github.com/SBRK/react-gamepad/blob/master/README.md

import * as React from "react";
import Gamepad, { Axis, Button, layouts } from "react-gamepad";

// Usage example

class App extends React.Component {
    connectHandler(gamepadIndex: number): void {
        console.log(`Gamepad ${gamepadIndex} connected !`);
    }

    disconnectHandler(gamepadIndex: number): void {
        console.log(`Gamepad ${gamepadIndex} disconnected !`);
    }

    buttonChangeHandler(buttonName: Button, down: boolean): void {
        console.log(buttonName, down);
    }

    axisChangeHandler(axisName: Axis, value: number, previousValue: number): void {
        console.log(axisName, value);
    }

    buttonDownHandler(buttonName: Button): void {
        console.log(buttonName, "down");
    }

    buttonUpHandler(buttonName: Button): void {
        console.log(buttonName, "up");
    }

    render() {
        return (
            <Gamepad
                onConnect={this.connectHandler}
                onDisconnect={this.disconnectHandler}
                onButtonChange={this.buttonChangeHandler}
                onAxisChange={this.axisChangeHandler}
            >
                <React.Fragment />
            </Gamepad>
        );
    }
}

console.log(<App />);

// API - Props

<Gamepad
    gamepadIndex={Number()}
    stickThreshold={Number()}
    deadZone={Number()}
    layout={layouts.XBOX}
    onConnect={(gamepadIndex: number) => {}}
    onDisconnect={gamepadIndex => {}}
    onButtonDown={buttonName => {}}
    onButtonUp={buttonName => {}}
    onButtonChange={(buttonName, pressed) => {}}
    onAxisChange={(axisName, value, previousValue) => {}}
    onA={() => {}}
    onB={() => {}}
    onX={() => {}}
    onY={() => {}}
    onStart={() => {}}
    onBack={() => {}}
    onLT={() => {}}
    onRT={() => {}}
    onLB={() => {}}
    onRB={() => {}}
    onLS={() => {}}
    onRS={() => {}}
    onUp={() => {}}
    onDown={() => {}}
    onLeft={() => {}}
    onRight={() => {}}
>
    <React.Fragment />
</Gamepad>;

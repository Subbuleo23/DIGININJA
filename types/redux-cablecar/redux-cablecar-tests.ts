import { applyMiddleware, createStore } from "redux";
import cablecar, { Options } from "redux-cablecar";

const store = createStore(() => null, applyMiddleware(cablecar));

cablecar.setProvider("testProvider");

const car = cablecar.connect(store, "testChannel");

const options: Options = {
    connected: () => {},
    prefix: "ASDF",
};

const anotherCar = cablecar.connect(store, "secondeTestChannel", options);

car.perform("activate", { data: "something" });
anotherCar.send("noice_action");

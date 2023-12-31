import { MonitorInfo } from "../system/monitor";
import { PropagatedApplicationEvents } from "./application";
import { ApplicationEvent, BaseEvent, BaseEventMap } from "./base";
import { PropagatedViewEvents } from "./view";
import { PropagatedWindowEvents } from "./window";
export interface IdleEvent<Topic, Type> extends BaseEvent<Topic, Type> {
    elapsedTime: number;
    isIdle: boolean;
}
export declare type MonitorEvent<Topic, Type> = MonitorInfo & BaseEvent<Topic, Type>;
export interface SessionChangedEvent<Topic, Type> extends BaseEvent<Topic, Type> {
    reason: "lock" | "unlock" | "remote-connect" | "remote-disconnect" | "unknown";
}
export interface SystemEventMapping<Topic = string, Type = string> extends BaseEventMap {
    "application-created": ApplicationEvent<Topic, Type>;
    "desktop-icon-clicked": ApplicationEvent<Topic, Type>;
    "external-window-closed": BaseEvent<Topic, Type>;
    "external-window-created": BaseEvent<Topic, Type>;
    "external-window-hidden": BaseEvent<Topic, Type>;
    "external-window-shown": BaseEvent<Topic, Type>;
    "idle-state-changed": IdleEvent<Topic, Type>;
    "monitor-info-changed": MonitorEvent<Topic, Type>;
    "session-changed": SessionChangedEvent<Topic, Type>;
}
export declare type SystemEvents =
    & PropagatedWindowEvents<"system">
    & PropagatedApplicationEvents<"system">
    & PropagatedViewEvents<"system">
    & {
        [Type in keyof SystemEventMapping]: SystemEventMapping<"system", Type>[Type];
    };

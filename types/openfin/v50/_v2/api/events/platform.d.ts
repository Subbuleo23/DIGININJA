import { ApplicationEventMapping, PropagatedApplicationEventMapping } from "./application";
import { ApplicationEvent } from "./base";
import { PropagatedViewEvents } from "./view";
import { PropagatedWindowEvents } from "./window";
export interface PlatformEventMapping<Topic = string, Type = string> extends ApplicationEventMapping {
    "platform-api-ready": ApplicationEvent<Topic, Type>;
    "platform-snapshot-applied": ApplicationEvent<Topic, Type>;
}
export interface PropagatedPlatformEventMapping<Topic = string, Type = string>
    extends PropagatedApplicationEventMapping
{
    "platform-api-ready": ApplicationEvent<Topic, Type>;
    "platform-snapshot-applied": ApplicationEvent<Topic, Type>;
}
export declare type PlatformEvents =
    & PropagatedWindowEvents<"application">
    & PropagatedViewEvents<"application">
    & {
        [Type in keyof PlatformEventMapping]: PlatformEventMapping<"application", Type>[Type];
    };
export declare type PropagatedPlatformEvents<Topic> = {
    [Type in keyof PropagatedPlatformEventMapping]: PropagatedPlatformEventMapping<Topic, Type>[Type];
};

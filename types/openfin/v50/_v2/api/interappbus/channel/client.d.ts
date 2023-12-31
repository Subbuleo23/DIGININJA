import { ProviderIdentity } from "../../../shapes";
import Transport from "../../../transport/transport";
import { ChannelBase } from "./channel";
declare type DisconnectionListener = (providerIdentity: ProviderIdentity) => any;
interface RoutingInfo extends ProviderIdentity {
    endpointId: string;
}
export declare class ChannelClient extends ChannelBase {
    private disconnectListener;
    private endpointId;
    private clientMap;
    constructor(routingInfo: RoutingInfo, send: Transport["sendAction"], clientMap: Map<string, ChannelClient>);
    readonly providerIdentity: ProviderIdentity;
    dispatch(action: string, payload?: any): Promise<any>;
    onDisconnection(listener: DisconnectionListener): void;
    disconnect(): Promise<void>;
}
export {};

import { ChannelClient, Fin, View, Window } from "../../main";
import { ViewDetached } from "../events/window";
import { Platform } from "./platform";
import { ResizableView, ViewState } from "./resizable-view";
import { ViewComponent } from "./utils";
export default class LayoutManager {
    private fin;
    client: ChannelClient;
    container: HTMLElement;
    containerResizeObserver: ResizeObserver;
    viewsResizeObserver: ResizeObserver;
    dragProxy: any;
    isDragging: boolean;
    layout: GoldenLayout.GoldenLayout;
    ofWindow: Window;
    platform: Platform;
    resizing: boolean;
    showBackgroundImages: boolean;
    constructor(fin: Fin);
    initManager: () => Promise<void>;
    createLayout: (layout: GoldenLayout.Config, container: HTMLElement) => void;
    setContainer: (container: HTMLElement) => void;
    setupDragDropRegions: () => void;
    replaceLayout: (layout: GoldenLayout.Config, container: HTMLElement) => Promise<void>;
    onViewDetached: (event: ViewDetached<"window", "view-detached">) => Promise<void>;
    setupLayoutListeners: () => void;
    registerViewComponent: () => void;
    setupWindowListeners: () => Promise<void>;
    setupResizeObservers: () => void;
    onStackCreated: (stack: GoldenLayout.ContentItem) => void;
    onTabCreated: (tab: GoldenLayout.Tab) => void;
    replaceCloseTabButton: (tab: GoldenLayout.Tab) => void;
    onCloseTabButtonClick: (tab: GoldenLayout.Tab) => Promise<void>;
    onPopoutClick: (stack: GoldenLayout.ContentItem) => void;
    onStackCloseClick: (stack: GoldenLayout.ContentItem) => void;
    onMaximizeToggleClick: () => void;
    updateButtonDisplay: () => void;
    onItemCreated: (item: GoldenLayout.ContentItem) => Promise<void>;
    handleOutOfWindowDrop: (
        e: {
            screenY: number;
            screenX: number;
        },
        parentTab: GoldenLayout.Tab,
        dimensions: {
            width: any;
            height: any;
        },
    ) => Promise<void>;
    onTabDrag: (dragListener: GoldenLayout.EventEmitter, parentTab: GoldenLayout.Tab) => Promise<void>;
    setBackgroundImage: (viewComponent: ViewComponent) => Promise<void>;
    setBackgroundImages: () => Promise<void>;
    addView: (viewConfig: ViewState) => Promise<View>;
    removeView: (viewConfig: any) => Promise<View>;
    closeView: (viewConfig: any) => Promise<void>;
    createChannelConnections: () => Promise<void>;
    getViewComponent: (identity: {
        uuid?: string;
        name: string;
    }) => ViewComponent;
    getViewComponents: () => ViewComponent[];
    hideHighlight: () => void;
    getOfViewFromComponentState: (componentState: {
        name: any;
    }) => View;
    hideAllViews: () => void;
    showAllViews: (resize?: boolean) => Promise<any[]>;
    initializeLayoutViews: () => Promise<void>;
    createResizableView: (bv: ViewComponent) => ResizableView;
    attachView: (rView: ResizableView, bv: ViewComponent) => Promise<View>;
    createAndAttachView: (bv: ViewComponent) => Promise<View>;
    setupViewEvents: (view: View, viewComponent: ViewComponent) => void;
    dispatchLayoutEvent: (action: string, payload?: {}) => Promise<void>;
}

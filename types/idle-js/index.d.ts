declare class IdleJs {
    /**
     * Creates a new unstarted idle tracking instance.
     *
     * @param options Initial options
     * @throws
     */
    constructor(options?: IdleJs.Options);

    /**
     * Starts tracking idle state.
     *
     * @returns this instance for call chaining
     */
    start(): this;

    /**
     * Stops all tracking.
     *
     * @returns this instance for call chaining
     */
    stop(): this;

    /**
     * Reset visible and idle state.
     *
     * @param idle The new idle state, or undefined to use the existing state.
     * @param visible The new visibility state, or undefined to use the existing state.
     * @returns this instance for call chaining
     */
    reset(idle?: boolean, visible?: boolean): this;

    /**
     * Updates idle tracking options.
     */
    set(options?: IdleJs.Options): void;
}

declare namespace IdleJs {
    /**
     * Idle tracking options.
     */
    interface Options {
        /**
         * Idle time in ms.
         *
         * @default 10000
         */
        idle?: number | undefined;
        /**
         * Events that will trigger the idle resetter.
         *
         * @default ['mousemove','keydown','mousedown','touchstart']
         */
        events?: string[] | undefined;
        /**
         * Callback function to be executed after idle time.
         */
        onIdle?: (() => void) | undefined;
        /**
         * Callback function to be executed after back form idleness.
         */
        onActive?: (() => void) | undefined;
        /**
         * Callback function to be executed when window become hidden.
         */
        onHide?: (() => void) | undefined;
        /**
         * Callback function to be executed when window become visible.
         */
        onShow?: (() => void) | undefined;
        /**
         * Set it to false of you want to track only once.
         *
         * @default true
         */
        keepTracking?: boolean | undefined;
        /**
         * Set it to true if you want to start in the idle state.
         *
         * @default false
         */
        startAtIdle?: boolean | undefined;
        /**
         * Set it to true if you want `onIdle` to be raised each time the idle period elapses, not just on idle state changes;
         * i.e.; set to true for `setInterval()` behavior, otherwise for `setTimeout()` behavior.
         *
         * @default false
         */
        recurIdleCall?: boolean | undefined;
    }
}

export = IdleJs;

import * as React from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

const LOADING = 1;
const LOADED = 2;
const itemStatusMap: { [key: number]: number } = {};

const isItemLoaded = (index: number) => !!itemStatusMap[index];
const loadMoreItems = (startIndex: number, stopIndex: number) => {
    for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADING;
    }
    return new Promise<void>(resolve =>
        setTimeout(() => {
            for (let index = startIndex; index <= stopIndex; index++) {
                itemStatusMap[index] = LOADED;
            }
            resolve();
        }, 2500)
    );
};

class Row extends React.PureComponent<{ index: number; style: React.CSSProperties; data: any }> {
    render() {
        const { index, style } = this.props;

        return (
            <div className="ListItem" style={style}>
                {`${itemStatusMap[index] === LOADED ? `Row ${index}` : "Loading..."}`}
            </div>
        );
    }
}

const App = () => {
    const fixedSizeListRef = React.useRef<FixedSizeList | null>(null);
    fixedSizeListRef.current?.scrollToItem(10);
    return (
        <React.Fragment>
            <p className="Note">
                This demo app mimics loading remote data with a 2.5s timer. While rows are "loading" they will display a
                "Loading..." label. Once data has been "loaded" the row number will be displayed. Start scrolling the
                list to automatically load data.
            </p>
            <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={1000} loadMoreItems={loadMoreItems}>
                {({ onItemsRendered, ref }) => (
                    <FixedSizeList
                        className="List"
                        height={150}
                        itemCount={1000}
                        itemSize={30}
                        onItemsRendered={onItemsRendered}
                        ref={listRef => {
                            ref(listRef);
                            fixedSizeListRef.current = listRef;
                        }}
                        width={300}
                    >
                        {Row}
                    </FixedSizeList>
                )}
            </InfiniteLoader>
            <p className="Note">
                Check out the documentation to learn more:
                <br />
                <a href="https://github.com/bvaughn/react-window-infinite-loader#documentation">
                    github.com/bvaughn/react-window-infinite-loader
                </a>
            </p>
        </React.Fragment>
    );
};

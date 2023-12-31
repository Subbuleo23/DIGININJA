import * as React from "react";
import SortableTree, {
    defaultGetNodeKey,
    defaultSearchMethod,
    ExtendedNodeData,
    FullTree,
    getNodeAtPath,
    getTreeFromFlatData,
    NodeData,
    NodeRenderer,
    OnDragPreviousAndNextLocation,
    OnMovePreviousAndNextLocation,
    OnVisibilityToggleData,
    PlaceholderRendererProps,
    SortableTreeWithoutDndContext,
    ThemeProps,
    TreeItem,
} from "react-sortable-tree";
import { Index, ListProps, ListRowRenderer } from "react-virtualized";

class PlaceholderRenderer extends React.Component<PlaceholderRendererProps> {
    render() {
        const backgroundColor = this.props.isOver ? "green" : "red";
        return <div style={{ backgroundColor }}>Custom Placeholder class</div>;
    }
}

class Test extends React.Component {
    render() {
        const treeData: TreeItem[] = [
            {
                title: "Title",
                subtitle: "Subtitle",
                children: [
                    { title: "Child 1", subtitle: "Subtitle", children: [] },
                    { title: "Child 2", subtitle: "Subtitle" },
                ],
            },
        ];
        const reactVirtualizedListProps: ListProps = {
            width: 100,
            height: 44,
            rowCount: 3,
            rowHeight: 44,
            rowRenderer: ("test" as any) as ListRowRenderer,
        };
        const nodeRenderer: NodeRenderer = ("test" as any) as NodeRenderer;
        const theme: ThemeProps = ({
            nodeContentRenderer: nodeRenderer,
        } as any) as ThemeProps;
        const maybeNode = getNodeAtPath({
            treeData,
            path: [0, 1],
            getNodeKey: defaultGetNodeKey,
        });
        return (
            <div>
                <SortableTree
                    treeData={treeData}
                    onChange={(data: TreeItem[]) => {}}
                    style={{ width: "100%" }}
                    className="test-class"
                    innerStyle={{ backgroundColor: "#3A3A3A" }}
                    maxDepth={3}
                    searchMethod={defaultSearchMethod}
                    searchQuery={"Child 1"}
                    searchFocusOffset={1}
                    searchFinishCallback={(matches: NodeData[]) => {
                        const firstTitle = matches[0].node.title;
                    }}
                    generateNodeProps={(data: ExtendedNodeData) => ({
                        buttons: [data.node.title],
                    })}
                    getNodeKey={defaultGetNodeKey}
                    onMoveNode={(data: NodeData & FullTree & OnMovePreviousAndNextLocation) => {}}
                    onVisibilityToggle={(data: OnVisibilityToggleData) => {}}
                    canDrag={true}
                    canDrop={(data: OnDragPreviousAndNextLocation & NodeData) => true}
                    reactVirtualizedListProps={reactVirtualizedListProps}
                    rowHeight={62}
                    slideRegionSize={100}
                    scaffoldBlockPxWidth={44}
                    isVirtualized={true}
                    nodeContentRenderer={nodeRenderer}
                    dndType="testNodeType"
                    placeholderRenderer={PlaceholderRenderer}
                    theme={theme}
                    shouldCopyOnOutsideDrop={true}
                />
                <SortableTreeWithoutDndContext
                    treeData={[{ title: "Title", subtitle: "Subtitle", children: [] }]}
                    onChange={(treeData: TreeItem[]) => {}}
                    style={{ width: "100px" }}
                    shouldCopyOnOutsideDrop={() => false}
                />
                <SortableTree
                    treeData={treeData}
                    onChange={(data: TreeItem[]) => {}}
                    rowHeight={({ treeIndex, node, path }: NodeData & Index): number => treeIndex + path.length}
                />
                <span>{maybeNode ? maybeNode.node.title : ""}</span>
            </div>
        );
    }
}

interface FlatItem {
    key: number;
    parent: number | null;
}
const flatData: FlatItem[] = [
    { key: 1, parent: null },
    { key: 2, parent: 1 },
];

const treeData = getTreeFromFlatData({
    flatData,
    getKey: ({ key }: FlatItem) => key,
    getParentKey: ({ parent }: FlatItem) => parent,
    rootKey: 0,
});

const testWithExtendedTreeItemAttributes = () => {
    const [treeData] = React.useState<Array<TreeItem<{ extraKey?: string }>>>([
        {
            title: "Title",
            subtitle: "Subtitle",
            extraKey: "val",
            children: [
                { title: "Child 1", subtitle: "Subtitle", children: [] },
                { title: "Child 2", subtitle: "Subtitle", extraKey: "val" },
            ],
        },
    ]);
    return (
        <div>
            <SortableTreeWithoutDndContext
                treeData={[{ title: "Title", subtitle: "Subtitle", children: [] }]}
                onChange={(treeData) => {}}
                style={{ width: "100px" }}
                shouldCopyOnOutsideDrop={() => false}
            />
            <SortableTree
                treeData={treeData}
                onChange={(data) => {}}
                rowHeight={({ treeIndex, node, path }: NodeData & Index): number => treeIndex + path.length}
                nodeContentRenderer={({ node: { extraKey } }) => <>{`extra key val: ${extraKey}`}</>}
            />
        </div>
    );
};

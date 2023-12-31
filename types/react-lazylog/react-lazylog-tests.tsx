import * as React from "react";
import { LazyLog, LazyLogProps, ScrollFollow, ScrollFollowProps, ScrollFollowRenderProps } from "react-lazylog";
import Line, { LineProps } from "react-lazylog/build/Line";
import LineContent, { LineContentProps } from "react-lazylog/build/LineContent";
import LineNumber, { LineNumberProps } from "react-lazylog/build/LineNumber";
import LinePart, { LinePartProps } from "react-lazylog/build/LinePart";
import Loading from "react-lazylog/build/Loading";

LinePart.defaultProps.style = { color: "green" };
const linePart = <LinePart part={{ text: "log" }} />;

LineNumber.defaultProps.style = { color: "green" };
const lineNumber = <LineNumber number={5} />;

LineContent.defaultProps.style = { color: "green" };
const lineContent = <LineContent number={5} data={[{ text: "hello" }]} />;

Line.defaultProps.style = { color: "green" };
const line = <Line number={5} data={[{ text: "hello" }]} rowHeight={10} />;

const loading = <Loading />;

const scrollFollow = (
    <ScrollFollow
        render={({ follow, onScroll, startFollowing, stopFollowing }) => <div />}
    />
);

LazyLog.defaultProps.style = { color: "green" };
const lazyLog = <LazyLog url={"https://google.com/log.txt"} />;

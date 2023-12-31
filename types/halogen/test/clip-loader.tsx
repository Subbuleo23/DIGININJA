import * as Halogen from "halogen";
import * as React from "react";

class HalogenTests_ClipLoader_withNoProps extends React.Component {
    render() {
        return <Halogen.ClipLoader />;
    }
}

class HalogenTests_ClipLoader_withAllProps extends React.Component {
    render() {
        return (
            <Halogen.ClipLoader
                loading={false}
                color="black"
                id="MyLoader"
                className="loader"
                verticalAlign="bottom"
                size="200px"
            />
        );
    }
}

import * as Halogen from "halogen";
import * as React from "react";

class HalogenTests_RotateLoader_withNoProps extends React.Component {
    render() {
        return <Halogen.RotateLoader />;
    }
}

class HalogenTests_RotateLoader_withAllProps extends React.Component {
    render() {
        return (
            <Halogen.RotateLoader
                loading={false}
                color="black"
                id="MyLoader"
                className="loader"
                verticalAlign="middle"
                margin="10px"
                size="100px"
            />
        );
    }
}

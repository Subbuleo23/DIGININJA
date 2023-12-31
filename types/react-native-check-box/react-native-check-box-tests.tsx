import * as React from "react";
import { Image, View } from "react-native";
import CheckBox from "react-native-check-box";

export default class MyCheckBox extends React.Component {
    render() {
        return (
            <CheckBox
                style={{ margin: 20 }}
                onClick={() => {
                    console.log("clicked");
                }}
                checkBoxColor={"#000"}
                isChecked={true}
                leftTextStyle={{ color: "red", fontSize: 10 }}
                leftText={"Check me!"}
                checkedImage={<Image source={{ uri: "path/to/image.webp" }} />}
                unCheckedImage={<Image source={{ uri: "path/to/image.webp" }} />}
                rightTextView={<View />}
            />
        );
    }
}

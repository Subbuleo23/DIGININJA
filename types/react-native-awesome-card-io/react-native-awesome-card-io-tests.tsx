import * as React from "react";
import { Platform } from "react-native";
import { CardDetails, CardIOModule, CardIOUtilities, CardIOView } from "react-native-awesome-card-io";

export default class CardIOExample extends React.Component {
    componentWillMount() {
        if (Platform.OS === "ios") {
            CardIOUtilities.preload();
        }
    }

    didScanCard(card: CardDetails) {
        console.log(card);
    }

    scanCard() {
        CardIOModule.scanCard({
            guideColor: "#FF00FF",
            requireCVV: false,
            hideCardIOLogo: true,
            suppressManualEntry: true,
            keepStatusBarStyle: true,
            scannedImageDuration: 0.2,
            suppressConfirmation: true,
        });
    }
    render() {
        return (
            <CardIOView
                style={{ flex: 1 }}
                didScanCard={(card: CardDetails) => {
                    console.log(card);
                }}
            />
        );
    }
}

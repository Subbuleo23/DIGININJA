import * as React from "react";
import ShowMore from "react-show-more";

const longText =
    "scenester Banksy single-origin coffee squid flannel XOXO chillwave Helvetica plaid slow-carb drinking vinegar Wes Anderson gastropub";

<ShowMore
    lines={3}
    more="Show more"
    less="Show less"
    anchorClass=""
>
    {longText}
</ShowMore>;

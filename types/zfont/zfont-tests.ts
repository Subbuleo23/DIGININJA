import * as zdog from "zdog";
import { init } from "zfont";

init(zdog);

// @ts-expect-error
new zdog.Font();
// @ts-expect-error
new zdog.Font({});
const font = new zdog.Font({ src: "./path/to/font.ttf" });

font.waitForLoad(); // $ExpectType Promise<void>

// @ts-expect-error
new zdog.Text();
// @ts-expect-error
new zdog.Text({});
const text = new zdog.Text({ font });
new zdog.Text({ font, value: "a" });
new zdog.Text({ font, value: ["a", "b"] });
new zdog.Text({ font, fontSize: 20 });
new zdog.Text({ font, textAlign: "left" });
new zdog.Text({ font, textAlign: "center" });
new zdog.Text({ font, textAlign: "right" });
new zdog.Text({ font, textBaseline: "top" });
new zdog.Text({ font, textBaseline: "middle" });
new zdog.Text({ font, textBaseline: "bottom" });

text.font; // $ExpectType Font
text.value; // $ExpectType MultilineText
text.fontSize; // $ExpectType number
text.textAlign; // $ExpectType TextAlign
text.textBaseline; // $ExpectType TextBaseline

// @ts-expect-error
new zdog.TextGroup();
// @ts-expect-error
new zdog.TextGroup({});
const textGroup = new zdog.TextGroup({ font });
new zdog.TextGroup({ font, value: "a" });
new zdog.TextGroup({ font, value: ["a", "b"] });
new zdog.TextGroup({ font, fontSize: 20 });
new zdog.TextGroup({ font, textAlign: "left" });
new zdog.TextGroup({ font, textAlign: "center" });
new zdog.TextGroup({ font, textAlign: "right" });
new zdog.TextGroup({ font, textBaseline: "top" });
new zdog.TextGroup({ font, textBaseline: "middle" });
new zdog.TextGroup({ font, textBaseline: "bottom" });

textGroup.font; // $ExpectType Font
textGroup.value; // $ExpectType MultilineText
textGroup.fontSize; // $ExpectType number
textGroup.textAlign; // $ExpectType TextAlign
textGroup.textBaseline; // $ExpectType TextBaseline
textGroup.color; // $ExpectType string
textGroup.fill; // $ExpectType boolean
textGroup.stroke; // $ExpectType number | false

zdog.waitForFonts(); // $ExpectType Promise<undefined[]>

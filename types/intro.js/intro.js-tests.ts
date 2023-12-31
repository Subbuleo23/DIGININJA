import introJs = require("intro.js");

const intro = introJs();
const introWithElement = introJs(document.body);
const introWithQuerySelector = introJs("body");

intro.setOption("doneLabel", "Next page");
intro.setOption("overlayOpacity", 50);
intro.setOption("showProgress", true);
intro.setOptions({
    hidePrev: true,
    hideNext: false,
    nextToDone: true,
    scrollPadding: 30,
    hintAnimation: false,
    steps: [
        {
            intro: "Hello world!",
        },
        {
            element: document.querySelector("#step1") as HTMLElement,
            intro: "This is a tooltip.",
        },
        {
            element: document.querySelectorAll("#step2")[0] as HTMLElement,
            intro: "Ok, wasn't that fun?",
            position: "right",
        },
        {
            element: "#step3",
            intro: "More features, more fun.",
            position: "left",
        },
        {
            element: "#step4",
            intro: "Another step.",
            position: "bottom",
            tooltipClass: "step4Class",
            highlightClass: "",
        },
        {
            element: "#step4",
            intro: "Another step.",
            position: "bottom",
            scrollTo: "tooltip",
        },
        {
            element: "#step5",
            intro: "Get it, use it.",
            disableInteraction: true,
        },
    ],
    hints: [
        {
            element: "#step1",
            hint: "This is a hint",
            hintPosition: "middle-right",
        },
        {
            element: document.querySelectorAll("#step2")[0] as HTMLElement,
            hint: "This is another hint",
            hintPosition: "top-left",
        },
    ],
});

intro
    .start()
    .nextStep()
    .previousStep()
    .goToStepNumber(1)
    .start()
    .goToStep(2)
    .exit()
    .exit(true)
    .exit(false)
    .refresh()
    .onbeforeexit(() => {
        return true;
    })
    .onbeforeexit(() => {
        alert("Before Exit");
    })
    .onbeforechange(function(element) {
        element.getAttribute("class");
    })
    .onafterchange(function(element) {
        element.getAttribute("class");
    })
    .onchange(function(element) {
        element.getAttribute("class");
    })
    .oncomplete(function() {
        alert("Done");
    })
    .onexit(function() {
        alert("Exiting");
    })
    .onhintsadded(function() {
        alert("Hints added");
    })
    .onhintclick(function(hintElement, item, stepId) {
        hintElement.getAttribute("class");
    })
    .onhintclose(function(stepId) {
        alert("Hint close for Step ID " + stepId);
    })
    .addHints()
    .showHint(1)
    .showHints()
    .hideHint(1)
    .hideHints()
    .hideHint(1)
    .hideHints()
    .clone();

const currentStep: number | undefined = intro.currentStep();

introWithElement
    .start()
    .exit()
    .clone();

introWithQuerySelector
    .start()
    .exit()
    .clone();

// test: intro.js should expose instance type #41108
class SomeClass {
    introJsInstance: introJs.IntroJs;

    someMethod() {
        this.introJsInstance = introJs();
    }
}

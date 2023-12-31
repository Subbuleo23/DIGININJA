import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const basicRecapchta = <ReCAPTCHA sitekey="xxx" onChange={a => a} />;
const invisibleRecaptcha: React.FC = () => {
    const recaptchaRef = React.createRef<ReCAPTCHA>();

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="xxx"
            size="invisible"
        />
    );
};

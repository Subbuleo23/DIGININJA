import { Linter } from "./lint";

declare module "../../" {
    namespace lint {
        const javascript: Linter<any>;
    }
}

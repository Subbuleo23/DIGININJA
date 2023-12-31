import { TableDefinition } from "cypress-cucumber-preprocessor";
import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Before({}, () => {}); // $ExpectType void
Then(`I see {string} in the title`, (title: string) => {}); // $ExpectType void
Given("I open Google page", () => {}); // $ExpectType void

// $ExpectType void
When("I fill the form with the following information:", (dataTable: TableDefinition) => {
    dataTable.raw(); // $ExpectType string[][]
    dataTable.rowsHash(); // $ExpectType { [firstCol: string]: string; }
    dataTable.rows(); // $ExpectType string[][]
    dataTable.hashes(); // $ExpectType { [colName: string]: string; }[]
});

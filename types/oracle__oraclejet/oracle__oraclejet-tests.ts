// Since all the definitions are auto generated from jsdoc doclets and internally tested through application,
// add some basic tests here.
import { ojAccordion } from "@oracle/oraclejet/ojaccordion";
import AnimationUtils = require("@oracle/oraclejet/ojanimation");
import ArrayDataProvider = require("@oracle/oraclejet/ojarraydataprovider");
import ArrayTreeDataProvider = require("@oracle/oraclejet/ojarraytreedataprovider");
import {
    AttributeGroupHandler,
    ColorAttributeGroupHandler,
    ShapeAttributeGroupHandler,
} from "@oracle/oraclejet/ojattributegrouphandler";
import { ojAvatar } from "@oracle/oraclejet/ojavatar";
import { ojButton, ojButtonsetMany, ojButtonsetOne } from "@oracle/oraclejet/ojbutton";
import {
    ojChart,
    ojChartGroup,
    ojChartItem,
    ojChartSeries,
    ojSparkChart,
    ojSparkChartItem,
} from "@oracle/oraclejet/ojchart";
import { ojCheckboxset } from "@oracle/oraclejet/ojcheckboxset";
import { ojCollapsible } from "@oracle/oraclejet/ojcollapsible";
import CollectionDataprovider = require("@oracle/oraclejet/ojcollectiondataprovider");
import Color = require("@oracle/oraclejet/ojcolor");
import { ojColorPalette } from "@oracle/oraclejet/ojcolorpalette";
import { ojColorSpectrum } from "@oracle/oraclejet/ojcolorspectrum";
import Components = require("@oracle/oraclejet/ojcomponentcore");
import Composite = require("@oracle/oraclejet/ojcomposite");
import Config = require("@oracle/oraclejet/ojconfig");
import Context = require("@oracle/oraclejet/ojcontext");
import { ojConveyorBelt } from "@oracle/oraclejet/ojconveyorbelt";
import { ojDataGrid } from "@oracle/oraclejet/ojdatagrid";
import {
    DataMapping,
    DataProvider,
    DataProviderAddOperationEventDetail,
    DataProviderMutationEventDetail,
    DataProviderOperationEventDetail,
} from "@oracle/oraclejet/ojdataprovider";
import {
    ojDatePicker,
    ojDateTimePicker,
    ojInputDate,
    ojInputDateTime,
    ojInputTime,
} from "@oracle/oraclejet/ojdatetimepicker";
import { ojDefer } from "@oracle/oraclejet/ojdefer";
import DeferredDataprovider = require("@oracle/oraclejet/ojdeferreddataprovider");
import { ojDiagram, ojDiagramLink, ojDiagramNode } from "@oracle/oraclejet/ojdiagram";
import { ojDialog } from "@oracle/oraclejet/ojdialog";
import { dvtBaseComponent } from "@oracle/oraclejet/ojdvt-base";
import { editableValue } from "@oracle/oraclejet/ojeditablevalue";
import ExpressionUtils = require("@oracle/oraclejet/ojexpressionutils");
import { FileUploadTransport, ojFilePicker } from "@oracle/oraclejet/ojfilepicker";
import { ojFilmStrip } from "@oracle/oraclejet/ojfilmstrip";
import { ojFormLayout } from "@oracle/oraclejet/ojformlayout";
import { ojGantt, ojGanttDependency, ojGanttRow, ojGanttTask } from "@oracle/oraclejet/ojgantt";
import GanttUtils = require("@oracle/oraclejet/ojganttutils");
import { ojLedGauge, ojRatingGauge, ojStatusMeterGauge } from "@oracle/oraclejet/ojgauge";
import { ojInputNumber } from "@oracle/oraclejet/ojinputnumber";
import { ojInputPassword, ojInputText, ojTextArea } from "@oracle/oraclejet/ojinputtext";
import { ExpandAllKeySet, ExpandedKeySet, KeySet } from "@oracle/oraclejet/ojkeyset";
import { ObservableExpandedKeySet } from "@oracle/oraclejet/ojknockout-keyset";
import KnockoutUtils = require("@oracle/oraclejet/ojknockout-model");
import KnockoutTemplateUtils = require("@oracle/oraclejet/ojknockouttemplateutils");
import { ojLabel } from "@oracle/oraclejet/ojlabel";
import { ojLabelValue } from "@oracle/oraclejet/ojlabelvalue";
import { ojLegend } from "@oracle/oraclejet/ojlegend";
import ListDataProviderView = require("@oracle/oraclejet/ojlistdataproviderview");
import { ojListView } from "@oracle/oraclejet/ojlistview";
import LocaleData = require("@oracle/oraclejet/ojlocaledata");
import Logger = require("@oracle/oraclejet/ojlogger");
import { ojMasonryLayout } from "@oracle/oraclejet/ojmasonrylayout";
import { ojMenu } from "@oracle/oraclejet/ojmenu";
import { ojMenuSelectMany } from "@oracle/oraclejet/ojmenuselectmany";
import { ojMessage } from "@oracle/oraclejet/ojmessage";
import { ojMessages } from "@oracle/oraclejet/ojmessages";
import Message = require("@oracle/oraclejet/ojmessaging");
import { Collection, Model, OAuth, URLError } from "@oracle/oraclejet/ojmodel";
import { ojModule } from "@oracle/oraclejet/ojmodule-element";
import ModuleElementUtils = require("@oracle/oraclejet/ojmodule-element-utils");
import ModuleAnimations = require("@oracle/oraclejet/ojmoduleanimations");
import { ojNavigationList, ojTabBar } from "@oracle/oraclejet/ojnavigationlist";
import { ojNBox } from "@oracle/oraclejet/ojnbox";
import { ojOptgroup } from "@oracle/oraclejet/ojoptgroup";
import { ojOption } from "@oracle/oraclejet/ojoption";
import { ojPictoChart, ojPictoChartItem } from "@oracle/oraclejet/ojpictochart";
import { ojPopup } from "@oracle/oraclejet/ojpopup";
import { ojProgress } from "@oracle/oraclejet/ojprogress";
import { ojProgressList, ProgressItem } from "@oracle/oraclejet/ojprogresslist";
import PullToRefreshUtils = require("@oracle/oraclejet/ojpulltorefresh");
import { ojRadioset } from "@oracle/oraclejet/ojradioset";
import { ojRefresher } from "@oracle/oraclejet/ojrefresher";
import ResponsiveKnockoutUtils = require("@oracle/oraclejet/ojresponsiveknockoututils");
import ResponsiveUtils = require("@oracle/oraclejet/ojresponsiveutils");
import Router = require("@oracle/oraclejet/ojrouter");
import { ojComboboxMany, ojComboboxOne, ojSelectMany, ojSelectOne } from "@oracle/oraclejet/ojselectcombobox";
import { ojSlider } from "@oracle/oraclejet/ojslider";
import { ojSunburst } from "@oracle/oraclejet/ojsunburst";
import { ojSwipeActions } from "@oracle/oraclejet/ojswipeactions";
import SwipeToRevealUtils = require("@oracle/oraclejet/ojswipetoreveal");
import { ojSwitch } from "@oracle/oraclejet/ojswitch";
import { ojSwitcher } from "@oracle/oraclejet/ojswitcher";
import { ojTable } from "@oracle/oraclejet/ojtable";
import { ojTagCloud } from "@oracle/oraclejet/ojtagcloud";
import { ojThematicMap } from "@oracle/oraclejet/ojthematicmap";
import ThemeUtils = require("@oracle/oraclejet/ojthemeutils");
import { dvtTimeComponent } from "@oracle/oraclejet/ojtime-base";
import { ojTimeAxis } from "@oracle/oraclejet/ojtimeaxis";
import TimeUtils = require("@oracle/oraclejet/ojtimeutils");
import { ojToolbar } from "@oracle/oraclejet/ojtoolbar";
import { ojTrain } from "@oracle/oraclejet/ojtrain";
import Translations = require("@oracle/oraclejet/ojtranslation");
import TreeDataProvider = require("@oracle/oraclejet/ojtreedataprovider");
import { ojTreemap } from "@oracle/oraclejet/ojtreemap";
import {
    AsyncValidator,
    LengthValidator,
    LengthValidatorFactory,
    RegExpValidator,
    RegExpValidatorFactory,
    RequiredValidator,
    RequiredValidatorFactory,
    Validation,
    Validator,
    ValidatorError,
    ValidatorFactory,
} from "@oracle/oraclejet/ojvalidation-base";
import {
    DateRestrictionValidator,
    DateRestrictionValidatorFactory,
    DateTimeRangeValidator,
    DateTimeRangeValidatorFactory,
} from "@oracle/oraclejet/ojvalidation-datetime";
import { NumberRangeValidator, NumberRangeValidatorFactory } from "@oracle/oraclejet/ojvalidation-number";
import { ojValidationGroup } from "@oracle/oraclejet/ojvalidationgroup";

const onChangedCallback = (event: CustomEvent) => {
};
const myHTMLElement = document.getElementById("myelement");
const accordionElement = myHTMLElement as ojAccordion;
accordionElement.multiple = true;
accordionElement.onMultipleChanged = onChangedCallback;

const avatarElement = myHTMLElement as ojAvatar;
avatarElement.size = "xxs";
avatarElement.set("initials", "I");
avatarElement.unset("src");

const button = myHTMLElement as ojButtonsetOne;
button.chroming = "half";

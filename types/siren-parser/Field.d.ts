export default function(field: object): Field;

export interface Field {
    name: string;
    class?: string[] | undefined;
    type?: FieldType | undefined;
    title?: string | undefined;
    value?: any;
    min?: number | undefined;
    max?: number | undefined;

    hasClass(cls: string | RegExp): boolean;
}

export enum FieldType {
    Hidden = "hidden",
    Text = "text",
    Search = "search",
    Telephone = "tel",
    Url = "url",
    Email = "email",
    Password = "password",
    DateTime = "datetime",
    Date = "date",
    Month = "month",
    Week = "week",
    Time = "time",
    LocalDateTime = "datetime-local",
    Number = "number",
    Range = "range",
    Color = "color",
    Checkbox = "checkbox",
    Radio = "radio",
    File = "file",
}

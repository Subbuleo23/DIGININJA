interface MyModel {
    numericProperty: number;
}

function testConstructor(model: PouchDB.Core.Document<MyModel>) {
    let db = new PouchDB<MyModel>(null, {
        adapter: "idb",
    });
    db = new PouchDB<MyModel>("myDb", {
        adapter: "http",
    });
    db.get("model").then((result) => model);
    db.viewCleanup().catch((error) => {
    });
}

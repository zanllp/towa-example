import { Document } from './entity/document';
const { store } = Document;
(async () => {
    const doc = new Document();
    doc.authorId = 1;
    doc.title = 'hello world';
    doc.content = '23333';
    doc.clickCount = 0;
    await store.push(doc);

    const { id } = doc;
    const docs = await store.all();
    docs.forEach(x => console.info(x.id));

    await store.getOrFail(id).then(async x => {
        x.title = 'emmmm';
        await store.save(x);
    });
    console.info('title:' + await store.getOrFail(id).then(x => x.title));
    await store.getInstance(id).then(inst => inst.setItems({ content: 'towa' }));
    console.info('content:'+await store.getOrFail(id).then(x => x.content));

    await store.del(id);
    console.info(await store.get(id) === null);
})();

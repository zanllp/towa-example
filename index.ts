import { Document } from './entity/document';
const { store } = Document;
(async () => {
    const doc = new Document();
    doc.authorId = 1;
    doc.title = 'hello world';
    doc.content = '23333';
    await store.push(doc);
    const docs = await store.all();
    docs.forEach(x => x && console.info(x));
})();

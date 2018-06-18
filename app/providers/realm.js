import { RealmProvider, createRealmStore } from 'realm-react-redux';
import writer from 'app/writers';
import { ToDo } from 'app/models';

export function configureRealmStore() {
    // This will create a Realm instance to use in the store, using the options
    // passed in the second argument. To pass an existing Realm instance instead
    // you can use createRealmStore(writer, { realm: yourRealmInstance })
    return createRealmStore(writer, { schema: [ToDo] });
}

export { RealmProvider };

export class ObjectId {
    private _android: org.bson.types.ObjectId;

    private constructor() {
    }

    public static fromNative(instance) {
        const objId = new ObjectId();
        objId._android = instance;
        return objId;
    }

    get counter() {
        return this._android.getCounter();
    }

    toHexString() {
        return this._android.toHexString();
    }

    get date() {
        return new Date(this._android.getDate().toGMTString());
    }

    get time() {
        return this._android.getTime();
    }

    get timeSecond() {
        return this._android.getTimeSecond();
    }

    get timeStamp() {
        return this._android.getTimestamp();
    }

}

import * as bson from 'bson';

export function deserialize(object: any) {
    if (typeof object.getClass  === 'function' && typeof object.getClass().getName === 'function' && object.getClass().getName() === 'org.bson.Document') {
        return (bson as any).EJSON.parse(object.toJson());
    }
    return null;
}


export class Bson {
    public static ObjectId(): ObjectId {
        return ObjectId.fromNative(new org.bson.types.ObjectId());
    }
}

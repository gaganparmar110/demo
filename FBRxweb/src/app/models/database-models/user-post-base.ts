import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class UserPostBase {

//#region postId Prop
        @prop()
        postId : number;
//#endregion postId Prop


//#region post Prop
        @required()
        post : string;
//#endregion post Prop


//#region userId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        userId : number;
//#endregion userId Prop


//#region createdDateTime Prop
        @required()
        createdDateTime : any;
//#endregion createdDateTime Prop


//#region totalLike Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        totalLike : number;
//#endregion totalLike Prop


//#region totalComment Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        totalComment : number;
//#endregion totalComment Prop


//#region totalShare Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        totalShare : number;
//#endregion totalShare Prop









}
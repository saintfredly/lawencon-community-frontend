import { FileReq } from "../file/file-req"


export interface ProfileResGetAll{
    userProfileId : string
    userId : string
    file : FileReq
    fullName : string
    email : string
    phone : string
    address : string
    company : string
    industryId : string
    positionId : string
    industryName : string
    positionName : string
}
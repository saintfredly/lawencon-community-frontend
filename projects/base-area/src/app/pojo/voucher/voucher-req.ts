export interface VoucherReq{
    id : string
    voucherCode : string
    voucherName : string
    voucherDescription : string
    amount : number
    dateStart : Date
    dateExpired : Date
    ver : number
    isActive : boolean
}
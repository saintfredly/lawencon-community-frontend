export interface VoucherRes{
    voucherCode : string
    voucherName : string
    voucherDescription : string
    amount : number
    dateStart : Date
    dateExpired : Date
    createdAt : Date
    ver : number
    isActive : boolean
}
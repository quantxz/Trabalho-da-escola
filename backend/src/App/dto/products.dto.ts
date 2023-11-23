interface productsDto {
    id? :           Exclude<any, null | undefined>
    name:           Exclude<any, null | undefined>
    price:          Exclude<any, null | undefined>
    category:       Exclude<any, null | undefined>
    description:    Exclude<any, null | undefined>
    quantity:       Exclude<any, null | undefined>
    supplier:       Exclude<any, null | undefined>
    status:         Exclude<any, null | undefined>
    brand:          Exclude<any, null | undefined>
    model:          Exclude<any, null | undefined>
}


export default productsDto

export interface UpdateAppListDto{
    readonly id: string,
    readonly saveData: string,
}

export interface CreateAppListDto{
    readonly name: string,
    readonly data: string,
    readonly saveData: number
}
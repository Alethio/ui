export interface IGridFieldRenderer<T> {
    render: IGridFieldRendererFn<T>;
}

interface IGridFieldRendererFn<T> {
    (f: T): React.ReactChild;
}

export type IGridFieldRendererObjectOrFn<T> = IGridFieldRenderer<T> | IGridFieldRendererFn<T>;

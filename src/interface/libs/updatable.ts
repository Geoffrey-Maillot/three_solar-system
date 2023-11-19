export type UpdatableParams = { delta?: number; elapsed?: number };
export type Updatable = ({ delta, elapsed }: UpdatableParams) => void;

export interface PluginData {
    sourceUrl: string;
    callbackUrl: string;
}

export enum PluginCompletionMessageStatus {
    Succeeded = "succeeded",
    Failed = "failed",
}

export class PluginCompletionMessage {
    public original!: PluginData;
    public status!: PluginCompletionMessageStatus;
    public size!: number;
    public target!: string;
    public extension!: string;
    public fileName!: string;
}

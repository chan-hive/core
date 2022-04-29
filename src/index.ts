export interface PluginData {
    sourceFile: FileInformation;
    callbackUrl: string;
    pluginName: string;
}

export enum PluginCompletionMessageStatus {
    Succeeded = "succeeded",
    Failed = "failed",
}

export class PluginCompletionMessage {
    public original!: PluginData;
    public status!: PluginCompletionMessageStatus;
    public size!: number;
    public extension!: string;
    public fileName!: string;
}

export interface FileInformation {
    name: string;
    extension: string;
    mime: string;
    md5: string;
    size: number;
    width: number;
    height: number;
    uploadedTimestamp: number;
    metadata?: string | null;
    url: string;
}

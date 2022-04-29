export interface PluginData {
    sourceFile: FileInformation;
    callbackUrl: string;
    pluginName: string;
}

export enum PluginCompletionMessageStatus {
    Succeeded = "succeeded",
    Failed = "failed",
}

export interface PluginCompletionMessage {
    pluginName: string;
    status: PluginCompletionMessageStatus;
    size: number;
    extension: string;
    fileName: string;
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

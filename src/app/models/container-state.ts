export class ContainerState {
    Status: string = 'pending';
    Running: boolean = true;
    Paused: boolean;
    Restarting: boolean;
    OOMKilled: boolean;
    Dead: boolean;
    Pid: number;
    ExitCode: number;
    Error: string;
    StartedAt: string; //RFC3339
    FinishedAt: string; //RFC3339
}

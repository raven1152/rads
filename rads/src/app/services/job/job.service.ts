import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {
  public apiRoot = 'assets/data';
  public apiJobs = 'job-data';
  public rows: any[];

  constructor(private http: HttpClient) { }

  public async getJobs(): Promise<Job[]> {
    const apiURL = `${this.apiRoot}/${this.apiJobs}.json`;
    await this.http.get<Job[]>(apiURL)
        .toPromise()
        .then(
          res => {
            this.rows = res;
          }
        );
    return this.rows;
  }
}

export class Job {
  constructor(
    public JobNumber: string,
    public DataId: number,
    public IsActive: boolean,
    public HasSnapshot: boolean,
    public HasDocument: boolean,
    public HasRendered: boolean,
    public RenderedDocumentCount: number,
    public RenderedDocumentVersion: string,
    public SnapshotId: number,
    public SnapshotTime: Date,
    public DueDate: Date,
    public ShipDate: Date,
    public DocumentId: number,
    public Description: string,
    public FromBaseId: number,
    public FromTemplateId: number,
    public FromDocumentId: number,
    public ProcessValue: number,
    public ProcessValueMax: number,
    public StepValue: number,
    public StepValueMax: number,
    public CacheLocation: string,
    public PercentComplete: number,
    public ServerMessages: Array<string>
  ) { }
}

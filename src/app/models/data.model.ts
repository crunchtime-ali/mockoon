import { Environment, Environments, Route } from '@mockoon/commons';

export type DataSubject = 'environment' | 'route';

export type ExportDataEnvironment = { type: 'environment'; item: Environment };
export type ExportDataRoute = { type: 'route'; item: Route };

export type ExportData = (ExportDataEnvironment | ExportDataRoute)[];

export type Export = {
  source: string;
  data: ExportData;
};

// Export file format prior 1.7.0
export type OldExport = {
  id: string;
  appVersion: string;
  subject: 'full' | 'environment' | 'route';
  data: Environments | Environment | Route;
};

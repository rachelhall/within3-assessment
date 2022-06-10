export interface IMissionData {
  description: string;
  id: string;
  manufacturers: string[];
  name: string;
  twitter?: string | null;
  website?: string;
  wikipedia?: string;
}

export interface IMission {
  id: string;
  mission: IMissionData;
}

export interface IMissions {
  missions: IMissionData[];
}

export interface IMissionVars {
  missionId: string;
}

export interface IMissionsVars {
  limit: number;
}

// export interface ILaunch {
//   details: string;
//   id: string;
//   mission_id: string;
//   mission_name: string;
//   launch_date_utc: Date;
//   launch_success: boolean;
// }

// export interface ILaunchVars {
//   limit: number;
// }

// export interface ILaunchData {
//   launches: ILaunch[];
// }

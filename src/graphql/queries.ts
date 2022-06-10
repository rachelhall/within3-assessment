import { gql } from "@apollo/client";

export const GET_MISSIONS = gql`
  query Missions($limit: Int) {
    missions(limit: $limit) {
      id
      name
    }
  }
`;

export const GET_MISSION = gql`
  query Mission($missionId: ID!) {
    mission(id: $missionId) {
      description
      id
      manufacturers
      name
      payloads {
        id
      }
      twitter
      website
      wikipedia
    }
  }
`;

// export const GET_LAUNCHES = gql`
//   query Launches($limit: Int) {
//     launches(limit: $limit) {
//       mission_name
//       launch_date_utc
//       mission_id
//     }
//   }
// `;

// export const GET_LAUNCH = gql`
//   query Launch($launchId: ID!) {
//     launch(id: $launchId) {
//       details
//       id
//       mission_id
//       launch_date_utc
//       launch_success
//     }
//   }
// `;
